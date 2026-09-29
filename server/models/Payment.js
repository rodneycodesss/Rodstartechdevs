import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  transactionRef: { type: String, required: true, unique: true },
  payheroCheckoutId: { type: String },
  applicationId: { type: String, required: true },
  applicantName: { type: String },
  applicantEmail: { type: String },
  phoneNumber: { type: String },
  amount: { type: Number, required: true, default: 1 },
  currency: { type: String, default: 'KSh' },
  paymentProvider: { type: String, default: 'PayHero M-Pesa STK Push' },
  payheroAccountId: { type: String, default: '12463' },
  status: { type: String, enum: ['Pending', 'Paid', 'Failed', 'Cancelled'], default: 'Paid' },
  verifiedServerSide: { type: Boolean, default: true },
  rawPayheroResponse: { type: Object },
  timestamp: { type: Date, default: Date.now }
})

export const PaymentModel = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)
