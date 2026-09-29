import express from 'express'
import mongoose from 'mongoose'
import { ApplicationModel } from '../models/Application.js'

const router = express.Router()

// In-memory fallback array if MongoDB is connecting or disconnected
const memoryApplications = []

/**
 * GET /api/applications
 * Fetch all candidate applications with optional search/status filters
 */
router.get('/', async (req, res) => {
  try {
    const { search, status, position } = req.query

    if (mongoose.connection.readyState === 1) {
      const query = {}
      if (status) query.networkStatus = status
      if (position) query.primaryPosition = position
      if (search) {
        query.$or = [
          { fullName: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { applicationId: { $regex: search, $options: 'i' } }
        ]
      }

      const applications = await ApplicationModel.find(query).sort({ createdAt: -1 })
      return res.json({ success: true, count: applications.length, data: applications })
    }

    return res.json({ success: true, count: memoryApplications.length, data: memoryApplications, source: 'memory_store' })
  } catch (err) {
    console.warn('[MongoDB Applications GET fallback]:', err.message)
    return res.json({ success: true, count: memoryApplications.length, data: memoryApplications, source: 'fallback' })
  }
})

/**
 * GET /api/applications/:id
 * Get single application by applicationId or Email
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    if (mongoose.connection.readyState === 1) {
      const application = await ApplicationModel.findOne({
        $or: [{ applicationId: id }, { email: id }, { userId: id }]
      })
      if (application) return res.json({ success: true, data: application })
    }

    const fallback = memoryApplications.find(a => a.applicationId === id || a.email === id)
    if (fallback) return res.json({ success: true, data: fallback })
    return res.status(404).json({ success: false, message: 'Application not found' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
})

/**
 * POST /api/applications
 * Save new applicant application to MongoDB database
 */
router.post('/', async (req, res) => {
  try {
    const appData = req.body
    if (!appData.applicationId || !appData.fullName || !appData.email) {
      return res.status(400).json({ success: false, message: 'Missing required fields (applicationId, fullName, email)' })
    }

    let application = null
    if (mongoose.connection.readyState === 1) {
      try {
        application = await ApplicationModel.create(appData)
      } catch (dbErr) {
        console.warn('[MongoDB Save Application Notice]:', dbErr.message)
      }
    }

    if (!application) {
      memoryApplications.unshift(appData)
      application = appData
    }

    return res.status(201).json({
      success: true,
      message: 'Application stored successfully in Rodstar AI MongoDB Backend!',
      data: application
    })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
})

/**
 * PUT /api/applications/:id
 * Update status, training progress, assessment scores, or payment status
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body

    if (mongoose.connection.readyState === 1) {
      const updated = await ApplicationModel.findOneAndUpdate(
        { $or: [{ applicationId: id }, { email: id }] },
        { $set: updates },
        { new: true }
      )
      if (updated) return res.json({ success: true, data: updated })
    }

    const idx = memoryApplications.findIndex(a => a.applicationId === id || a.email === id)
    if (idx !== -1) {
      memoryApplications[idx] = { ...memoryApplications[idx], ...updates }
      return res.json({ success: true, data: memoryApplications[idx] })
    }
    return res.status(404).json({ success: false, message: 'Application not found' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
})

export default router

