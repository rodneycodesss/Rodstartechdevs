/**
 * Paystack Payment Gateway Integration Service
 * Dispatches server-to-server transaction initialization and verification
 * supporting M-Pesa, Mobile Money, and Debit/Credit Cards in KES.
 */

import { logAuditEvent } from './auditLogger.js'

/**
 * Initializes Paystack Checkout Session
 */
export async function initializePaystackCheckout({ amount = 1500, email, phoneNumber, fullName, referenceId }) {
  logAuditEvent('PAYSTACK_INITIATED', 'CLIENT', 'Freelancer', {
    amount,
    email,
    referenceId
  })

  try {
    const response = await fetch('/api/paystack/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email || 'candidate@rodstar.co.ke',
        amount: amount,
        phoneNumber: phoneNumber || '',
        fullName: fullName || 'Candidate',
        applicationId: referenceId,
        callbackUrl: `${window.location.origin}/#/ai/freelancers/apply`
      })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return {
        success: true,
        status: 'INITIALIZED',
        transactionRef: data.transactionRef,
        accessCode: data.accessCode,
        authorizationUrl: data.authorizationUrl,
        message: data.message
      }
    } else {
      return {
        success: false,
        status: 'FAILED',
        message: data.message || 'Failed to initialize Paystack checkout session.'
      }
    }
  } catch (err) {
    console.error('[Paystack Client Error]:', err)
    return {
      success: false,
      status: 'FAILED',
      message: 'Network error connecting to payment gateway. Please check connection.'
    }
  }
}

/**
 * Verifies Paystack Payment Transaction Reference
 */
export async function verifyPaystackPayment(reference) {
  if (!reference) return { success: false, message: 'Transaction reference is missing.' }

  try {
    const response = await fetch(`/api/paystack/verify/${encodeURIComponent(reference)}`)
    const data = await response.json()

    if (response.ok && data.success && data.status === 'Paid') {
      return {
        success: true,
        status: 'Paid',
        transactionRef: data.transactionRef,
        amount: data.amount,
        currency: data.currency,
        message: data.message
      }
    } else {
      return {
        success: false,
        status: 'PENDING',
        message: data.message || 'Payment verification pending or incomplete.'
      }
    }
  } catch (err) {
    console.error('[Paystack Verify Client Error]:', err)
    return {
      success: false,
      message: 'Network error verifying payment status.'
    }
  }
}
