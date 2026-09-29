import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Candidate', 'Admin', 'Partner'], default: 'Candidate' },
  country: { type: String, default: 'Kenya' },
  phone: { type: String },
  applicationId: { type: String },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema)
