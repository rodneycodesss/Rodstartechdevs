import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  trackCategory: { type: String, required: true },
  description: { type: String },
  duration: { type: String, default: '4 Weeks' },
  modules: [{
    moduleId: { type: String },
    title: { type: String },
    contentUrl: { type: String },
    duration: { type: String }
  }],
  assessmentQuestions: [{
    questionId: { type: String },
    questionText: { type: String },
    options: [{ type: String }],
    correctAnswerIndex: { type: Number }
  }],
  passPercentage: { type: Number, default: 80 },
  createdAt: { type: Date, default: Date.now }
})

export const CourseModel = mongoose.models.Course || mongoose.model('Course', courseSchema)
