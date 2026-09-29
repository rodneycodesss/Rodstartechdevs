import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'rodstar_ai_super_secret_jwt_key_2026_prod'

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized access. No token provided.' })
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token.' })
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || (req.user.role !== role && req.user.role !== 'Admin')) {
      return res.status(403).json({ success: false, message: 'Forbidden. Insufficient permissions.' })
    }
    next()
  }
}
