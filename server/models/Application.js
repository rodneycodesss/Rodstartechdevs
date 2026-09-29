import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
  applicationId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, default: 'Kenya' },
  city: { type: String },
  timeZone: { type: String, default: 'UTC+3' },
  headline: { type: String },
  experienceLevel: { type: String, default: 'Intermediate' },
  yearsOfExperience: { type: String },
  employmentStatus: { type: String },
  education: { type: String },
  certifications: { type: String },
  linkedIn: { type: String },
  gitHub: { type: String },
  portfolioUrl: { type: String },
  primaryPosition: { type: String, required: true },
  additionalPositions: [{ type: String }],
  skills: [{ type: String }],
  workPreferences: [{ type: String }],
  hoursPerWeek: { type: String },
  availability: { type: String },
  cvFileName: { type: String },
  cvSize: { type: String },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed'], default: 'Pending' },
  paymentRef: { type: String },
  paymentDate: { type: Date },
  networkStatus: { 
    type: String, 
    enum: ['Submitted', 'Under Review', 'Training Required', 'Training Active', 'Assessment Pending', 'Verification Pending', 'Talent Network', 'Inactive'], 
    default: 'Training Required' 
  },
  trainingProgress: { type: Number, default: 0 },
  assessmentCompleted: { type: Boolean, default: false },
  assessmentScore: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

export const ApplicationModel = mongoose.models.Application || mongoose.model('Application', applicationSchema)
