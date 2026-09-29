import express from 'express'
import { register, login, getMe } from '../controllers/authController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { authRateLimiter } from '../middleware/security.js'

const router = express.Router()

router.post('/register', authRateLimiter, register)
router.post('/login', authRateLimiter, login)
router.get('/me', verifyToken, getMe)

export default router

