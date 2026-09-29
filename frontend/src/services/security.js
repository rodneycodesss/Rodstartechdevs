/**
 * Security utilities for input sanitization, file validation, RBAC and password checks.
 */

// XSS Sanitization
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Password strength check
export function validatePassword(password) {
  const minLength = 8
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  const isValid = password.length >= minLength && hasUpper && hasLower && hasNumber
  let strength = 'Weak'
  if (password.length >= 10 && hasUpper && hasLower && hasNumber && hasSpecial) {
    strength = 'Strong'
  } else if (isValid) {
    strength = 'Moderate'
  }

  return {
    isValid,
    strength,
    message: isValid
      ? 'Password meets security requirements.'
      : 'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.'
  }
}

// Simulated password hashing (SHA-256 placeholder simulation for client side)
export function hashPasswordSimulated(password) {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0
  }
  return 'sha256_' + Math.abs(hash).toString(16) + 'rstar_salt'
}

// File Upload Security Validator
export function validateFileUpload(file) {
  if (!file) return { isValid: false, message: 'No file provided.' }

  const maxSizeBytes = 5 * 1024 * 1024 // 5 MB
  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
  const allowedExtensions = ['.pdf', '.doc', '.docx']

  const fileName = file.name || ''
  const fileExt = fileName.substring(fileName.lastIndexOf('.')).toLowerCase()

  if (file.size > maxSizeBytes) {
    return { isValid: false, message: 'File size exceeds maximum limit of 5 MB.' }
  }

  if (!allowedExtensions.includes(fileExt) || (file.type && !allowedMimeTypes.includes(file.type))) {
    return { isValid: false, message: 'Invalid file format. Only PDF, DOC, and DOCX files are allowed.' }
  }

  // Safe filename generator
  const cleanExt = fileExt.replace(/[^a-z0-9.]/gi, '')
  const safeName = `cv_${Date.now()}_${Math.random().toString(36).substring(2, 9)}${cleanExt}`

  return {
    isValid: true,
    safeFileName: safeName,
    originalName: sanitizeInput(fileName),
    fileSizeFormatted: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
  }
}

// Role-based Access Control (RBAC) definitions
export const ROLES = {
  FREELANCER: 'Freelancer',
  TRAINER: 'Trainer',
  RECRUITER: 'Recruiter',
  PARTNER_MANAGER: 'Partner Manager',
  ADMINISTRATOR: 'Administrator',
  SUPER_ADMIN: 'Super Administrator'
}

export function hasPermission(userRole, requiredRole) {
  const hierarchy = {
    [ROLES.FREELANCER]: 1,
    [ROLES.TRAINER]: 2,
    [ROLES.RECRUITER]: 2,
    [ROLES.PARTNER_MANAGER]: 3,
    [ROLES.ADMINISTRATOR]: 4,
    [ROLES.SUPER_ADMIN]: 5
  }

  const userLevel = hierarchy[userRole] || 0
  const requiredLevel = hierarchy[requiredRole] || 99

  return userLevel >= requiredLevel
}
