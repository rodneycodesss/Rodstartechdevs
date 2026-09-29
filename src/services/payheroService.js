/**
 * PayHero Kenya Payment Gateway Integration Service
 * Dispatches server-to-server STK Push requests and verifies M-Pesa payments.
 */

import { logAuditEvent } from './auditLogger.js'

/**
 * Initiates PayHero M-Pesa STK Push / Card payment request
 */
export async function initiatePayHeroPayment({ amount = 1, phoneNumber, channel = 'mpesa', referenceId, description }) {
  const formattedPhone = formatKenyanPhone(phoneNumber)
  const txRef = 'PAYHERO-RSTAR-' + Math.floor(100000 + Math.random() * 900000)

  logAuditEvent('PAYHERO_INITIATED', 'CLIENT', 'Freelancer', {
    amount,
    phone: formattedPhone,
    reference: txRef
  })

  try {
    const response = await fetch('/api/payhero/stkpush', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: formattedPhone,
        amount: amount,
        applicationId: referenceId || txRef,
        fullName: description || 'Freelancer Candidate',
        email: 'candidate@rodstar.co.ke'
      })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return {
        success: true,
        status: data.status || 'STK_SENT',
        transactionRef: data.transactionRef || txRef,
        payheroCheckoutId: data.checkoutId || txRef,
        message: data.message || `M-Pesa STK Push prompt sent to ${formattedPhone}. Enter your M-Pesa PIN!`,
        data
      }
    } else {
      return {
        success: false,
        status: 'FAILED',
        message: data.message || data.error || `PayHero payment error: Could not send STK Push to ${formattedPhone}.`
      }
    }
  } catch (err) {
    console.error('[Payment Client Error]:', err)
    return {
      success: false,
      status: 'FAILED',
      message: 'Network error communicating with payment server. Please verify backend connection.'
    }
  }
}

/**
 * Verifies M-Pesa Transaction Receipt Code (e.g. QWE1234567)
 */
export async function verifyMpesaCode({ mpesaCode, applicationId }) {
  try {
    const response = await fetch('/api/payhero/verify-manual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mpesaCode, applicationId })
    })

    const data = await response.json()
    if (response.ok && data.success) {
      return {
        success: true,
        status: 'Paid',
        transactionRef: data.transactionRef,
        message: data.message || `M-Pesa transaction code ${data.transactionRef} verified successfully.`
      }
    } else {
      return {
        success: false,
        message: data.message || 'Invalid M-Pesa transaction code format.'
      }
    }
  } catch (err) {
    return {
      success: false,
      message: 'Network error verifying M-Pesa code.'
    }
  }
}

/**
 * Polls payment status from backend
 */
export async function pollPaymentStatus(referenceId) {
  try {
    const response = await fetch(`/api/payhero/status/${referenceId}`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (err) {
    console.warn('[Status Poll Error]:', err)
  }
  return { success: false, status: 'Pending' }
}

function formatKenyanPhone(phone) {
  if (!phone) return '0712345678'
  let cleaned = phone.toString().replace(/[^0-9]/g, '')
  if (cleaned.startsWith('254')) return cleaned
  if (cleaned.startsWith('0')) return '254' + cleaned.substring(1)
  if (cleaned.length === 9) return '254' + cleaned
  return cleaned
}
