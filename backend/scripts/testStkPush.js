import dotenv from 'dotenv'
import https from 'node:https'
import { PAYHERO_CONFIG } from '../config/payhero.js'
import { PAYSTACK_CONFIG } from '../config/paystack.js'

dotenv.config()

const phoneInput = process.argv[2] || '0741112882'
const amountInput = parseFloat(process.argv[3] || '1')

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

    console.log(`[PayHero HTTP Dispatch] POST https://${PAYHERO_CONFIG.apiHost}${path}...`)

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
      resolve({ statusCode: 500, data: { error: err.message } })
    })

    apiReq.write(postData)
    apiReq.end()
  })
}

async function runStkPushTerminalTest() {
  const formattedPhone = formatKenyanPhone(phoneInput)
  const channelId = parseInt(PAYHERO_CONFIG.accountId, 10)
  const txRef = 'PAYHERO-CLI-' + Math.floor(100000 + Math.random() * 900000)

  console.log('==================================================')
  console.log('📱 PAYMENT GATEWAY STK PUSH TERMINAL TEST RUNNER')
  console.log('==================================================')
  console.log(`📞 Target Phone:    ${formattedPhone} (Raw input: ${phoneInput})`)
  console.log(`💰 Amount:          KSh ${amountInput}`)
  console.log(`🔗 Ref Code:        ${txRef}`)
  console.log('==================================================\n')

  // 1. TEST PAYHERO GATEWAY
  console.log('--- [1] TESTING PAYHERO GATEWAY (Channel ' + channelId + ') ---')
  const payheroPayload = {
    amount: amountInput,
    phone_number: formattedPhone,
    channel_id: channelId,
    provider: 'm-pesa',
    external_reference: txRef,
    callback_url: PAYHERO_CONFIG.callbackUrl
  }

  let phResult = await sendPayheroHttpRequest(PAYHERO_CONFIG.primaryPath, payheroPayload)

  if (phResult.statusCode === 404) {
    console.warn('⚠️  Primary path 404. Trying fallback path /api/v2/payments...')
    phResult = await sendPayheroHttpRequest(PAYHERO_CONFIG.fallbackPath, payheroPayload)
  }

  console.log(`📡 PAYHERO GATEWAY RESPONSE (HTTP Status: ${phResult.statusCode}):`)
  console.log(JSON.stringify(phResult.data, null, 2))

  const isPhSuccess = phResult.statusCode >= 200 && phResult.statusCode < 300 && phResult.data?.status !== false && !phResult.data?.error_code
  if (isPhSuccess) {
    console.log('✅ PayHero STK Push Sent Successfully!')
  } else {
    console.log(`❌ PayHero STK Push Status: ${phResult.data?.error_message || 'Rejected (Balance/Account Approval Required)'}`)
  }

  // 2. TEST PAYSTACK LIVE GATEWAY
  console.log('\n--- [2] TESTING PAYSTACK LIVE GATEWAY (M-Pesa / Mobile Money / Cards) ---')
  try {
    const psRef = 'PAYSTACK-CLI-' + Math.floor(100000 + Math.random() * 900000)
    const psRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + PAYSTACK_CONFIG.secretKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'candidate@rodstar.co.ke',
        amount: Math.round(amountInput * 100),
        currency: 'KES',
        reference: psRef,
        metadata: { phone: formattedPhone }
      })
    })

    const psData = await psRes.json()
    console.log(`📡 PAYSTACK GATEWAY RESPONSE (HTTP Status: ${psRes.status}):`)
    console.log(JSON.stringify(psData, null, 2))

    if (psRes.status >= 200 && psRes.status < 300 && psData.status === true) {
      console.log('✅ Paystack Session Initialized Successfully!')
      console.log(`🔗 Paystack M-Pesa Checkout URL: ${psData.data.authorization_url}`)
    } else {
      console.log(`❌ Paystack Initialization Error: ${psData.message}`)
    }
  } catch (err) {
    console.error('❌ Paystack Network Error:', err.message)
  }

  console.log('\n==================================================\n')
}

runStkPushTerminalTest()
