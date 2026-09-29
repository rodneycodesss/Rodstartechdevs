import mongoose from 'mongoose'
import { CourseModel } from '../models/Course.js'
import { ApplicationModel } from '../models/Application.js'
import { CertificateModel } from '../models/Certificate.js'

export async function getCourses(req, res) {
  try {
    if (mongoose.connection.readyState === 1) {
      const courses = await CourseModel.find({}).sort({ createdAt: -1 })
      return res.json({ success: true, count: courses.length, data: courses })
    }
    return res.json({ success: true, count: 0, data: [], source: 'fallback' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

export async function updateProgress(req, res) {
  try {
    const { applicationId, progressPercent } = req.body
    if (!applicationId) return res.status(400).json({ success: false, message: 'applicationId is required.' })

    const percent = Math.min(100, Math.max(0, Number(progressPercent) || 0))
    const updates = { trainingProgress: percent }
    if (percent >= 100) {
      updates.networkStatus = 'Assessment Pending'
    }

    if (mongoose.connection.readyState === 1) {
      await ApplicationModel.findOneAndUpdate({ applicationId }, { $set: updates })
    }

    return res.json({ success: true, message: `Training progress updated to ${percent}%.`, progressPercent: percent })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

export async function submitAssessment(req, res) {
  try {
    const { applicationId, scorePercentage } = req.body
    if (!applicationId || scorePercentage === undefined) {
      return res.status(400).json({ success: false, message: 'applicationId and scorePercentage are required.' })
    }

    const passed = scorePercentage >= 80
    const updates = {
      assessmentCompleted: true,
      assessmentScore: scorePercentage,
      networkStatus: passed ? 'Talent Network' : 'Assessment Pending'
    }

    let certRecord = null
    if (passed) {
      const certId = 'RSTAR-CERT-' + Math.floor(100000 + Math.random() * 900000)
      certRecord = {
        certificateId: certId,
        applicationId,
        freelancerName: 'Verified Freelancer Candidate',
        trackName: 'Rodstar AI Track',
        issueDate: new Date(),
        scorePercentage,
        verificationUrl: `https://rodstartechdevs.co.ke/#/verify/certificate/${certId}`
      }

      if (mongoose.connection.readyState === 1) {
        try {
          await CertificateModel.create(certRecord)
        } catch (cErr) {
          console.warn('[Certificate Create Warning]:', cErr.message)
        }
      }
    }

    if (mongoose.connection.readyState === 1) {
      await ApplicationModel.findOneAndUpdate({ applicationId }, { $set: updates })
    }

    return res.json({
      success: true,
      passed,
      scorePercentage,
      certificate: certRecord,
      message: passed
        ? 'Congratulations! You passed the 80% threshold and are now verified in the Rodstar Talent Network.'
        : 'Score below 80%. Review modules and re-attempt assessment.'
    })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}
