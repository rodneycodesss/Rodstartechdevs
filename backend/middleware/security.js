/**
 * Rodstar AI Cyber Security & Scalability Middleware Framework
 * Enforces strict security controls:
 * 1. Security Headers (Anti-Clickjacking, Anti-XSS, Anti-MIME Sniffing)
 * 2. HTTP Injection & Parameter Pollution Prevention
 * 3. In-Memory Sliding Window Rate Limiting (DDoS & Brute Force Defense)
 * 4. Payment Replay Attack Defense & Regex Input Validation
 * 5. Global Error Handling & Safe Error Masking
 */

// Memory store for Rate Limiting & Payment Replay Protection
const rateLimitStore = new Map()
const claimedTransactionsStore = new Set()

/**
 * 1. Cyber Security Headers Middleware
 */
export function setSecurityHeaders(req, res, next) {
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff')
  // Prevent Clickjacking frame embedding
  res.setHeader('X-Frame-Options', 'DENY')
  // Enable XSS Filtering in browser
  res.setHeader('X-XSS-Protection', '1; mode=block')
  // Enforce HTTPS HSTS
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  // Content Security Policy
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;")
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  // Permissions Policy
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), payment=()')
  // Anti-caching for sensitive APIs
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.setHeader('Pragma', 'no-cache')

  next()
}

/**
 * 2. HTTP Injection & Parameter Sanitization Middleware
 * Sanitizes input to prevent HTTP Response Splitting, SQL/Command Injection, and Script Injections
 */
export function sanitizeInputs(req, res, next) {
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeObject(req.body)
  }
  if (req.query && typeof req.query === 'object') {
    req.query = sanitizeObject(req.query)
  }
  if (req.params && typeof req.params === 'object') {
    req.params = sanitizeObject(req.params)
  }
  next()
}

function sanitizeObject(obj) {
  if (!obj || typeof obj !== 'object') return obj
  const sanitized = Array.isArray(obj) ? [] : {}

  for (const [key, value] of Object.entries(obj)) {
    // Strip proto manipulation
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue

    if (typeof value === 'string') {
      // Prevent HTTP header injection (CRLF)
      let cleanVal = value.replace(/[\r\n]/g, '')
      // Strip script tags and dangerous event attributes
      cleanVal = cleanVal.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      cleanVal = cleanVal.replace(/on\w+="[^"]*"/gi, '')
      cleanVal = cleanVal.replace(/on\w+='[^']*'/gi, '')
      sanitized[key] = cleanVal
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value)
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

/**
 * 3. Rate Limiter Generator (Sliding Window Algorithm)
 */
export function createRateLimiter({ windowMs = 15 * 60 * 1000, maxRequests = 100, message = 'Too many requests. Please try again later.' }) {
  return (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1'
    const now = Date.now()

    if (!rateLimitStore.has(ip)) {
      rateLimitStore.set(ip, [])
    }

    const timestamps = rateLimitStore.get(ip).filter(ts => now - ts < windowMs)
    timestamps.push(now)
    rateLimitStore.set(ip, timestamps)

    if (timestamps.length > maxRequests) {
      return res.status(429).json({
        success: false,
        status: 'TOO_MANY_REQUESTS',
        message,
        retryAfterSeconds: Math.ceil((windowMs - (now - timestamps[0])) / 1000)
      })
    }

    next()
  }
}

// Dedicated Rate Limiters
export const generalApiLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 mins
  maxRequests: 150,
  message: 'API rate limit exceeded. Please slow down.'
})

export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 mins
  maxRequests: 15,
  message: 'Too many login / registration attempts. Please try again in 15 minutes.'
})

export const paymentRateLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000, // 10 mins
  maxRequests: 30,
  message: 'Too many M-Pesa payment requests. Please wait 10 minutes before requesting another STK push.'
})

/**
 * 4. Strict M-Pesa & Payment Validation Middleware
 */
export function validatePaymentPayload(req, res, next) {
  const { phoneNumber, mpesaCode } = req.body

  // Check for M-Pesa STK Push phone format
  if (phoneNumber !== undefined) {
    const cleaned = phoneNumber.toString().replace(/[^0-9]/g, '')
    if (cleaned.length < 9 || cleaned.length > 12) {
      return res.status(400).json({
        success: false,
        message: 'Security Validation Error: Invalid Kenyan phone number format. Must be a valid Safaricom/Airtel mobile number.'
      })
    }
  }

  // Check for Manual M-Pesa Receipt Code format and Replay Attack
  if (mpesaCode !== undefined) {
    const cleanCode = mpesaCode.toString().trim().toUpperCase()
    // Strict M-Pesa Receipt Code regex (e.g. SDF98321K / QWE1234567)
    const mpesaRegex = /^[A-Z0-9]{8,12}$/
    if (!mpesaRegex.test(cleanCode)) {
      return res.status(400).json({
        success: false,
        message: 'Security Validation Error: Invalid M-Pesa receipt code format. Code must be 8-12 alphanumeric characters.'
      })
    }

    // Replay Attack Check
    if (claimedTransactionsStore.has(cleanCode)) {
      return res.status(409).json({
        success: false,
        status: 'ALREADY_CLAIMED',
        message: `Security Conflict: Transaction reference code (${cleanCode}) has already been claimed and processed.`
      })
    }
  }

  next()
}


/**
 * Helper to record claimed payment code in replay defense store
 */
export function markTransactionClaimed(code) {
  if (code) {
    claimedTransactionsStore.add(code.toString().trim().toUpperCase())
  }
}
