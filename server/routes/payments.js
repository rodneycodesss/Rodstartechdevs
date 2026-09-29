import express from 'express'
import { PaymentModel } from '../models/Payment.js'

const router = express.Router()

/**
 * GET /api/payments
 * Retrieve all payment transactions for Admin audit
 */
router.get('/', async (req, res) => {
  try {
    const payments = await PaymentModel.find({}).sort({ timestamp: -1 })
    return res.json({ success: true, count: payments.length, data: payments })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
})

/**
 * GET /api/payments/:ref
 * Retrieve single transaction status by reference
 */
router.get('/:ref', async (req, res) => {
  try {
    const { ref } = req.params
    const payment = await PaymentModel.findOne({
      $or: [{ transactionRef: ref }, { payheroCheckoutId: ref }, { applicationId: ref }]
    })

    if (!payment) {
      return res.status(404).json({ success: false, message: 'Transaction record not found' })
    }

    return res.json({ success: true, data: payment })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
})

export default router
