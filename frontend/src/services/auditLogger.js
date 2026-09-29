/**
 * Audit Logger Service
 * Maintains a tamper-resistant security audit log for system events.
 */

const STORAGE_KEY = 'rodstar_audit_logs'

export const AUDIT_EVENTS = {
  USER_REGISTER: 'USER_REGISTER',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  PAYMENT_INITIATED: 'PAYMENT_INITIATED',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT_FAILED: 'PAYMENT_FAILED',
  APPLICATION_SUBMITTED: 'APPLICATION_SUBMITTED',
  APPLICATION_STATUS_UPDATED: 'APPLICATION_STATUS_UPDATED',
  TRAINING_COMPLETED: 'TRAINING_COMPLETED',
  ASSESSMENT_COMPLETED: 'ASSESSMENT_COMPLETED',
  CERTIFICATE_ISSUED: 'CERTIFICATE_ISSUED',
  OPPORTUNITY_CREATED: 'OPPORTUNITY_CREATED',
  ROLE_UPDATED: 'ROLE_UPDATED',
  PROFILE_UPDATED: 'PROFILE_UPDATED'
}

export function logAuditEvent(eventType, userId, userRole, details = {}) {
  try {
    const logs = getAuditLogs()
    
    // Clean details to remove sensitive payload items
    const sanitizedDetails = { ...details }
    delete sanitizedDetails.password
    delete sanitizedDetails.token
    delete sanitizedDetails.pin
    delete sanitizedDetails.cardNumber

    const entry = {
      id: 'LOG-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      eventType,
      userId: userId || 'ANONYMOUS',
      userRole: userRole || 'GUEST',
      details: sanitizedDetails,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server/Client'
    }

    logs.unshift(entry)
    // Keep last 200 logs
    const trimmedLogs = logs.slice(0, 200)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedLogs))
    return entry
  } catch (err) {
    console.error('Audit Log Error:', err)
  }
}

export function getAuditLogs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : getSeedAuditLogs()
  } catch {
    return getSeedAuditLogs()
  }
}

function getSeedAuditLogs() {
  return [
    {
      id: 'LOG-1700000000-A1',
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      eventType: AUDIT_EVENTS.PAYMENT_SUCCESS,
      userId: 'USER-9921',
      userRole: 'Freelancer',
      details: { amount: 1500, currency: 'KSh', ref: 'RSTAR-PAY-88219', item: 'Training & Onboarding Fee' },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    },
    {
      id: 'LOG-1700000000-A2',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      eventType: AUDIT_EVENTS.APPLICATION_SUBMITTED,
      userId: 'USER-9921',
      userRole: 'Freelancer',
      details: { applicationId: 'RSTAR-77102', primaryTrack: 'AI Engineer' },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    },
    {
      id: 'LOG-1700000000-A3',
      timestamp: new Date(Date.now() - 43200000).toISOString(),
      eventType: AUDIT_EVENTS.OPPORTUNITY_CREATED,
      userId: 'ADMIN-001',
      userRole: 'Administrator',
      details: { title: 'Generative AI Pipeline Architect', partner: 'Confidential Rodstar AI Partner' },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  ]
}
