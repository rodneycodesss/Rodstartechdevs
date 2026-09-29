import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { connectDB } from '../config/db.js'
import { UserModel } from '../models/User.js'
import { CourseModel } from '../models/Course.js'
import { OpportunityModel } from '../models/Opportunity.js'
import { ApplicationModel } from '../models/Application.js'

dotenv.config()

async function seed() {
  console.log('[Seed] Initializing MongoDB database seed script...')
  const connected = await connectDB()

  if (!connected) {
    console.log('[Seed Warning] MongoDB server offline. Skipping DB seed.')
    process.exit(0)
  }

  // 1. Seed Admin Account
  const adminEmail = 'admin@rodstar.co.ke'
  const existingAdmin = await UserModel.findOne({ email: adminEmail })
  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash('RodstarAdmin2026!', salt)
    await UserModel.create({
      userId: 'USR-ADMIN-001',
      fullName: 'Rodstar Network Administrator',
      email: adminEmail,
      passwordHash,
      role: 'Admin',
      phone: '254700000000',
      isVerified: true
    })
    console.log('✓ Seeded Admin User: admin@rodstar.co.ke (Pass: RodstarAdmin2026!)')
  }

  // 2. Seed Sample Opportunities
  const countOpps = await OpportunityModel.countDocuments()
  if (countOpps === 0) {
    await OpportunityModel.insertMany([
      {
        opportunityId: 'OPP-8091',
        title: 'Senior Full Stack AI Developer (Remote)',
        category: 'Software Engineering',
        requiredSkills: ['React', 'Node.js', 'Python', 'OpenAI API', 'MongoDB'],
        experienceLevel: 'Senior Level (5+ yrs)',
        projectType: 'Direct Remote Partner Contract',
        locationEligibility: 'Remote (Worldwide / East Africa)',
        timeCommitment: 'Full Time (40 hrs/week)',
        compensationInfo: '$3,500 - $5,500 / month',
        deadline: '2026-10-15',
        partnerName: 'Confidential Rodstar AI Partner',
        isConfidential: true,
        description: 'Lead client full-stack application development integrated with generative AI microservices and cloud databases.',
        requirements: [
          'Proven expertise in React dynamic routing and state management',
          'Strong Node.js Express & MongoDB backend architecture skills',
          'Experience integrating LLM REST endpoints & vector databases'
        ],
        status: 'Open',
        applicantCount: 14
      },
      {
        opportunityId: 'OPP-8092',
        title: 'LLM Fine-Tuning & Data Annotation Lead',
        category: 'Artificial Intelligence & Machine Learning',
        requiredSkills: ['Python', 'PyTorch', 'Hugging Face', 'RLHF', 'Data Curation'],
        experienceLevel: 'Intermediate to Senior',
        projectType: 'Milestone Contract',
        locationEligibility: 'Remote (Kenya / Global)',
        timeCommitment: 'Part Time (20 hrs/week)',
        compensationInfo: '$30 - $45 / hour',
        deadline: '2026-10-20',
        partnerName: 'Confidential Rodstar AI Partner',
        isConfidential: true,
        description: 'Manage RLHF annotation pipelines, evaluate model benchmarking datasets, and fine-tune domain-specific Llama 3 models.',
        requirements: [
          'Demonstrated experience with Python data pipelines',
          'Familiarity with RLHF and prompt engineering best practices'
        ],
        status: 'Open',
        applicantCount: 9
      }
    ])
    console.log('✓ Seeded sample partner job opportunities')
  }

  // 3. Seed Sample LMS Courses
  const countCourses = await CourseModel.countDocuments()
  if (countCourses === 0) {
    await CourseModel.insertMany([
      {
        courseId: 'CRS-AI-101',
        title: 'Enterprise AI & LLM Systems Integration',
        trackCategory: 'AI & Machine Learning',
        description: 'Master RAG architectures, prompt engineering, vector database indexing, and API deployment.',
        duration: '3 Weeks',
        modules: [
          { moduleId: 'MOD-1', title: 'Module 1: Prompt Steering & System Directives', duration: '45 mins' },
          { moduleId: 'MOD-2', title: 'Module 2: RAG Pipeline Design with Vector Stores', duration: '60 mins' },
          { moduleId: 'MOD-3', title: 'Module 3: Autonomous AI Agent Tooling', duration: '90 mins' }
        ],
        passPercentage: 80
      }
    ])
    console.log('✓ Seeded LMS training courses')
  }

  console.log('[Seed] Database seeding complete!')
  process.exit(0)
}

seed()
