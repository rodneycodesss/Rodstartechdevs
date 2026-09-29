import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from './config/db.js'

import authRoutes from './routes/authRoutes.js'
import applicationRoutes from './routes/applicationRoutes.js'
import payheroRoutes from './routes/payheroRoutes.js'
import paystackRoutes from './routes/paystackRoutes.js'
import opportunityRoutes from './routes/opportunityRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import certificateRoutes from './routes/certificateRoutes.js'
import statsRoutes from './routes/statsRoutes.js'

import { setSecurityHeaders, sanitizeInputs, generalApiLimiter } from './middleware/security.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 1. Cyber Security Headers & Anti-Sniffing
app.use(setSecurityHeaders)

// 2. CORS setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// 3. Payload size limiting & HTTP injection protection
app.use(express.json({ limit: '100kb' }))
app.use(express.urlencoded({ extended: true, limit: '100kb' }))
app.use(sanitizeInputs)
app.use(generalApiLimiter)


// Static uploads folder for CVs
const uploadDir = path.join(process.cwd(), 'uploads')
app.use('/uploads', express.static(uploadDir))

// Connect MongoDB database
connectDB()

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/applications', applicationRoutes)
app.use('/api/payhero', payheroRoutes)
app.use('/api/paystack', paystackRoutes)
app.use('/api/opportunities', opportunityRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/certificates', certificateRoutes)
app.use('/api/stats', statsRoutes)


// System Health Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'Rodstar AI Freelancer Network Backend Service',
    database: 'Firebase Authentication & Firestore Database',
    payheroAccount: process.env.VITE_PAYHERO_ACCOUNT_ID || '12463',
    endpoints: [
      '/api/auth',
      '/api/applications',
      '/api/payhero/stkpush',
      '/api/opportunities',
      '/api/courses',
      '/api/certificates',
      '/api/stats'
    ],
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`\n==================================================`)
  console.log(`🚀 Rodstar AI Backend Server Online!`)
  console.log(`🌐 Server URL: http://localhost:${PORT}`)
  console.log(`💳 PayHero Channel: ${process.env.VITE_PAYHERO_ACCOUNT_ID || '12463'}`)
  console.log(`📁 Applications API: http://localhost:${PORT}/api/applications`)
  console.log(`💼 Opportunities API: http://localhost:${PORT}/api/opportunities`)
  console.log(`==================================================\n`)
})
