import multer from 'multer'
import path from 'path'
import fs from 'fs'

const uploadDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    cb(null, `cv-${uniqueSuffix}${ext}`)
  }
})

const fileFilter = (req, file, cb) => {
  const allowedExts = ['.pdf', '.doc', '.docx']
  const ext = path.extname(file.originalname).toLowerCase()
  if (allowedExts.includes(ext)) {
    cb(null, true)
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files under 5MB are accepted.'), false)
  }
}

export const uploadCV = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter
})
