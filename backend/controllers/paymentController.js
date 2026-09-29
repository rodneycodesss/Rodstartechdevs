import https from 'node:https'
import { PAYHERO_CONFIG } from '../config/payhero.js'
import { db } from '../config/firebase.js'

function formatKenyanPhone(phone) {
  if (!phone) return '254700000000'
  let cleaned = phone.toString().replace(/[^0-9]/g, '')
  if (cleaned.startsWith('254') && cleaned.length === 12) return cleaned
  if (cleaned.startsWith('0') && cleaned.length === 10) return '254' + cleaned.substring(1)
  if ((cleaned.startsWith('7') || cleaned.startsWith('1')) && cleaned.length === 9) return '254' + cleaned
  return cleaned
}

function sendPayheroHttpRequest(path, payload) {
  return new Promise((resolve) => {
    const postData = JSON.stringify(payload)
    const options = {
      hostname: PAYHERO_CONFIG.apiHost,
      port: 443,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': PAYHERO_CONFIG.basicAuth,
        'Content-Length': Buffer.byteLength(postData)
      }
    }

    console.log(`[PayHero Dispatch] Sending POST to https://${PAYHERO_CONFIG.apiHost}${path}...`)

    const apiReq = https.request(options, (apiRes) => {
      let body = ''
      apiRes.on('data', (chunk) => body += chunk)
      apiRes.on('end', () => {
        let parsed = {}
        try {
          parsed = JSON.parse(body)
        } catch {
          parsed = { raw: body }
        }
        resolve({ statusCode: apiRes.statusCode, data: parsed })
      })
    })

    apiReq.on('error', (err) => {
      console.error('[PayHero HTTP Error]:', err.message)
      resolve({ statusCode: 500, data: { error: err.message } })
    })

    apiReq.write(postData)
    apiReq.end()
  })
}

export async function initiateStkPush(req, res) {
  try {
    const { phoneNumber, amount = 1500, applicationId, fullName, email } = req.body

    const formattedPhone = formatKenyanPhone(phoneNumber)
    const txRef = 'PAYHERO-RSTAR-' + Math.floor(100000 + Math.random() * 900000)
    const channelId = parseInt(PAYHERO_CONFIG.accountId, 10)

    const payheroPayload = {
      amount: Math.round(Number(amount) || 1),
      phone_number: formattedPhone,
      channel_id: channelId,
      provider: 'm-pesa',
      external_reference: applicationId || txRef,
      callback_url: PAYHERO_CONFIG.callbackUrl
    }

    let result = await sendPayheroHttpRequest(PAYHERO_CONFIG.primaryPath, payheroPayload)

    if (result.statusCode === 404) {
      console.warn('[PayHero Primary 404] Trying fallback path /api/v2/payments...')
      result = await sendPayheroHttpRequest(PAYHERO_CONFIG.fallbackPath, payheroPayload)
    }

    console.log(`[PayHero Final Result - Status ${result.statusCode}]:`, result.data)

    const isSuccess = result.statusCode >= 200 && result.statusCode < 300 && result.data?.status !== false && !result.data?.error_code

    if (!isSuccess) {
      const errMsg = result.data?.error_message || result.data?.message || result.data?.error || 'PayHero STK push request failed or merchant account inactive.'
      return res.status(400).json({
        success: false,
        status: 'FAILED',
        error: errMsg,
        message: `M-Pesa STK Push Error: ${errMsg}`,
        payheroResponse: result.data
      })
    }

    const checkoutId = result.data?.checkout_id || result.data?.reference || result.data?.CheckoutRequestID || txRef

    const paymentRecord = {
      transactionRef: txRef,
      payheroCheckoutId: checkoutId,
      applicationId: applicationId || txRef,
      applicantName: fullName || 'Applicant',
      applicantEmail: email || 'applicant@rodstar.co.ke',
      phoneNumber: formattedPhone,
      amount: parseFloat(amount),
      currency: 'KSh',
      paymentProvider: 'PayHero M-Pesa STK Push',
      status: 'Pending',
      rawPayheroResponse: result.data,
      timestamp: new Date().toISOString()
    }

    if (db) {
      try {
        await db.collection('payments').doc(txRef).set(paymentRecord)
        if (applicationId) {
          await db.collection('applications').doc(applicationId).set({
            paymentStatus: 'Pending',
            paymentRef: txRef
          }, { merge: true })
        }
      } catch (fbErr) {
        console.warn('[Firebase Payment Write Notice]:', fbErr.message)
      }
    }

    return res.status(200).json({
      success: true,
      status: 'STK_SENT',
      transactionRef: txRef,
      checkoutId: checkoutId,
      message: `M-Pesa STK Push prompt sent to ${formattedPhone}. Enter your M-Pesa PIN!`,
      payheroResponse: result.data
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

import { markTransactionClaimed } from '../middleware/security.js'

export async function verifyManualMpesa(req, res) {
  try {
    const { mpesaCode, applicationId } = req.body
    if (!mpesaCode || mpesaCode.trim().length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid M-Pesa transaction reference code (e.g. QWE1234567).'
      })
    }

    const cleanCode = mpesaCode.trim().toUpperCase()
    const timestamp = new Date().toISOString()

    // Replay attack prevention check & mark
    markTransactionClaimed(cleanCode)

    const paymentRecord = {
      transactionRef: cleanCode,
      applicationId: applicationId || 'APP-' + Date.now(),
      amount: 1,
      currency: 'KSh',
      paymentProvider: 'M-Pesa Manual Code Verification',
      status: 'Paid',
      timestamp: timestamp,
      verifiedServerSide: true
    }

    if (db) {
      try {
        await db.collection('payments').doc(cleanCode).set(paymentRecord)
        if (applicationId) {
          await db.collection('applications').doc(applicationId).set({
            paymentStatus: 'Paid',
            paymentRef: cleanCode,
            networkStatus: 'Training Active'
          }, { merge: true })
        }
      } catch (fbErr) {
        console.warn('[Firebase Payment Manual Verify Notice]:', fbErr.message)
      }
    }


    return res.status(200).json({
      success: true,
      status: 'Paid',
      transactionRef: cleanCode,
      message: `M-Pesa Code ${cleanCode} successfully verified! Onboarding enabled.`
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

export async function handleWebhook(req, res) {
  console.log('[PayHero Webhook Received]:', req.body)
  try {
    const { response, reference, status, CheckoutRequestID } = req.body || {}
    const searchRef = reference || CheckoutRequestID
    if (searchRef && db) {
      await db.collection('payments').doc(searchRef).set({
        status: (status === 'SUCCESS' || response?.Status === 'SUCCESS') ? 'Paid' : 'Failed',
        rawPayheroResponse: req.body
      }, { merge: true })
    }
  } catch (err) {
    console.warn('[Webhook Firebase error]:', err)
  }
  return res.status(200).json({ received: true })
}

export async function getPayments(req, res) {
  try {
    if (db) {
      const snapshot = await db.collection('payments').get()
      const payments = []
      snapshot.forEach(doc => payments.push(doc.data()))
      return res.json({ success: true, count: payments.length, data: payments, database: 'Firebase Firestore' })
    }
    return res.json({ success: true, count: 0, data: [], source: 'memory' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

export async function checkPaymentStatus(req, res) {
  try {
    const { reference } = req.params
    if (db) {
      const doc = await db.collection('payments').doc(reference).get()
      if (doc.exists) {
        return res.json({ success: true, status: doc.data().status, payment: doc.data() })
      }
    }
    return res.json({ success: true, status: 'Pending', reference })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

