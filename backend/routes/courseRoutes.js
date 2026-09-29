import express from 'express'
import { getCourses, updateProgress, submitAssessment } from '../controllers/courseController.js'

const router = express.Router()

router.get('/', getCourses)
router.post('/progress', updateProgress)
router.post('/assessment', submitAssessment)

export default router
