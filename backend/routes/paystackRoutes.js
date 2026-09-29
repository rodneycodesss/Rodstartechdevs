import express from 'express'
import { initializeTransaction, verifyTransaction, handleWebhook } from '../controllers/paystackController.js'
import { paymentRateLimiter } from '../middleware/security.js'

const router = express.Router()

router.post('/initialize', paymentRateLimiter, initializeTransaction)
router.get('/verify/:reference', verifyTransaction)
router.post('/webhook', handleWebhook)

export default router
