import mongoose from 'mongoose'

const auditLogSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  eventType: { type: String, required: true },
  userId: { type: String },
  role: { type: String },
  details: { type: Object },
  timestamp: { type: Date, default: Date.now }
})

export const AuditLogModel = mongoose.models.AuditLog || mongoose.model('AuditLog', auditLogSchema)
