import mongoose from 'mongoose'

const certificateSchema = new mongoose.Schema({
  certificateId: { type: String, required: true, unique: true },
  applicationId: { type: String, required: true },
  freelancerName: { type: String, required: true },
  trackName: { type: String, required: true },
  issueDate: { type: Date, default: Date.now },
  scorePercentage: { type: Number, default: 80 },
  verificationUrl: { type: String },
  issuer: { type: String, default: 'Rodstar AI Talent Network Council' }
})

export const CertificateModel = mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema)
