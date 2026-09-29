import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import payheroRouter from './routes/payhero.js'
import applicationsRouter from './routes/applications.js'
import opportunitiesRouter from './routes/opportunities.js'
import paymentsRouter from './routes/payments.js'
import statsRouter from './routes/stats.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Enable CORS for Vite frontend
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect to MongoDB
connectDB()

// Register API routes
app.use('/api/payhero', payheroRouter)
app.use('/api/applications', applicationsRouter)
app.use('/api/opportunities', opportunitiesRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/stats', statsRouter)

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'Rodstar AI Backend Service',
    database: 'MongoDB Mongoose Connected',
    payheroChannel: process.env.VITE_PAYHERO_ACCOUNT_ID || '12463',
    endpoints: [
      '/api/payhero/stkpush',
      '/api/applications',
      '/api/opportunities',
      '/api/payments',
      '/api/stats'
    ],
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`\n==================================================`)
  console.log(`🚀 Rodstar AI Express & MongoDB Server Online!`)
  console.log(`🌐 Server URL: http://localhost:${PORT}`)
  console.log(`💳 PayHero STK Endpoint: http://localhost:${PORT}/api/payhero/stkpush`)
  console.log(`📁 MongoDB Applications API: http://localhost:${PORT}/api/applications`)
  console.log(`💼 MongoDB Opportunities API: http://localhost:${PORT}/api/opportunities`)
  console.log(`==================================================\n`)
})

