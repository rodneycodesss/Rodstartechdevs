import express from 'express'
import { createApplication, getApplications, getApplicationById, updateApplication } from '../controllers/applicationController.js'
import { uploadCV } from '../middleware/uploadMiddleware.js'

const router = express.Router()

router.get('/', getApplications)
router.get('/:id', getApplicationById)
router.post('/', createApplication)
router.put('/:id', updateApplication)

router.post('/upload-cv', uploadCV.single('cvFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No CV file uploaded or invalid file format.' })
  }
  return res.json({
    success: true,
    cvFileName: req.file.originalname,
    cvPath: `/uploads/${req.file.filename}`,
    cvSize: `${(req.file.size / (1024 * 1024)).toFixed(2)} MB`
  })
})

export default router
