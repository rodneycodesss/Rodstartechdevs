import mongoose from 'mongoose'

const opportunitySchema = new mongoose.Schema({
  opportunityId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  requiredSkills: [{ type: String }],
  experienceLevel: { type: String, default: 'Intermediate' },
  projectType: { type: String, default: 'Remote Contract' },
  locationEligibility: { type: String, default: 'Remote' },
  timeCommitment: { type: String },
  compensationInfo: { type: String },
  deadline: { type: String },
  partnerName: { type: String, default: 'Confidential Rodstar AI Partner' },
  isConfidential: { type: Boolean, default: true },
  description: { type: String, required: true },
  requirements: [{ type: String }],
  status: { type: String, enum: ['Open', 'Closing Soon', 'Closed'], default: 'Open' },
  applicantCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

export const OpportunityModel = mongoose.models.Opportunity || mongoose.model('Opportunity', opportunitySchema)
