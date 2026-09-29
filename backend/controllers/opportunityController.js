import mongoose from 'mongoose'
import { OpportunityModel } from '../models/Opportunity.js'

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
  },
  {
    opportunityId: 'OPP-8093',
    title: 'UI/UX Glassmorphism & Web App Designer',
    category: 'Design & Creative',
    requiredSkills: ['Figma', 'UI/UX Design', 'Design Systems', 'CSS3 Animations'],
    experienceLevel: 'Intermediate Level (2-4 yrs)',
    projectType: 'Remote Contract',
    locationEligibility: 'Remote',
    timeCommitment: 'Flexible / Project Based',
    compensationInfo: '$2,000 - $3,200 / project',
    deadline: '2026-10-30',
    partnerName: 'Confidential Rodstar AI Partner',
    isConfidential: true,
    description: 'Design world-class web applications, landing pages, and interactive dashboards with futuristic aesthetic components.',
    requirements: [
      'Interactive Figma design portfolio link mandatory',
      'Deep understanding of micro-interactions and dark mode themes'
    ],
    status: 'Open',
    applicantCount: 7
  }
]

export async function getOpportunities(req, res) {
  try {
    if (mongoose.connection.readyState === 1) {
      let opportunities = await OpportunityModel.find({}).sort({ createdAt: -1 })
      if (!opportunities || opportunities.length === 0) {
        await OpportunityModel.insertMany(sampleOpportunities)
        opportunities = await OpportunityModel.find({}).sort({ createdAt: -1 })
      }
      return res.json({ success: true, count: opportunities.length, data: opportunities })
    }
    return res.json({ success: true, count: sampleOpportunities.length, data: sampleOpportunities, source: 'sample' })
  } catch (err) {
    return res.json({ success: true, count: sampleOpportunities.length, data: sampleOpportunities, source: 'fallback' })
  }
}

export async function createOpportunity(req, res) {
  try {
    const oppData = req.body
    if (!oppData.title || !oppData.category) {
      return res.status(400).json({ success: false, message: 'Title and category are required.' })
    }

    if (!oppData.opportunityId) {
      oppData.opportunityId = 'OPP-' + Math.floor(1000 + Math.random() * 9000)
    }

    let opportunity = oppData
    if (mongoose.connection.readyState === 1) {
      opportunity = await OpportunityModel.create(oppData)
    }

    return res.status(201).json({ success: true, data: opportunity })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}
