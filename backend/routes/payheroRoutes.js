import express from 'express'
import { initiateStkPush, handleWebhook, getPayments, checkPaymentStatus, verifyManualMpesa } from '../controllers/paymentController.js'
import { paymentRateLimiter, validatePaymentPayload } from '../middleware/security.js'

const router = express.Router()

router.post('/stkpush', paymentRateLimiter, validatePaymentPayload, initiateStkPush)
router.post('/verify-manual', paymentRateLimiter, validatePaymentPayload, verifyManualMpesa)
router.post('/callback', handleWebhook)
router.get('/history', getPayments)
router.get('/status/:reference', checkPaymentStatus)

export default router


