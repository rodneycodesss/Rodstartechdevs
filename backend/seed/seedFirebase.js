import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { db } from '../config/firebase.js'

dotenv.config()

async function seedFirebase() {
  console.log('==================================================')
  console.log('🔥 Initializing Rodstar AI Firebase Firestore Seeder...')
  console.log('==================================================')

  const timestamp = new Date().toISOString()

  // 1. Seed Courses Collection
  const sampleCourses = [
    {
      courseId: 'CRS-AI-101',
      title: 'Enterprise AI Integration & RAG Architectures',
      trackCategory: 'AI & Machine Learning',
      description: 'Master Retrieval-Augmented Generation, vector embeddings, fine-tuning LLMs, and deploying microservices.',
      duration: '3 Weeks',
      passPercentage: 80,
      createdAt: timestamp,
      modules: [
        { moduleId: 'MOD-101', title: 'Module 1: Prompt Steering & System Directives', duration: '45 mins' },
        { moduleId: 'MOD-102', title: 'Module 2: RAG Pipeline Design with Vector Stores', duration: '60 mins' },
        { moduleId: 'MOD-103', title: 'Module 3: Autonomous AI Agent Tooling', duration: '90 mins' }
      ]
    },
    {
      courseId: 'CRS-DEV-201',
      title: 'Production Full-Stack Architecture & Microservices',
      trackCategory: 'Software Engineering',
      description: 'Learn modern Web APIs, authentication, responsive glassmorphism UI, and cloud deployment pipelines.',
      duration: '4 Weeks',
      passPercentage: 80,
      createdAt: timestamp,
      modules: [
        { moduleId: 'MOD-201', title: 'Module 1: RESTful & GraphQL Microservice Design', duration: '50 mins' },
        { moduleId: 'MOD-202', title: 'Module 2: MongoDB & Firebase Data Modeling', duration: '65 mins' },
        { moduleId: 'MOD-203', title: 'Module 3: CI/CD & Cloud Containerization', duration: '75 mins' }
      ]
    }
  ]

  // 2. Seed Opportunities Collection
  const sampleOpportunities = [
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
        'Strong Node.js Express & Firebase / MongoDB backend architecture skills',
        'Experience integrating LLM REST endpoints & vector databases'
      ],
      status: 'Open',
      applicantCount: 14,
      createdAt: timestamp
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
      applicantCount: 9,
      createdAt: timestamp
    }
  ]

  // 3. Seed Users Collection
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash('RodstarAdmin2026!', salt)

  const sampleUsers = [
    {
      userId: 'USR-ADMIN-001',
      fullName: 'Rodstar Network Administrator',
      email: 'admin@rodstar.co.ke',
      passwordHash,
      role: 'Admin',
      phone: '254700000000',
      isVerified: true,
      createdAt: timestamp
    }
  ]

  // 4. Seed Applications Collection
  const sampleApplications = [
    {
      applicationId: 'RSTAR-881923',
      userId: 'USR-ADMIN-001',
      fullName: 'Rodney Dev Candidate',
      email: 'rodney@rodstar.co.ke',
      phone: '254712345678',
      country: 'Kenya',
      city: 'Nairobi',
      timeZone: 'UTC+3',
      headline: 'Senior Full-Stack AI Engineer',
      experienceLevel: 'Senior Level (5+ yrs)',
      yearsOfExperience: '5+ Years',
      employmentStatus: 'Contract / Freelance',
      education: 'BSc Computer Science',
      certifications: 'AWS Certified Solutions Architect',
      linkedIn: 'https://linkedin.com/in/rodstar',
      gitHub: 'https://github.com/rodneycodesss',
      portfolioUrl: 'https://rodstartechdevs.co.ke',
      primaryPosition: 'Senior Full Stack AI Developer',
      additionalPositions: ['Generative AI Engineer', 'AI Agent Developer'],
      skills: ['React', 'Node.js', 'Python', 'Firebase', 'PayHero M-Pesa'],
      workPreferences: ['Remote Full-Time', 'Remote Contract'],
      hoursPerWeek: '40 hrs/week',
      availability: 'Immediate',
      cvFileName: 'rodstar_ai_cv_resume.pdf',
      cvSize: '1.45 MB',
      paymentStatus: 'Paid',
      paymentRef: 'PAYHERO-RSTAR-881923',
      paymentDate: timestamp,
      networkStatus: 'Talent Network',
      trainingProgress: 100,
      assessmentCompleted: true,
      assessmentScore: 95,
      createdAt: timestamp
    }
  ]

  if (db) {
    try {
      console.log('→ Seeding Firestore "courses" collection...')
      for (const course of sampleCourses) {
        await db.collection('courses').doc(course.courseId).set(course)
      }

      console.log('→ Seeding Firestore "opportunities" collection...')
      for (const opp of sampleOpportunities) {
        await db.collection('opportunities').doc(opp.opportunityId).set(opp)
      }

      console.log('→ Seeding Firestore "users" collection...')
      for (const usr of sampleUsers) {
        await db.collection('users').doc(usr.userId).set(usr)
      }

      console.log('→ Seeding Firestore "applications" collection...')
      for (const app of sampleApplications) {
        await db.collection('applications').doc(app.applicationId).set(app)
      }

      console.log('✅ Firebase Firestore database successfully populated!')
    } catch (err) {
      console.warn('[Firebase Seed Warning]:', err.message)
    }
  } else {
    console.log('[Memory Fallback Seed] Memory database initialized with sample records.')
  }

  process.exit(0)
}

seedFirebase()
