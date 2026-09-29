import https from 'node:https'
import crypto from 'node:crypto'
import { PAYSTACK_CONFIG } from '../config/paystack.js'
import { db } from '../config/firebase.js'
import { markTransactionClaimed } from '../middleware/security.js'

function sendPaystackRequest(path, method = 'GET', payload = null) {
  return new Promise((resolve) => {
    const postData = payload ? JSON.stringify(payload) : null
    const options = {
      hostname: PAYSTACK_CONFIG.apiHost,
      port: 443,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PAYSTACK_CONFIG.secretKey}`
      }
    }

    if (postData) {
      options.headers['Content-Length'] = Buffer.byteLength(postData)
    }

    console.log(`[Paystack Dispatch] Sending ${method} https://${PAYSTACK_CONFIG.apiHost}${path}...`)

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
      console.error('[Paystack HTTP Error]:', err.message)
      resolve({ statusCode: 500, data: { status: false, message: err.message } })
    })

    if (postData) {
      apiReq.write(postData)
    }
    apiReq.end()
  })
}

/**
 * Initialize Paystack Checkout (M-Pesa / Mobile Money / Cards)
 */
export async function initializeTransaction(req, res) {
  try {
    const { email, amount = 1500, phoneNumber, fullName, applicationId, callbackUrl } = req.body

    const txRef = 'PAYSTACK-RSTAR-' + Math.floor(100000 + Math.random() * 900000)
    const amountInKesCents = Math.round((Number(amount) || 1500) * 100) // KSh 1,500 = 150,000 cents

    const payload = {
      email: email || 'candidate@rodstartechdevs.co.ke',
      amount: amountInKesCents,
      currency: PAYSTACK_CONFIG.currency,
      reference: txRef,
      callback_url: callbackUrl || 'https://rodstartechdevs.co.ke/#/ai/freelancers/apply',
      metadata: {
        applicationId: applicationId || txRef,
        fullName: fullName || 'Candidate',
        phone: phoneNumber || ''
      }
    }

    const result = await sendPaystackRequest('/transaction/initialize', 'POST', payload)

    if (result.statusCode >= 200 && result.statusCode < 300 && result.data?.status === true) {
      const paymentRecord = {
        transactionRef: txRef,
        applicationId: applicationId || txRef,
        applicantName: fullName || 'Applicant',
        applicantEmail: email || 'candidate@rodstartechdevs.co.ke',
        amount: parseFloat(amount),
        currency: PAYSTACK_CONFIG.currency,
        paymentProvider: 'Paystack Gateway (M-Pesa / Card)',
        status: 'Pending',
        paystackAccessCode: result.data.data.access_code,
        paystackAuthUrl: result.data.data.authorization_url,
        timestamp: new Date().toISOString()
      }

      if (db) {
        try {
          await db.collection('payments').doc(txRef).set(paymentRecord)
        } catch (fbErr) {
          console.warn('[Firebase Payment Write Notice]:', fbErr.message)
        }
      }

      return res.status(200).json({
        success: true,
        status: 'INITIALIZED',
        transactionRef: txRef,
        accessCode: result.data.data.access_code,
        authorizationUrl: result.data.data.authorization_url,
        message: 'Paystack checkout initialized successfully.'
      })
    } else {
      const errMsg = result.data?.message || 'Failed to initialize Paystack checkout session.'
      return res.status(400).json({
        success: false,
        status: 'FAILED',
        message: `Paystack Error: ${errMsg}`,
        paystackResponse: result.data
      })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

/**
 * Verify Paystack Transaction Status Server-Side
 */
export async function verifyTransaction(req, res) {
  try {
    const { reference } = req.params
    if (!reference) {
      return res.status(400).json({ success: false, message: 'Transaction reference is required.' })
    }

    const cleanRef = reference.trim()
    const result = await sendPaystackRequest(`/transaction/verify/${encodeURIComponent(cleanRef)}`, 'GET')

    if (result.statusCode >= 200 && result.statusCode < 300 && result.data?.status === true && result.data?.data?.status === 'success') {
      const payData = result.data.data
      const appId = payData.metadata?.applicationId || cleanRef
      const timestamp = new Date().toISOString()

      // Replay defense mark
      markTransactionClaimed(cleanRef)

      const paymentRecord = {
        transactionRef: cleanRef,
        applicationId: appId,
        applicantName: payData.metadata?.fullName || 'Applicant',
        applicantEmail: payData.customer?.email || 'candidate@rodstar.co.ke',
        amount: payData.amount / 100,
        currency: payData.currency,
        paymentProvider: `Paystack (${payData.channel || 'm-pesa/card'})`,
        status: 'Paid',
        paidAt: payData.paid_at || timestamp,
        timestamp: timestamp,
        verifiedServerSide: true,
        rawPaystackResponse: payData
      }

      if (db) {
        try {
          await db.collection('payments').doc(cleanRef).set(paymentRecord, { merge: true })
          if (appId) {
            await db.collection('applications').doc(appId).set({
              paymentStatus: 'Paid',
              paymentRef: cleanRef,
              networkStatus: 'Training Active'
            }, { merge: true })
          }
        } catch (fbErr) {
          console.warn('[Firebase Paystack Verify Notice]:', fbErr.message)
        }
      }

      return res.status(200).json({
        success: true,
        status: 'Paid',
        transactionRef: cleanRef,
        amount: payData.amount / 100,
        currency: payData.currency,
        message: `Paystack payment (${cleanRef}) successfully verified!`
      })
    } else {
      const errMsg = result.data?.message || 'Transaction verification pending or failed.'
      return res.status(400).json({
        success: false,
        status: 'PENDING',
        message: `Paystack Verification Result: ${errMsg}`
      })
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message })
  }
}

/**
 * Handle Paystack Webhooks
 */
export async function handleWebhook(req, res) {
  try {
    const hash = crypto.createHmac('sha512', PAYSTACK_CONFIG.secretKey).update(JSON.stringify(req.body)).digest('hex')
    if (hash !== req.headers['x-paystack-signature']) {
      return res.status(401).send('Invalid signature')
    }

    const event = req.body
    if (event.event === 'charge.success') {
      const payData = event.data
      const cleanRef = payData.reference
      const appId = payData.metadata?.applicationId || cleanRef

      markTransactionClaimed(cleanRef)

      if (db) {
        await db.collection('payments').doc(cleanRef).set({
          status: 'Paid',
          verifiedWebhook: true,
          rawPaystackResponse: payData
        }, { merge: true })

        if (appId) {
          await db.collection('applications').doc(appId).set({
            paymentStatus: 'Paid',
            paymentRef: cleanRef,
            networkStatus: 'Training Active'
          }, { merge: true })
        }
      }
    }
  } catch (err) {
    console.warn('[Paystack Webhook Notice]:', err.message)
  }
  return res.status(200).send('OK')
}
