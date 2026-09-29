import express from 'express'
import https from 'node:https'
import mongoose from 'mongoose'
import { PaymentModel } from '../models/Payment.js'
import { ApplicationModel } from '../models/Application.js'

const router = express.Router()

const PAYHERO_CONFIG = {
  accountId: process.env.VITE_PAYHERO_ACCOUNT_ID || '12463',
  basicAuth: process.env.VITE_PAYHERO_BASIC_AUTH || 'Basic ZmFralAwdmE4dktQQTMzaWc0c3U6YkVyTXpDSjlaUE9RbHhiMVBjSUZaVmRpeGVrQTZ4WVZuWmQ5cGVBVg==',
  apiHost: 'backend.payhero.co.ke',
  primaryPath: '/api/v2/payments/initiate-stk-push',
  fallbackPath: '/api/v2/payments'
}

/**
 * Helper to format Kenyan phone numbers to 254XXXXXXXXX format
 */
function formatKenyanPhone(phone) {
  if (!phone) return '254700000000'
  let cleaned = phone.toString().replace(/[^0-9]/g, '')
  if (cleaned.startsWith('254') && cleaned.length === 12) return cleaned
  if (cleaned.startsWith('0') && cleaned.length === 10) return '254' + cleaned.substring(1)
  if ((cleaned.startsWith('7') || cleaned.startsWith('1')) && cleaned.length === 9) return '254' + cleaned
  return cleaned
}

/**
 * Helper to make HTTPS requests to PayHero API
 */
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
    console.log('[PayHero Payload]:', payload)

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

/**
 * POST /api/payhero/stkpush
 * Initiates real PayHero M-Pesa STK Push directly from Node backend to user's phone!
 */
router.post('/stkpush', async (req, res) => {
  try {
    const { phoneNumber, amount = 1, applicationId, fullName, email } = req.body

    const formattedPhone = formatKenyanPhone(phoneNumber)
    const txRef = 'PAYHERO-RSTAR-' + Math.floor(100000 + Math.random() * 900000)
    const channelId = parseInt(PAYHERO_CONFIG.accountId, 10)

    const payheroPayload = {
      amount: Math.round(Number(amount) || 1),
      phone_number: formattedPhone,
      channel_id: channelId,
      provider: 'm-pesa',
      external_reference: applicationId || txRef,
      callback_url: process.env.PAYHERO_CALLBACK_URL || 'https://rodstartechdevs.co.ke/api/payhero/callback'
    }

    // First attempt: /api/v2/payments/initiate-stk-push
    let result = await sendPayheroHttpRequest(PAYHERO_CONFIG.primaryPath, payheroPayload)

    // Fallback attempt if 404 or failed path
    if (result.statusCode === 404) {
      console.warn('[PayHero Primary 404] Trying fallback path /api/v2/payments...')
      result = await sendPayheroHttpRequest(PAYHERO_CONFIG.fallbackPath, payheroPayload)
    }

    console.log(`[PayHero Final Result - Status ${result.statusCode}]:`, result.data)

    const isSuccess = result.statusCode >= 200 && result.statusCode < 300
    const checkoutId = result.data?.checkout_id || result.data?.reference || result.data?.CheckoutRequestID || txRef

    // Save or update payment record in MongoDB if database is active
    try {
      if (mongoose.connection.readyState === 1) {
        await PaymentModel.create({
          transactionRef: txRef,
          payheroCheckoutId: checkoutId,
          applicationId: applicationId || txRef,
          applicantName: fullName || 'Applicant',
          applicantEmail: email || 'applicant@rodstar.co.ke',
          phoneNumber: formattedPhone,
          amount: parseFloat(amount),
          currency: 'KSh',
          paymentProvider: 'PayHero M-Pesa STK Push',
          status: isSuccess ? 'Paid' : 'Pending',
          rawPayheroResponse: result.data
        })

        if (applicationId) {
          await ApplicationModel.findOneAndUpdate(
            { applicationId: applicationId },
            { paymentStatus: 'Paid', paymentRef: txRef, networkStatus: 'Training Active' }
          )
        }
      } else {
        console.log('[MongoDB Notice] DB offline; skipped DB write for payment:', txRef)
      }
    } catch (dbErr) {
      console.warn('[MongoDB Payment Record Notice]:', dbErr.message)
    }

    return res.status(200).json({
      success: true,
      status: isSuccess ? 'SUCCESS' : 'PENDING_PROMPT',
      transactionRef: txRef,
      checkoutId: checkoutId,
      message: isSuccess
        ? `PayHero M-Pesa STK Push prompt sent to ${formattedPhone}. Please check your phone screen and enter your M-Pesa PIN!`
        : `PayHero STK Push request accepted for ${formattedPhone}. Please enter your M-Pesa PIN on your phone when prompted.`,
      payheroResponse: result.data
    })

  } catch (error) {
    console.error('[STK Push Exception]:', error)
    return res.status(500).json({ success: false, message: error.message })
  }
})

/**
 * POST /api/payhero/callback
 * Real-time PayHero webhook callback listener
 */
router.post('/callback', async (req, res) => {
  console.log('[PayHero Webhook Received]:', req.body)
  try {
    const { response, reference, status, CheckoutRequestID } = req.body || {}
    const searchRef = reference || CheckoutRequestID
    if (searchRef) {
      await PaymentModel.findOneAndUpdate(
        { $or: [{ transactionRef: searchRef }, { payheroCheckoutId: searchRef }] },
        { status: (status === 'SUCCESS' || response?.Status === 'SUCCESS') ? 'Paid' : 'Failed', rawPayheroResponse: req.body }
      )
    }
  } catch (err) {
    console.warn('[Webhook DB error]:', err)
  }
  return res.status(200).json({ received: true })
})

export default router

