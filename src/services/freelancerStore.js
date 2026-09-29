/**
 * Rodstar AI Freelancer Network - Central State Store
 * Manages career positions, training modules, assessments, application state,
 * payment verifications, opportunities, and certificate issuance.
 */

import { logAuditEvent, AUDIT_EVENTS } from './auditLogger.js'
import { rtdb } from '../config/firebase.js'
import { ref, set, update, get } from 'firebase/database'

const STORE_KEY = 'rodstar_freelancer_store_v1'

// --- TESTING TOGGLE: Bypasses fee verification for end-to-end testing ---
export const DISABLE_PAYMENT_FOR_TESTING = true
export const STANDARD_ONBOARDING_FEE_KSH = 1500

// --- 75+ CAREER POSITIONS ACROSS 9 CATEGORIES ---
export const CAREER_CATEGORIES = [
  'AI & Machine Learning',
  'Software Engineering',
  'Data',
  'Design & Product',
  'IT & Infrastructure',
  'Digital & Growth',
  'Project & Delivery',
  'AI Training & Education',
  'Specialized / Emerging'
]

export const CAREER_POSITIONS = [
  // 1. AI & MACHINE LEARNING (14)
  {
    title: 'AI Engineer',
    category: 'AI & Machine Learning',
    level: 'Intermediate - Advanced',
    skills: ['Python', 'PyTorch', 'Transformers', 'REST APIs', 'Model Deployment'],
    recommendedTraining: 'Rodstar Enterprise AI Integration Track',
    assessmentType: 'Code & Architecture Challenge',
    portfolioRequirements: 'GitHub repo showing deployed AI microservice',
    workType: 'Remote Contract / Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Generative AI Engineer',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['LLMs', 'LangChain', 'LlamaIndex', 'Fine-tuning', 'Python'],
    recommendedTraining: 'Generative AI Masterclass & RAG Pipelines',
    assessmentType: 'RAG Architecture Project',
    portfolioRequirements: 'Demonstrable RAG system or fine-tuned LLM project',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Agent Developer',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['AutoGPT', 'CrewAI', 'Python', 'Function Calling', 'Multi-Agent Frameworks'],
    recommendedTraining: 'Autonomous AI Agents & Multi-Agent Orchestration',
    assessmentType: 'Multi-Agent Workflow Submission',
    portfolioRequirements: 'Agent repository with tool calling integration',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Machine Learning Engineer',
    category: 'AI & Machine Learning',
    level: 'Intermediate - Advanced',
    skills: ['Scikit-Learn', 'TensorFlow', 'MLOps', 'Feature Engineering', 'Docker'],
    recommendedTraining: 'End-to-End MLOps & Model Monitoring',
    assessmentType: 'ML Pipeline Evaluation',
    portfolioRequirements: 'Kaggle or production pipeline case study',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'NLP Engineer',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['BERT', 'Tokenization', 'Vector DBs', 'Embeddings', 'SpaCy'],
    recommendedTraining: 'Advanced Natural Language Processing Systems',
    assessmentType: 'Semantic Search & Entity Recognition Quiz',
    portfolioRequirements: 'NLP pipeline or custom parser demo',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Computer Vision Engineer',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['OpenCV', 'YOLO', 'PyTorch', 'Image Segmentation', 'ONNX'],
    recommendedTraining: 'Computer Vision & Edge AI Deployment',
    assessmentType: 'Object Detection Benchmark Test',
    portfolioRequirements: 'Computer Vision project video demo / code',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'AI Automation Specialist',
    category: 'AI & Machine Learning',
    level: 'Beginner - Intermediate',
    skills: ['n8n', 'Make.com', 'Zapier AI', 'OpenAI API', 'Webhooks'],
    recommendedTraining: 'Enterprise Workflow AI Automation',
    assessmentType: 'Automated Business Flow Build',
    portfolioRequirements: 'Walkthrough of a functional AI automation flow',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Prompt Engineer',
    category: 'AI & Machine Learning',
    level: 'Beginner - Intermediate',
    skills: ['System Prompts', 'Few-Shot Learning', 'Chain-of-Thought', 'Eval Metrics'],
    recommendedTraining: 'Advanced Prompting & Model Steering',
    assessmentType: 'Prompt Benchmarking & Optimization Assessment',
    portfolioRequirements: 'Prompt library & output evaluation matrix',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Trainer',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    skills: ['Data Annotation', 'Domain Expertise', 'Guideline Compliance', 'JSON'],
    recommendedTraining: 'Rodstar AI Data & Model Training Standard',
    assessmentType: 'Data Labeling & Accuracy Evaluation',
    portfolioRequirements: 'Verified assessment score sample',
    workType: 'Remote Hourly / Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Model Evaluator',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    skills: ['Model Benchmarking', 'Hallucination Detection', 'Fact-Checking', 'LLM Evals'],
    recommendedTraining: 'LLM Evaluation & Red-Teaming Methodology',
    assessmentType: 'Model Comparison & Scoring Test',
    portfolioRequirements: 'Evaluation report sample',
    workType: 'Remote Hourly',
    status: 'Training Available'
  },
  {
    title: 'AI Safety / Red-Team Tester',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['Jailbreak Analysis', 'Adversarial Testing', 'AI Ethics', 'Prompt Injection'],
    recommendedTraining: 'AI Security & Vulnerability Auditing',
    assessmentType: 'Adversarial Jailbreak Challenge',
    portfolioRequirements: 'Vulnerability disclosure / security report sample',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'RLHF Specialist',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    skills: ['Reward Modeling', 'PPO', 'Preference Ranking', 'Human Feedback'],
    recommendedTraining: 'Reinforcement Learning from Human Feedback',
    assessmentType: 'Reward Model Scoring Challenge',
    portfolioRequirements: 'RLHF pipeline repository or dataset work',
    workType: 'Remote Contract',
    status: 'Coming Soon'
  },
  {
    title: 'AI Data Specialist',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    skills: ['Data Curation', 'Synthetic Data', 'Data Cleaning', 'Pandas', 'SQL'],
    recommendedTraining: 'AI Training Dataset Engineering',
    assessmentType: 'Dataset Curation & Quality Audit',
    portfolioRequirements: 'Dataset preparation notebook',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Research Assistant',
    category: 'AI & Machine Learning',
    level: 'Intermediate - Advanced',
    skills: ['Paper Summarization', 'ArXiv Analysis', 'Python', 'PyTorch Basics'],
    recommendedTraining: 'AI Scientific Literature & Benchmark Tracking',
    assessmentType: 'Literature Review & Experiment Replication',
    portfolioRequirements: 'ArXiv paper summary & code reproduction',
    workType: 'Remote Part-Time',
    status: 'Talent Pool'
  },

  // 2. SOFTWARE ENGINEERING (19)
  {
    title: 'Full-Stack Developer',
    category: 'Software Engineering',
    level: 'Intermediate - Advanced',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind / CSS'],
    recommendedTraining: 'Full-Stack SaaS Architecture & API Scaling',
    assessmentType: 'Full-Stack Web App Coding Test',
    portfolioRequirements: 'Live deployed web application + GitHub repository',
    workType: 'Remote Contract / Full-Time',
    status: 'Opportunities Available'
  },
  {
    title: 'Front-End Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['React', 'Vue', 'HTML5/CSS3', 'JavaScript (ES6+)', 'State Management'],
    recommendedTraining: 'Modern UI/UX Implementation & Responsive Apps',
    assessmentType: 'Interactive Component Design Challenge',
    portfolioRequirements: 'Responsive website showcase with clean CSS',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Back-End Developer',
    category: 'Software Engineering',
    level: 'Intermediate - Advanced',
    skills: ['Python', 'Node.js', 'Go', 'REST / GraphQL APIs', 'Database Optimization'],
    recommendedTraining: 'Scalable Microservices & Cloud Databases',
    assessmentType: 'API Design & Database Querying Test',
    portfolioRequirements: 'API documentation & GitHub backend repository',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'React Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['React.js', 'Next.js', 'Redux / Zustand', 'Hooks', 'Web Vitals'],
    recommendedTraining: 'Advanced React Architecture & Performance',
    assessmentType: 'React Dashboard Building Challenge',
    portfolioRequirements: 'GitHub React code samples',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'JavaScript Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Modern JS', 'Async/Await', 'DOM Manipulation', 'ES Modules', 'Bundlers'],
    recommendedTraining: 'Vanilla JS Core & Ecosystem Deep Dive',
    assessmentType: 'JavaScript Logic & Algorithms Quiz',
    portfolioRequirements: 'JS code repository or interactive app',
    workType: 'Remote Freelance',
    status: 'Training Available'
  },
  {
    title: 'Python Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Python 3', 'FastAPI', 'Flask', 'Data Structures', 'Testing'],
    recommendedTraining: 'Enterprise Python & Automation Services',
    assessmentType: 'Python Microservice Assessment',
    portfolioRequirements: 'Python library or API code repo',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Django Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Django', 'Django REST Framework', 'Python', 'ORMs', 'PostgreSQL'],
    recommendedTraining: 'Django Web Applications & Security',
    assessmentType: 'Django Backend Build',
    portfolioRequirements: 'Deployed Django application link',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Mobile App Developer',
    category: 'Software Engineering',
    level: 'Intermediate - Advanced',
    skills: ['React Native', 'Flutter', 'iOS / Android', 'Mobile APIs', 'App Store Deploy'],
    recommendedTraining: 'Cross-Platform Mobile Development',
    assessmentType: 'Mobile UI & API Integration Challenge',
    portfolioRequirements: 'App store link or APK / TestFlight preview',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Web Application Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['HTML/CSS/JS', 'SPA Frameworks', 'Web Architecture', 'SEO Best Practices'],
    recommendedTraining: 'Modern Web Application Lifecycle',
    assessmentType: 'Web App Build & Audit',
    portfolioRequirements: '2+ live web applications',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Software Engineer',
    category: 'Software Engineering',
    level: 'Intermediate - Advanced',
    skills: ['Data Structures', 'System Design', 'Git', 'CI/CD', 'Clean Code'],
    recommendedTraining: 'Enterprise Software Architecture',
    assessmentType: 'System Design & Code Quality Challenge',
    portfolioRequirements: 'GitHub portfolio with unit tests',
    workType: 'Remote Full-Time / Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'API Integration Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['REST', 'GraphQL', 'OAuth2', 'Postman', 'Webhook Handler'],
    recommendedTraining: 'Third-Party Integration & Webhook Security',
    assessmentType: 'Multi-API Integration Workflow',
    portfolioRequirements: 'Integration repository sample',
    workType: 'Remote Freelance',
    status: 'Training Available'
  },
  {
    title: 'Database Developer',
    category: 'Software Engineering',
    level: 'Intermediate - Advanced',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Query Optimization', 'Schema Design'],
    recommendedTraining: 'High-Performance Database Architecture',
    assessmentType: 'SQL Query Optimization Benchmark',
    portfolioRequirements: 'Database schema design case study',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Firebase Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Firestore', 'Firebase Auth', 'Cloud Functions', 'Security Rules'],
    recommendedTraining: 'Serverless Applications with Firebase',
    assessmentType: 'Firebase Security Rules & Cloud Function Build',
    portfolioRequirements: 'Firebase app repo link',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Supabase Developer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Supabase Auth', 'PostgreSQL RLS', 'Edge Functions', 'Realtime Subscriptions'],
    recommendedTraining: 'Open-Source Cloud Backend with Supabase',
    assessmentType: 'Supabase Database & Auth Implementation',
    portfolioRequirements: 'Supabase project code sample',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'QA Engineer',
    category: 'Software Engineering',
    level: 'Intermediate',
    skills: ['Cypress', 'Playwright', 'Jest', 'Automation Testing', 'Bug Tracking'],
    recommendedTraining: 'Automated QA & E2E Testing Frameworks',
    assessmentType: 'E2E Test Suite Creation',
    portfolioRequirements: 'Cypress/Playwright repository',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Software Tester',
    category: 'Software Engineering',
    level: 'Beginner - Intermediate',
    skills: ['Manual Testing', 'Test Case Design', 'Bug Reports', 'Jira', 'API Testing'],
    recommendedTraining: 'Practical Software Quality Verification',
    assessmentType: 'Bug Hunting & Documentation Assessment',
    portfolioRequirements: 'Sample test plan and bug report',
    workType: 'Remote Hourly',
    status: 'Opportunities Available'
  },
  {
    title: 'DevOps Engineer',
    category: 'Software Engineering',
    level: 'Advanced',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'CI/CD Pipelines'],
    recommendedTraining: 'Cloud-Native DevOps & CI/CD Pipelines',
    assessmentType: 'Deployment Pipeline & IaC Setup',
    portfolioRequirements: 'Terraform scripts or GitHub Workflow repos',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Cloud Engineer',
    category: 'Software Engineering',
    level: 'Advanced',
    skills: ['AWS', 'GCP', 'Azure', 'Serverless', 'Networking / IAM'],
    recommendedTraining: 'Multi-Cloud Architecture & Resilience',
    assessmentType: 'Cloud Infrastructure Design Test',
    portfolioRequirements: 'Cloud architectural diagrams & IaC code',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Systems Engineer',
    category: 'Software Engineering',
    level: 'Advanced',
    skills: ['Linux Admin', 'Bash Scripting', 'Networking', 'System Security', 'Monitoring'],
    recommendedTraining: 'Systems Engineering & Infrastructure Hardening',
    assessmentType: 'Linux Server Troubleshooting Test',
    portfolioRequirements: 'Infrastructure management scripts',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },

  // 3. DATA (10)
  {
    title: 'Data Analyst',
    category: 'Data',
    level: 'Intermediate',
    skills: ['SQL', 'Power BI / Tableau', 'Excel', 'Python', 'Data Visualization'],
    recommendedTraining: 'Business Intelligence & Executive Dashboards',
    assessmentType: 'Data Dashboard & Insights Challenge',
    portfolioRequirements: 'Power BI / Tableau dashboard link or report',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Data Scientist',
    category: 'Data',
    level: 'Advanced',
    skills: ['Python', 'Pandas', 'Statistics', 'Machine Learning', 'A/B Testing'],
    recommendedTraining: 'Applied Data Science & Predictive Analytics',
    assessmentType: 'Predictive Modeling Case Study',
    portfolioRequirements: 'Jupyter notebook with analytical conclusions',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Data Engineer',
    category: 'Data',
    level: 'Advanced',
    skills: ['PySpark', 'Airflow', 'SQL', 'Data Warehousing (Snowflake)', 'ETL Pipelines'],
    recommendedTraining: 'Enterprise Data Engineering & Pipelines',
    assessmentType: 'ETL Pipeline Architecture Challenge',
    portfolioRequirements: 'Data pipeline repository link',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Data Annotator',
    category: 'Data',
    level: 'Beginner',
    skills: ['Precision', 'Bounding Boxes', 'Classification', 'CVAT', 'Text Tagging'],
    recommendedTraining: 'Standardized Data Labeling Guidelines',
    assessmentType: 'Annotation Accuracy Test (95%+ requirement)',
    portfolioRequirements: 'Verified assessment badge',
    workType: 'Remote Hourly',
    status: 'Opportunities Available'
  },
  {
    title: 'Data Labeling Specialist',
    category: 'Data',
    level: 'Beginner - Intermediate',
    skills: ['Label Studio', 'NLP Tagging', 'Audio Transcription Tagging', 'Quality Assurance'],
    recommendedTraining: 'Multi-Modal AI Dataset Labeling',
    assessmentType: 'Multi-Modal Data Tagging Exam',
    portfolioRequirements: 'Completed assessment dataset',
    workType: 'Remote Hourly',
    status: 'Opportunities Available'
  },
  {
    title: 'Data Collection Specialist',
    category: 'Data',
    level: 'Beginner - Intermediate',
    skills: ['Web Scraping', 'BeautifulSoup / Scrapy', 'API Scraping', 'Data Cleanliness'],
    recommendedTraining: 'Ethical Web Scraping & Data Mining',
    assessmentType: 'Data Scraping & Structuring Script',
    portfolioRequirements: 'Python web scraper code repo',
    workType: 'Remote Freelance',
    status: 'Training Available'
  },
  {
    title: 'Data Quality Analyst',
    category: 'Data',
    level: 'Intermediate',
    skills: ['Data Validation', 'SQL Audit Queries', 'Data Governance', 'Error Profiling'],
    recommendedTraining: 'Data Integrity & Quality Assurance',
    assessmentType: 'Dataset Error Detection & Cleaning Audit',
    portfolioRequirements: 'Data audit report sample',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Data Entry Specialist',
    category: 'Data',
    level: 'Beginner',
    skills: ['Spreadsheet Mastery', 'Speed & Accuracy', 'Data Verification', 'Google Sheets'],
    recommendedTraining: 'High-Speed Verified Data Entry',
    assessmentType: 'Data Entry Speed & Accuracy Assessment',
    portfolioRequirements: 'Assessment typing & verification score',
    workType: 'Remote Hourly',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Data Evaluator',
    category: 'Data',
    level: 'Intermediate',
    skills: ['LLM Response Ranking', 'Factual Verification', 'Safety Auditing', 'English Nuance'],
    recommendedTraining: 'AI Response Evaluation & Guidelines',
    assessmentType: 'Comparative Evaluation Exam',
    portfolioRequirements: 'Evaluation scorecard sample',
    workType: 'Remote Hourly',
    status: 'Opportunities Available'
  },
  {
    title: 'Research Assistant',
    category: 'Data',
    level: 'Intermediate',
    skills: ['Secondary Research', 'Literature Synthesis', 'Report Drafting', 'Citation Management'],
    recommendedTraining: 'Tech Research Methods & Report Writing',
    assessmentType: 'Market & Technical Research Brief',
    portfolioRequirements: 'Sample 3-page research brief',
    workType: 'Remote Part-Time',
    status: 'Talent Pool'
  },

  // 4. DESIGN & PRODUCT (9)
  {
    title: 'UI/UX Designer',
    category: 'Design & Product',
    level: 'Intermediate - Advanced',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Testing'],
    recommendedTraining: 'Modern Web & App Design Systems',
    assessmentType: 'Interactive App Wireframe Challenge',
    portfolioRequirements: 'Figma showcase or portfolio website link',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Product Designer',
    category: 'Design & Product',
    level: 'Advanced',
    skills: ['Product Strategy', 'UI Design', 'Figma', 'User Research', 'Design Systems'],
    recommendedTraining: 'End-to-End Product Design Sprint',
    assessmentType: 'Product Design Case Study Presentation',
    portfolioRequirements: 'Comprehensive UX/UI case study link',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Graphic Designer',
    category: 'Design & Product',
    level: 'Intermediate',
    skills: ['Photoshop', 'Illustrator', 'Branding', 'Social Media Design', 'Typography'],
    recommendedTraining: 'Corporate Tech Branding & Visual Assets',
    assessmentType: 'Brand Identity & Banner Challenge',
    portfolioRequirements: 'Behance / Dribbble / Portfolio link',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Web Designer',
    category: 'Design & Product',
    level: 'Intermediate',
    skills: ['Figma to HTML/CSS', 'Responsive Layouts', 'Landing Page UX', 'Conversion Design'],
    recommendedTraining: 'High-Converting Landing Page Design',
    assessmentType: 'Landing Page Layout Mockup',
    portfolioRequirements: '3+ designed live web links',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'UX Researcher',
    category: 'Design & Product',
    level: 'Intermediate - Advanced',
    skills: ['User Interviews', 'Usability Testing', 'Personas', 'Journey Mapping', 'Analytics'],
    recommendedTraining: 'User Research & Insights Synthesis',
    assessmentType: 'Usability Audit Report Submission',
    portfolioRequirements: 'UX Research insights case study',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Product Manager',
    category: 'Design & Product',
    level: 'Advanced',
    skills: ['Roadmapping', 'Agile/Scrum', 'Jira', 'User Stories', 'PRD Writing'],
    recommendedTraining: 'Tech Product Management & Delivery',
    assessmentType: 'Product Requirement Document (PRD) Challenge',
    portfolioRequirements: 'Sample PRD or product teardown',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Product Owner',
    category: 'Design & Product',
    level: 'Advanced',
    skills: ['Backlog Refinement', 'Acceptance Criteria', 'Stakeholder Mgmt', 'Agile'],
    recommendedTraining: 'Agile Product Backlog Management',
    assessmentType: 'Backlog Prioritization & Story Writing Exam',
    portfolioRequirements: 'Sample user story breakdown',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Business Analyst',
    category: 'Design & Product',
    level: 'Intermediate',
    skills: ['Requirement Gathering', 'Process Mapping', 'BPMN', 'SQL', 'Gap Analysis'],
    recommendedTraining: 'Business Process Modeling & Requirements',
    assessmentType: 'Workflow Process Map & Spec Document',
    portfolioRequirements: 'Process mapping sample',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Technical Business Analyst',
    category: 'Design & Product',
    level: 'Advanced',
    skills: ['API Specifications', 'System Architecture Specs', 'Data Flows', 'SQL'],
    recommendedTraining: 'Technical Requirement Specification',
    assessmentType: 'Technical Architecture & Integration Spec',
    portfolioRequirements: 'Technical specification document',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },

  // 5. IT & INFRASTRUCTURE (10)
  {
    title: 'IT Support Specialist',
    category: 'IT & Infrastructure',
    level: 'Beginner - Intermediate',
    skills: ['Troubleshooting', 'Windows/Mac OS', 'Active Directory', 'Ticketing Systems'],
    recommendedTraining: 'Remote Helpdesk & Support Fundamentals',
    assessmentType: 'Technical Support Scenario Exam',
    portfolioRequirements: 'IT certification or assessment score',
    workType: 'Remote Full-Time / Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'ICT Technician',
    category: 'IT & Infrastructure',
    level: 'Intermediate',
    skills: ['Hardware Diagnostics', 'Network Cables', 'OS Installation', 'Peripheral Setup'],
    recommendedTraining: 'Hardware & System Diagnostics',
    assessmentType: 'Hardware & Network Troubleshooting Quiz',
    portfolioRequirements: 'Technical credentials sample',
    workType: 'Remote Support / On-site Kenya',
    status: 'Training Available'
  },
  {
    title: 'Network Engineer',
    category: 'IT & Infrastructure',
    level: 'Advanced',
    skills: ['CCNA/CCNP', 'Routers & Switches', 'VPNs', 'Firewalls', 'TCP/IP'],
    recommendedTraining: 'Enterprise Network Architecture & Security',
    assessmentType: 'Subnetting & Network Diagram Topology Test',
    portfolioRequirements: 'Network topology diagram case study',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Systems Administrator',
    category: 'IT & Infrastructure',
    level: 'Advanced',
    skills: ['Linux/Windows Server', 'User Permissions', 'Backups', 'Scripting', 'Patching'],
    recommendedTraining: 'SysAdmin Operations & Incident Response',
    assessmentType: 'Server Troubleshooting & Configuration Scenario',
    portfolioRequirements: 'SysAdmin automation scripts repo',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Cloud Support Engineer',
    category: 'IT & Infrastructure',
    level: 'Intermediate - Advanced',
    skills: ['AWS / GCP Cloud Console', 'IAM Roles', 'Storage Buckets', 'Log Analysis'],
    recommendedTraining: 'Cloud Infrastructure Helpdesk Operations',
    assessmentType: 'Cloud Support Ticket Resolution Challenge',
    portfolioRequirements: 'AWS / Azure certification or lab proof',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Cybersecurity Analyst',
    category: 'IT & Infrastructure',
    level: 'Advanced',
    skills: ['SIEM', 'SOC Operations', 'Vulnerability Assessment', 'Threat Hunting'],
    recommendedTraining: 'Cybersecurity Auditing & SOC Essentials',
    assessmentType: 'Log Analysis & Threat Incident Challenge',
    portfolioRequirements: 'Security audit report sample',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Information Security Specialist',
    category: 'IT & Infrastructure',
    level: 'Advanced',
    skills: ['ISO 27001', 'Data Privacy', 'Access Control', 'Security Frameworks'],
    recommendedTraining: 'Enterprise Security Compliance',
    assessmentType: 'Compliance Framework Assessment',
    portfolioRequirements: 'Security policy draft sample',
    workType: 'Remote Contract',
    status: 'Coming Soon'
  },
  {
    title: 'Technical Support Specialist',
    category: 'IT & Infrastructure',
    level: 'Intermediate',
    skills: ['SaaS Helpdesk', 'Zendesk / Freshdesk', 'API Diagnostics', 'Communication'],
    recommendedTraining: 'SaaS Customer Tech Support Excellence',
    assessmentType: 'Live Tech Support Chat Simulator',
    portfolioRequirements: 'Assessment score badge',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'NOC Technician',
    category: 'IT & Infrastructure',
    level: 'Intermediate',
    skills: ['Network Monitoring', 'Nagios / Zabbix', 'Incident Escalation', 'Uptime Audit'],
    recommendedTraining: 'NOC Operations & Alert Management',
    assessmentType: 'Alert Triage & Escalation Simulation',
    portfolioRequirements: 'NOC lab summary',
    workType: 'Remote Shift Work',
    status: 'Talent Pool'
  },
  {
    title: 'Infrastructure Engineer',
    category: 'IT & Infrastructure',
    level: 'Advanced',
    skills: ['Bare Metal & Cloud', 'DNS', 'Load Balancing', 'Disaster Recovery'],
    recommendedTraining: 'High Availability Infrastructure Design',
    assessmentType: 'Disaster Recovery Plan & Diagram Challenge',
    portfolioRequirements: 'Infrastructure design proposal',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },

  // 6. DIGITAL & GROWTH (9)
  {
    title: 'Digital Marketing Specialist',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Google Ads', 'Meta Ads', 'Funnel Optimization', 'Analytics', 'Copywriting'],
    recommendedTraining: 'Performance Marketing & AI Campaign Scaling',
    assessmentType: 'Marketing Campaign Strategy Plan',
    portfolioRequirements: 'Campaign performance metrics case study',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'SEO Specialist',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Keyword Research', 'Technical SEO', 'Ahrefs / SEMrush', 'On-Page SEO'],
    recommendedTraining: 'Technical & AI Search Engine Optimization',
    assessmentType: 'Website SEO Audit Challenge',
    portfolioRequirements: 'SEO audit report for a real site',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Social Media Manager',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Content Calendar', 'Buffer / Hootsuite', 'Community Growth', 'Shorts/Reels'],
    recommendedTraining: 'AI-Powered Social Media Management',
    assessmentType: '30-Day Content Calendar & Visual Plan',
    portfolioRequirements: 'Social media handle samples managed',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Content Strategist',
    category: 'Digital & Growth',
    level: 'Advanced',
    skills: ['Content Pillars', 'Audience Research', 'Editorial Calendar', 'Brand Voice'],
    recommendedTraining: 'Strategic B2B & Tech Content Operations',
    assessmentType: 'Content Roadmap Strategy Brief',
    portfolioRequirements: 'Published content strategy sample',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Content Creator',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Video Editing', 'CapCut / Premiere', 'Graphics', 'Scriptwriting', 'TikTok'],
    recommendedTraining: 'Short-Form Tech Video Production',
    assessmentType: '60-Second Explainer Video Submission',
    portfolioRequirements: 'Video portfolio link',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Copywriter',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Sales Copy', 'Email Sequences', 'Landing Page Copy', 'Persuasive Writing'],
    recommendedTraining: 'High-Converting Direct Response Copywriting',
    assessmentType: 'Landing Page & Email Sequence Writing',
    portfolioRequirements: 'Copywriting portfolio PDF / link',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Email Marketing Specialist',
    category: 'Digital & Growth',
    level: 'Intermediate',
    skills: ['Klaviyo', 'Mailchimp', 'Email Deliverability', 'A/B Testing', 'Segmentation'],
    recommendedTraining: 'Email Automation & Campaign Analytics',
    assessmentType: 'Email Automation Flow Build',
    portfolioRequirements: 'Email sequence campaign case study',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Performance Marketing Specialist',
    category: 'Digital & Growth',
    level: 'Advanced',
    skills: ['PPC', 'ROAS Optimization', 'Retargeting', 'Attribution Modeling'],
    recommendedTraining: 'PPC Analytics & Ad Budget Scaling',
    assessmentType: 'Paid Ad Budgeting & ROAS Strategy Test',
    portfolioRequirements: 'Proven ad spend performance metrics',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Marketing Automation Specialist',
    category: 'Digital & Growth',
    level: 'Intermediate - Advanced',
    skills: ['HubSpot', 'ActiveCampaign', 'CRM Workflows', 'Lead Scoring'],
    recommendedTraining: 'HubSpot & CRM Marketing Automation',
    assessmentType: 'CRM Lead Nurturing Workflow Design',
    portfolioRequirements: 'HubSpot certification or workflow diagram',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },

  // 7. PROJECT & DELIVERY (11)
  {
    title: 'Project Manager',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['PMP / CAPM', 'Jira / Asana', 'Risk Management', 'Budgeting', 'Agile'],
    recommendedTraining: 'Tech Project Management & Remote Delivery',
    assessmentType: 'Project Plan & Risk Matrix Challenge',
    portfolioRequirements: 'Sample project schedule & Gantt chart',
    workType: 'Remote Full-Time / Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Technical Project Manager',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['Software Lifecycle', 'Jira', 'Developer Coordination', 'API Basics'],
    recommendedTraining: 'Engineering Project Leadership',
    assessmentType: 'Sprint Planning & Tech Dependency Map',
    portfolioRequirements: 'Technical project plan sample',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Scrum Master',
    category: 'Project & Delivery',
    level: 'Intermediate - Advanced',
    skills: ['CSM / PSM', 'Facilitation', 'Sprint Ceremonies', 'Burndown Charts'],
    recommendedTraining: 'Agile Scrum Ceremonies & Team Coaching',
    assessmentType: 'Scrum Facilitation Scenario Exam',
    portfolioRequirements: 'Scrum certification or team case study',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Delivery Manager',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['Client Delivery', 'SLA Enforcement', 'Resource Allocation', 'Reporting'],
    recommendedTraining: 'Client Account & Software Delivery Management',
    assessmentType: 'Client SLA & Resource Allocation Scenario',
    portfolioRequirements: 'Delivery strategy brief',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Implementation Specialist',
    category: 'Project & Delivery',
    level: 'Intermediate',
    skills: ['Client Onboarding', 'Software Configuration', 'Training Clients', 'Troubleshooting'],
    recommendedTraining: 'SaaS Client Implementation & Onboarding',
    assessmentType: 'Client Software Configuration Challenge',
    portfolioRequirements: 'Onboarding guide sample',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Technical Lead',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['Code Reviews', 'Architectural Guidance', 'Mentorship', 'Git Strategy'],
    recommendedTraining: 'Engineering Team Leadership & Code Standards',
    assessmentType: 'Code Review & Architecture Audit Exam',
    portfolioRequirements: 'GitHub repository with detailed PR reviews',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Engineering Lead',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['Resource Management', 'Hiring', 'Tech Strategy', 'System Reliability'],
    recommendedTraining: 'Engineering Management & Team Scaling',
    assessmentType: 'Engineering Team Capacity Planning Test',
    portfolioRequirements: 'Engineering leadership case study',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Solutions Architect',
    category: 'Project & Delivery',
    level: 'Advanced',
    skills: ['Enterprise Architecture', 'Cloud Infrastructure', 'Security', 'Cost Optimization'],
    recommendedTraining: 'Enterprise Solutions Architecture & Diagramming',
    assessmentType: 'End-to-End System Blueprint Design',
    portfolioRequirements: 'Architecture blueprint design document',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Solutions Engineer',
    category: 'Project & Delivery',
    level: 'Intermediate - Advanced',
    skills: ['Pre-Sales Tech Demos', 'PoC Building', 'API Consultation', 'Client Specs'],
    recommendedTraining: 'Pre-Sales Technical Solutions & Demos',
    assessmentType: 'Technical Proof-of-Concept Demo Build',
    portfolioRequirements: 'Proof of concept demo repo',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'Customer Success Specialist',
    category: 'Project & Delivery',
    level: 'Intermediate',
    skills: ['Churn Prevention', 'Account Health', 'SaaS Onboarding', 'QBRs'],
    recommendedTraining: 'SaaS Customer Success & Account Growth',
    assessmentType: 'Customer Retention Strategy Scenario',
    portfolioRequirements: 'Account health framework sample',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'Account Manager',
    category: 'Project & Delivery',
    level: 'Intermediate - Advanced',
    skills: ['Client Relationships', 'Upselling', 'Contract Renewals', 'Communication'],
    recommendedTraining: 'B2B Tech Account Management',
    assessmentType: 'Client Account Renewal & Expansion Plan',
    portfolioRequirements: 'Account management case study',
    workType: 'Remote Contract',
    status: 'Training Available'
  },

  // 8. AI TRAINING & EDUCATION (10)
  {
    title: 'AI Trainer',
    category: 'AI Training & Education',
    level: 'Intermediate',
    skills: ['Prompt Structuring', 'Response Rating', 'Curriculum Guidance', 'Domain Knowledge'],
    recommendedTraining: 'Rodstar AI Educator & Data Specialist Standard',
    assessmentType: 'AI Model Training & Grading Test',
    portfolioRequirements: 'Verified Rodstar Assessment Badge',
    workType: 'Remote Hourly / Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'AI Instructor',
    category: 'AI Training & Education',
    level: 'Advanced',
    skills: ['Public Speaking', 'Course Delivery', 'Generative AI Tools', 'Live Demos'],
    recommendedTraining: 'Technical Instruction & Live Workshop Delivery',
    assessmentType: '10-Minute Recorded Live Teaching Demo',
    portfolioRequirements: 'Video recording of a technical lesson',
    workType: 'Remote Part-Time',
    status: 'Opportunities Available'
  },
  {
    title: 'Coding Instructor',
    category: 'AI Training & Education',
    level: 'Intermediate',
    skills: ['Python / JS Pedagogy', 'Debugging Assistance', 'Student Mentorship', 'Code Reviews'],
    recommendedTraining: 'Practical Software Pedagogy & Mentorship',
    assessmentType: 'Student Code Review & Explainer Test',
    portfolioRequirements: 'Sample code explainer or tutorial link',
    workType: 'Remote Part-Time',
    status: 'Opportunities Available'
  },
  {
    title: 'Software Engineering Mentor',
    category: 'AI Training & Education',
    level: 'Advanced',
    skills: ['Career Guidance', '1-on-1 Mentoring', 'Portfolio Audits', 'Mock Interviews'],
    recommendedTraining: 'Developer Mentorship & Career Guidance',
    assessmentType: 'Mock Technical Interview Session Simulation',
    portfolioRequirements: 'Mentorship track record or tutorial portfolio',
    workType: 'Remote Hourly',
    status: 'Training Available'
  },
  {
    title: 'AI Workshop Facilitator',
    category: 'AI Training & Education',
    level: 'Intermediate - Advanced',
    skills: ['Workshop Facilitation', 'Hands-on Labs', 'Slide Deck Design', 'Q&A'],
    recommendedTraining: 'Interactive Enterprise AI Workshop Facilitation',
    assessmentType: 'Workshop Syllabus & Slide Deck Challenge',
    portfolioRequirements: 'Workshop slide deck & lab syllabus',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Curriculum Developer',
    category: 'AI Training & Education',
    level: 'Advanced',
    skills: ['Instructional Design', 'Learning Objectives', 'Quiz Design', 'Markdown'],
    recommendedTraining: 'Technical Curriculum & Syllabus Engineering',
    assessmentType: 'Course Module & Quiz Syllabus Challenge',
    portfolioRequirements: 'Complete syllabus course design sample',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Technical Content Developer',
    category: 'AI Training & Education',
    level: 'Intermediate',
    skills: ['Technical Documentation', 'Code Snippets', 'Tutorial Writing', 'Markdown'],
    recommendedTraining: 'Developer Documentation & Tutorial Writing',
    assessmentType: 'Technical Tutorial Article Draft',
    portfolioRequirements: '2+ published technical blog posts or tutorials',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Developer Advocate',
    category: 'AI Training & Education',
    level: 'Advanced',
    skills: ['Community Engagement', 'SDK Demos', 'Conference Speaking', 'Open Source'],
    recommendedTraining: 'Developer Relations & Ecosystem Growth',
    assessmentType: 'SDK Walkthrough Video & Article Submission',
    portfolioRequirements: 'GitHub open-source contributions & video link',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Hackathon Facilitator',
    category: 'AI Training & Education',
    level: 'Intermediate',
    skills: ['Event Operations', 'Judging Criteria', 'Participant Mentorship', 'Live Stream'],
    recommendedTraining: 'Hackathon Operations & Judging Management',
    assessmentType: 'Hackathon Event Operations Plan',
    portfolioRequirements: 'Previous event organization summary',
    workType: 'Remote Freelance',
    status: 'Training Available'
  },
  {
    title: 'Digital Skills Trainer',
    category: 'AI Training & Education',
    level: 'Beginner - Intermediate',
    skills: ['Basic Computer Literacy', 'Google Workspace', 'AI Productivity Tools', 'Patience'],
    recommendedTraining: 'Community Digital Literacy Facilitation',
    assessmentType: 'Beginner Training Lesson Plan',
    portfolioRequirements: 'Lesson plan document',
    workType: 'Remote / Local Workshops',
    status: 'Opportunities Available'
  },

  // 9. SPECIALIZED / EMERGING (10)
  {
    title: 'Blockchain Developer',
    category: 'Specialized / Emerging',
    level: 'Advanced',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'EVM', 'Hardhat'],
    recommendedTraining: 'Smart Contract Development & Auditing',
    assessmentType: 'Smart Contract Deployment & Testing Test',
    portfolioRequirements: 'Verified smart contract deployed link',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Web3 Developer',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['Ethers.js', 'React', 'Wallet Connect', 'DeFi Protocols', 'IPFS'],
    recommendedTraining: 'Web3 Front-End & DApp Architecture',
    assessmentType: 'DApp Web3 Integration Challenge',
    portfolioRequirements: 'Deployed DApp showcase',
    workType: 'Remote Contract',
    status: 'Training Available'
  },
  {
    title: 'IoT Developer',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['Embedded C/C++', 'ESP32', 'MQTT', 'Raspberry Pi', 'Sensors'],
    recommendedTraining: 'IoT Hardware Integration & Cloud Telemetry',
    assessmentType: 'MQTT Sensor Telemetry Code Build',
    portfolioRequirements: 'IoT project schematic and code repo',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'AIoT Engineer',
    category: 'Specialized / Emerging',
    level: 'Advanced',
    skills: ['Edge Impulse', 'TensorFlow Lite', 'Microcontrollers', 'Sensor Fusion'],
    recommendedTraining: 'Edge AI & Microcontroller Machine Learning',
    assessmentType: 'TinyML Model Deployment Challenge',
    portfolioRequirements: 'TinyML project repo',
    workType: 'Remote Contract',
    status: 'Coming Soon'
  },
  {
    title: 'Quantitative Developer',
    category: 'Specialized / Emerging',
    level: 'Advanced',
    skills: ['C++', 'Python', 'Algorithmic Trading', 'Financial Mathematics', 'APIs'],
    recommendedTraining: 'Algorithmic Execution & Market Data Processing',
    assessmentType: 'Financial Algorithm Backtest Submission',
    portfolioRequirements: 'Backtesting framework notebook',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'FinTech Developer',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['Payment Gateways', 'M-Pesa API', 'Stripe', 'PCI-DSS Compliance', 'Node.js'],
    recommendedTraining: 'Enterprise FinTech & Secure Payment Systems',
    assessmentType: 'Payment Webhook Verification & Callback Test',
    portfolioRequirements: 'Payment API integration code repo',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'EdTech Developer',
    category: 'Specialized / Emerging',
    level: 'Intermediate',
    skills: ['LMS Integration', 'SCORM', 'Canvas API', 'Interactive Quizzes', 'React'],
    recommendedTraining: 'EdTech Platform & Quiz Engine Architecture',
    assessmentType: 'LMS Quiz Component Build',
    portfolioRequirements: 'EdTech application repo',
    workType: 'Remote Freelance',
    status: 'Opportunities Available'
  },
  {
    title: 'Automation Engineer',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['Python', 'Selenium', 'Puppeteer', 'Cron Jobs', 'Process Automation'],
    recommendedTraining: 'Web Automation & Headless Browser Scraping',
    assessmentType: 'Headless Browser Automation Script',
    portfolioRequirements: 'Automation script GitHub repository',
    workType: 'Remote Contract',
    status: 'Opportunities Available'
  },
  {
    title: 'RPA Developer',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['UiPath', 'Automation Anywhere', 'Desktop Bots', 'OCR', 'Excel Macro'],
    recommendedTraining: 'Robotic Process Automation for Enterprise',
    assessmentType: 'RPA Bot Workflow Challenge',
    portfolioRequirements: 'UiPath bot project archive',
    workType: 'Remote Contract',
    status: 'Talent Pool'
  },
  {
    title: 'Technical Researcher',
    category: 'Specialized / Emerging',
    level: 'Intermediate - Advanced',
    skills: ['Benchmarking', 'Tech Evaluation', 'Whitepaper Writing', 'Patent Analysis'],
    recommendedTraining: 'Emerging Technology Market & Tech Evaluation',
    assessmentType: 'Emerging Tech Benchmark Whitepaper',
    portfolioRequirements: 'Whitepaper or research paper sample',
    workType: 'Remote Part-Time',
    status: 'Talent Pool'
  }
]

// --- SEED TRAINING MODULES ---
export const TRAINING_COURSES = [
  {
    id: 'COURSE-001',
    title: 'Rodstar AI Core Freelancer Orientation',
    category: 'All Tracks',
    modulesCount: 4,
    estimatedDuration: '4 Hours',
    description: 'Essential orientation covering global remote standards, security guidelines, partner communication, and client deliverable workflows.',
    modules: [
      {
        id: 'MOD-101',
        title: 'Module 1: Global Remote Work Standards & Partner Expectations',
        type: 'video',
        videoUrl: 'https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4',
        duration: '45 mins',
        summary: 'Learn how to communicate asynchronously with international teams, manage deadlines, submit code reviews, and follow Rodstar AI quality controls.'
      },
      {
        id: 'MOD-102',
        title: 'Module 2: Client Data Confidentiality & IP Security',
        type: 'reading',
        duration: '30 mins',
        summary: 'Strict guidelines on NDA compliance, handling confidential partner APIs, preventing code leaks, and secure key storage.'
      },
      {
        id: 'MOD-103',
        title: 'Module 3: Rodstar AI Tooling & Project Management',
        type: 'video',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4',
        duration: '60 mins',
        summary: 'Overview of GitHub workflow, Jira ticket updates, time-tracking standards, and automated testing requirements.'
      },
      {
        id: 'MOD-104',
        title: 'Module 4: Practical Deliverable Submission & Verification',
        type: 'assignment',
        duration: '90 mins',
        summary: 'Submit your baseline portfolio project or repository to complete orientation and unlock technical assessments.'
      }
    ]
  },
  {
    id: 'COURSE-002',
    title: 'Enterprise AI & Machine Learning Integration',
    category: 'AI & Machine Learning',
    modulesCount: 3,
    estimatedDuration: '8 Hours',
    description: 'Hands-on practical training on building RAG pipelines, deploying LLMs, vector database setup, and prompt optimization.',
    modules: [
      {
        id: 'MOD-201',
        title: 'Module 1: LLM Architecture & Function Calling',
        type: 'video',
        videoUrl: 'https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4',
        duration: '90 mins',
        summary: 'Master OpenAI, Anthropic, and open-source models with JSON function calling and structured outputs.'
      },
      {
        id: 'MOD-202',
        title: 'Module 2: Vector Search & Chunking Strategies',
        type: 'reading',
        duration: '120 mins',
        summary: 'Embedding models, cosine similarity, Pinecone/Chroma integration, and hybrid search optimization.'
      },
      {
        id: 'MOD-203',
        title: 'Module 3: Production RAG Deployment',
        type: 'assignment',
        duration: '150 mins',
        summary: 'Build and submit a FastAPI / Node endpoint querying a vector database with streaming responses.'
      }
    ]
  },
  {
    id: 'COURSE-003',
    title: 'Full-Stack Modern Web Engineering & API Scaling',
    category: 'Software Engineering',
    modulesCount: 3,
    estimatedDuration: '6 Hours',
    description: 'Production standards for React, modern API security, responsive UI design system integration, and deployment.',
    modules: [
      {
        id: 'MOD-301',
        title: 'Module 1: Clean Component Architecture & State Management',
        type: 'video',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4',
        duration: '60 mins',
        summary: 'Structuring modular React / JS components, custom hooks, and state isolation.'
      },
      {
        id: 'MOD-302',
        title: 'Module 2: RESTful & Webhook API Security',
        type: 'reading',
        duration: '90 mins',
        summary: 'JWT validation, rate-limiting headers, CORS policy configuration, and error masking.'
      },
      {
        id: 'MOD-303',
        title: 'Module 3: High-Performance Web Deployment',
        type: 'assignment',
        duration: '120 mins',
        summary: 'Deploy a full-stack project to Vercel/Render with automated CI/CD pipeline.'
      }
    ]
  }
]

// --- SEED ASSESSMENTS ---
export const ASSESSMENTS_BANK = [
  {
    id: 'ASSESS-001',
    title: 'Rodstar AI Core Competency & Remote Aptitude Exam',
    trackCategory: 'All Tracks',
    timeLimitMinutes: 20,
    passingScorePercentage: 80,
    questions: [
      {
        id: 'Q1',
        question: 'Does paying the KSh 1,500 training and onboarding fee guarantee job placement with Rodstar AI?',
        options: [
          'Yes, it guarantees a paid position within 30 days.',
          'No. It covers training, onboarding, assessment, and eligibility review; remote work depends on qualifications, client requirements, and matching.',
          'Yes, it guarantees a fixed monthly income.',
          'No, but it refunds automatically if no job is found in a week.'
        ],
        correctIndex: 1
      },
      {
        id: 'Q2',
        question: 'When working on a confidential Rodstar AI partner project, where should partner API keys be stored?',
        options: [
          'Directly inside frontend JavaScript files.',
          'In public GitHub repository commits.',
          'In secure server-side environment variables (.env) never exposed to the client.',
          'In client browser localStorage.'
        ],
        correctIndex: 2
      },
      {
        id: 'Q3',
        question: 'What is the primary objective of the 5-step Rodstar Freelancer Journey?',
        options: [
          'Apply -> Get Assessed -> Train -> Get Verified -> Access Opportunities',
          'Pay -> Get Hired Immediately -> No Training Needed',
          'Apply -> Skip Assessment -> Receive Direct Salary',
          'Register -> Receive Laptop -> Wait for Assignment'
        ],
        correctIndex: 0
      },
      {
        id: 'Q4',
        question: 'How are client project opportunities awarded to freelancers in the talent pool?',
        options: [
          'Random lottery draw.',
          'First come, first served regardless of skills.',
          'Based on verified assessment scores, portfolio quality, training completion, and specific client requirements.',
          'Only based on registration timestamp.'
        ],
        correctIndex: 2
      },
      {
        id: 'Q5',
        question: 'What happens if a user submits a fake payment confirmation or tampered reference code?',
        options: [
          'The account is automatically activated.',
          'The application is flagged, server-side webhook validation fails, and audit logs record suspicious activity.',
          'Nothing happens.',
          'Payment is marked successful automatically after 1 hour.'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'ASSESS-002',
    title: 'Software Engineering & Clean Architecture Assessment',
    trackCategory: 'Software Engineering',
    timeLimitMinutes: 25,
    passingScorePercentage: 80,
    questions: [
      {
        id: 'SQ1',
        question: 'Which HTTP method should be used for updating a specific resource idempotently?',
        options: ['POST', 'PUT', 'GET', 'DELETE'],
        correctIndex: 1
      },
      {
        id: 'SQ2',
        question: 'What is the main benefit of implementing Row Level Security (RLS) in databases like PostgreSQL / Supabase?',
        options: [
          'Improves CSS styling speed.',
          'Restricts database row access per authenticated user directly at the database engine level.',
          'Compiles code faster.',
          'Compresses images automatically.'
        ],
        correctIndex: 1
      },
      {
        id: 'SQ3',
        question: 'Why should sensitive application credentials never be stored in frontend code?',
        options: [
          'Because frontend files can be read, inspected, and extracted by anyone using browser developer tools.',
          'Because JavaScript does not support strings.',
          'Because browsers delete credentials automatically.',
          'Because it reduces internet download speeds.'
        ],
        correctIndex: 0
      }
    ]
  }
]

// --- SEED VERIFIED OPPORTUNITIES ---
export const INITIAL_OPPORTUNITIES = [
  {
    id: 'OPP-101',
    title: 'Generative AI Pipeline Architect (Remote)',
    category: 'AI & Machine Learning',
    requiredSkills: ['Python', 'LLMs', 'LangChain', 'RAG', 'FastAPI'],
    experienceLevel: 'Intermediate - Advanced',
    projectType: '3-Month Contract (Extendable)',
    locationEligibility: 'Remote (Global / Kenya / East Africa)',
    timeCommitment: '25 - 40 hrs/week',
    compensationInfo: 'Competitive Remote Project Rates',
    deadline: '2026-10-30',
    partnerName: 'Confidential Rodstar AI Partner',
    isConfidential: true,
    description: 'We are seeking a qualified Generative AI Engineer from the Rodstar Freelancer Network to build scalable RAG pipelines and integrate vector search for enterprise knowledge bases.',
    requirements: [
      'Completed Rodstar AI Orientation & Technical Assessment (80%+ score)',
      'Proven experience building RAG workflows in Python',
      'Strong grasp of vector databases (Pinecone, Qdrant, or Chroma)',
      'Reliable high-speed internet connection and quiet remote work environment'
    ],
    status: 'Open',
    applicantCount: 4
  },
  {
    id: 'OPP-102',
    title: 'Full-Stack React & Node Developer',
    category: 'Software Engineering',
    requiredSkills: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind'],
    experienceLevel: 'Intermediate',
    projectType: 'Freelance Milestone Project',
    locationEligibility: 'Remote',
    timeCommitment: '20 - 30 hrs/week',
    compensationInfo: 'Milestone-based Payment',
    deadline: '2026-10-15',
    partnerName: 'TechDev Solutions Ltd',
    isConfidential: false,
    description: 'Develop responsive dashboard interfaces and back-end integration for an international SaaS portal.',
    requirements: [
      'Verified Rodstar Full-Stack or React Developer training status',
      'Clean GitHub codebase history',
      'Ability to join daily async standups'
    ],
    status: 'Open',
    applicantCount: 8
  },
  {
    id: 'OPP-103',
    title: 'AI Data Evaluator & Quality Specialist',
    category: 'Data',
    requiredSkills: ['Data Labeling', 'Accuracy Verification', 'English Fluency', 'JSON'],
    experienceLevel: 'Beginner - Intermediate',
    projectType: 'Part-Time / Flexible Hourly',
    locationEligibility: 'Remote (Kenya)',
    timeCommitment: '10 - 20 hrs/week',
    compensationInfo: 'Verified Hourly Rate',
    deadline: '2026-11-10',
    partnerName: 'Confidential Rodstar AI Partner',
    isConfidential: true,
    description: 'Perform rigorous response benchmarking and fact verification on synthetic dataset outputs.',
    requirements: [
      'Completed Data Specialist training module',
      'High attention to detail (95%+ accuracy rating)',
      'Prompt adherence'
    ],
    status: 'Open',
    applicantCount: 12
  }
]

// --- SEED HIRING PARTNERS ---
export const INITIAL_PARTNERS = [
  {
    id: 'PARTNER-001',
    name: 'Confidential Rodstar AI Partner',
    country: 'United States',
    industry: 'Enterprise AI & Automation',
    opportunityAccess: true,
    isConfidential: true
  },
  {
    id: 'PARTNER-002',
    name: 'TechDev Solutions Ltd',
    country: 'Kenya / United Kingdom',
    industry: 'Software Outsourcing',
    opportunityAccess: true,
    isConfidential: false
  },
  {
    id: 'PARTNER-003',
    name: 'Neural Cloud Labs',
    country: 'Singapore',
    industry: 'FinTech & AI Infrastructure',
    opportunityAccess: true,
    isConfidential: false
  }
]

// --- INITIAL STORE LOADER ---
export function getStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      // Filter out legacy dummy/seed applications & payments
      if (Array.isArray(parsed.applications)) {
        parsed.applications = parsed.applications.filter(a => a.id !== 'RSTAR-77102' && a.id !== 'RSTAR-881923')
      }
      if (Array.isArray(parsed.payments)) {
        parsed.payments = parsed.payments.filter(p => p.transactionRef !== 'RSTAR-PAY-99182' && p.transactionRef !== 'RSTAR-LIVE-PAY-881923')
      }

      // If testing mode is active, ensure existing test applications are unlocked
      if (DISABLE_PAYMENT_FOR_TESTING) {
        if (Array.isArray(parsed.applications)) {
          parsed.applications.forEach(a => {
            if (a.paymentStatus !== 'Paid') {
              a.paymentStatus = 'Paid'
              a.paymentRef = a.paymentRef || 'TEST-WAIVED-1500'
              a.paymentDate = a.paymentDate || new Date().toISOString()
              if (!a.networkStatus || a.networkStatus === 'Training Required' || a.networkStatus === 'Payment Required') {
                a.networkStatus = 'Training Active'
              }
            }
          })
        }
        if (parsed.currentUser && parsed.currentUser.role === 'Freelancer') {
          if (parsed.currentUser.paymentStatus !== 'Paid') {
            parsed.currentUser.paymentStatus = 'Paid'
            parsed.currentUser.paymentRef = parsed.currentUser.paymentRef || 'TEST-WAIVED-1500'
            if (!parsed.currentUser.networkStatus || parsed.currentUser.networkStatus === 'Training Required' || parsed.currentUser.networkStatus === 'Payment Required') {
              parsed.currentUser.networkStatus = 'Training Active'
            }
          }
        }
      }

      return parsed
    }
  } catch (e) {
    console.warn('Failed to load store from localStorage', e)
  }

  const initialStore = {
    applications: [],
    payments: [],
    certificates: [],
    opportunities: INITIAL_OPPORTUNITIES,
    partners: INITIAL_PARTNERS,
    currentUser: null
  }

  saveStore(initialStore)
  return initialStore
}

export function saveStore(store) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store))
  } catch (e) {
    console.error('Failed to save store to localStorage', e)
  }
}

// --- USER & AUTH MANAGEMENT ---
export function getCurrentUser() {
  const store = getStore()
  return store.currentUser
}

export function setCurrentUser(user) {
  const store = getStore()
  store.currentUser = user
  saveStore(store)
  if (user) {
    logAuditEvent(AUDIT_EVENTS.USER_LOGIN, user.id, user.role, { email: user.email })
  } else {
    logAuditEvent(AUDIT_EVENTS.USER_LOGOUT, 'ANONYMOUS', 'GUEST', {})
  }
}

// Quick Demo Login helper for testing different RBAC roles (No seed application injection)
export function loginAsDemoRole(role) {
  const demoUsers = {
    Freelancer: {
      id: 'USER-FL-DEMO',
      name: 'Rodstar Candidate Demo',
      email: 'candidate@rodstar.co.ke',
      role: 'Freelancer',
      country: 'Kenya',
      city: 'Nairobi',
      phone: '+254700000000',
      applicationId: null,
      paymentStatus: 'Pending',
      trainingProgress: 0,
      assessmentCompleted: false,
      assessmentScore: 0,
      networkStatus: 'Training Required'
    },
    Administrator: {
      id: 'ADMIN-001',
      name: 'Rodstar Lead Administrator',
      email: 'admin@rodstar.co.ke',
      role: 'Administrator',
      country: 'Kenya'
    },
    Trainer: {
      id: 'TRAINER-001',
      name: 'Rodstar AI Mentor',
      email: 'trainer@rodstar.co.ke',
      role: 'Trainer',
      country: 'Kenya'
    },
    Recruiter: {
      id: 'RECRUITER-001',
      name: 'Partner Network Recruiter',
      email: 'recruiter@rodstar.co.ke',
      role: 'Recruiter',
      country: 'Kenya'
    }
  }

  const user = demoUsers[role] || demoUsers.Freelancer
  setCurrentUser(user)
  return user
}

// --- APPLICATION CREATION & MANAGEMENT ---
export function submitApplication(appData) {
  const store = getStore()

  const appId = appData.applicationId || 'RSTAR-' + Math.floor(100000 + Math.random() * 900000)
  const userId = appData.firebaseUid || appData.userId || ('USER-' + Date.now().toString().slice(-5))

  const newApp = {
    id: appId,
    userId: userId,
    fullName: appData.fullName,
    email: appData.email,
    phone: appData.phone,
    country: appData.country,
    city: appData.city,
    timeZone: appData.timeZone || 'UTC+3',
    headline: appData.headline || 'Technology Professional',
    experienceLevel: appData.experienceLevel || 'Intermediate',
    yearsOfExperience: appData.yearsOfExperience || '2-4 Years',
    employmentStatus: appData.employmentStatus || 'Freelance',
    education: appData.education || 'Tertiary / Degree',
    certifications: appData.certifications || 'N/A',
    linkedIn: appData.linkedIn || '',
    gitHub: appData.gitHub || '',
    portfolioUrl: appData.portfolioUrl || '',
    primaryPosition: appData.primaryPosition || 'AI Engineer',
    additionalPositions: appData.additionalPositions || [],
    skills: appData.skills || [],
    workPreferences: appData.workPreferences || ['Remote'],
    hoursPerWeek: appData.hoursPerWeek || '20-40 hrs',
    availability: appData.availability || 'Immediate',
    cvFileName: appData.cvFileName || 'uploaded_resume.pdf',
    cvSize: appData.cvSize || '1.2 MB',
    
    paymentStatus: DISABLE_PAYMENT_FOR_TESTING ? 'Paid' : 'Pending', // Pending, Paid, Failed
    paymentRef: DISABLE_PAYMENT_FOR_TESTING ? 'TEST-WAIVED-1500' : null,
    paymentDate: DISABLE_PAYMENT_FOR_TESTING ? new Date().toISOString() : null,

    networkStatus: DISABLE_PAYMENT_FOR_TESTING ? 'Training Active' : 'Training Required', // Application Submitted, Under Review, Training Required, Training Active, Assessment Pending, Verification Pending, Talent Network
    trainingProgress: 0,
    assessmentCompleted: false,
    assessmentScore: 0,
    submittedAt: new Date().toISOString()
  }

  store.applications.unshift(newApp)

  // Create logged user session
  const user = {
    id: userId,
    name: newApp.fullName,
    email: newApp.email,
    role: 'Freelancer',
    country: newApp.country,
    city: newApp.city,
    phone: newApp.phone,
    applicationId: appId,
    paymentStatus: DISABLE_PAYMENT_FOR_TESTING ? 'Paid' : 'Pending',
    paymentRef: DISABLE_PAYMENT_FOR_TESTING ? 'TEST-WAIVED-1500' : null,
    trainingProgress: 0,
    assessmentCompleted: false,
    assessmentScore: 0,
    networkStatus: DISABLE_PAYMENT_FOR_TESTING ? 'Training Active' : 'Training Required'
  }

  store.currentUser = user
  saveStore(store)

  // Real-time synchronization of real user application to Firebase Realtime Database
  if (rtdb) {
    try {
      set(ref(rtdb, 'applications/' + appId), newApp)
      console.log('[Firebase Realtime Database] Real user application saved:', appId)
    } catch (e) {
      console.warn('[Firebase RTDB Sync Warning]:', e.message)
    }
  }

  logAuditEvent(AUDIT_EVENTS.APPLICATION_SUBMITTED, userId, 'Freelancer', {
    applicationId: appId,
    primaryPosition: newApp.primaryPosition,
    email: newApp.email
  })

  return { success: true, application: newApp, user }
}

// --- EMAIL NOTIFICATION DISPATCHER SIMULATOR ---
export function sendApplicationDetailsEmail(applicationId, email) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)
  if (!app) return { success: false, message: 'Application record not found.' }

  const emailPayload = {
    to: email || app.email,
    subject: `[Rodstar AI] Application Details & Access — ID: ${app.id}`,
    applicationId: app.id,
    fullName: app.fullName,
    primaryPosition: app.primaryPosition,
    paymentStatus: app.paymentStatus,
    paymentRef: app.paymentRef || 'Pending',
    dispatchedAt: new Date().toISOString(),
    termsLink: `${window.location.origin}/#/terms/freelancer`
  }

  logAuditEvent('EMAIL_DISPATCHED', app.userId, 'SYSTEM', {
    to: emailPayload.to,
    applicationId: app.id,
    subject: emailPayload.subject
  })

  return {
    success: true,
    message: `Application ID (${app.id}) and complete network onboarding instructions dispatched to ${emailPayload.to}.`,
    payload: emailPayload
  }
}

import { initializePaystackCheckout, verifyPaystackPayment } from './paystackService.js'

// --- PAYSTACK PAYMENT INTEGRATION (KSH 1,500 STANDARD ONBOARDING FEE) ---
export async function processTrainingPayment({ applicationId, paymentMethod, phoneNumber, cardDetails }) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)

  if (!app) {
    return { success: false, message: 'Application record not found.' }
  }

  const REQUIRED_FEE_KSH = 1500

  // Call Paystack Checkout Session Initialization
  const paystackResult = await initializePaystackCheckout({
    amount: REQUIRED_FEE_KSH,
    email: app.email,
    phoneNumber: phoneNumber || app.phone,
    fullName: app.fullName,
    referenceId: app.id
  })

  if (!paystackResult.success) {
    return {
      success: false,
      status: 'FAILED',
      message: paystackResult.message || 'Paystack checkout session could not be initialized.'
    }
  }

  const txRef = paystackResult.transactionRef
  const timestamp = new Date().toISOString()

  return {
    success: true,
    status: 'INITIALIZED',
    message: paystackResult.message,
    transactionRef: txRef,
    authorizationUrl: paystackResult.authorizationUrl,
    accessCode: paystackResult.accessCode,
    amount: REQUIRED_FEE_KSH,
    currency: 'KES',
    timestamp,
    emailSentTo: app.email
  }
}


export function finalizeVerifiedPayment(applicationId, transactionRef) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)

  if (!app) {
    return { success: false, message: 'Application record not found.' }
  }

  const REQUIRED_FEE_KSH = 1500
  const timestamp = new Date().toISOString()
  const cleanRef = transactionRef ? transactionRef.toUpperCase() : ('PAY-' + Date.now())

  const paymentRecord = {
    id: 'PAY-' + Date.now(),
    transactionRef: cleanRef,
    applicationId: app.id,
    applicantName: app.fullName,
    applicantEmail: app.email,
    amount: REQUIRED_FEE_KSH,
    currency: 'KSh',
    paymentProvider: 'Verified M-Pesa Transaction',
    phoneNumber: app.phone,
    status: 'Paid',
    timestamp: timestamp,
    verifiedServerSide: true
  }

  app.paymentStatus = 'Paid'
  app.paymentRef = cleanRef
  app.paymentDate = timestamp
  app.networkStatus = 'Training Active'

  // Deduplicate in store payments
  const existingIdx = store.payments.findIndex(p => p.transactionRef === cleanRef || p.applicationId === app.id)
  if (existingIdx >= 0) {
    store.payments[existingIdx] = paymentRecord
  } else {
    store.payments.unshift(paymentRecord)
  }

  if (store.currentUser && store.currentUser.applicationId === applicationId) {
    store.currentUser.paymentStatus = 'Paid'
    store.currentUser.networkStatus = 'Training Active'
  }

  sendApplicationDetailsEmail(app.id, app.email)
  saveStore(store)

  // Real-time synchronization of verified payment to Firebase Realtime Database
  if (rtdb) {
    try {
      set(ref(rtdb, 'payments/' + cleanRef), paymentRecord)
      update(ref(rtdb, 'applications/' + app.id), {
        paymentStatus: 'Paid',
        paymentRef: cleanRef,
        paymentDate: timestamp,
        networkStatus: 'Training Active'
      })
      console.log('[Firebase Realtime Database] Real verified payment saved:', cleanRef)
    } catch (e) {
      console.warn('[Firebase RTDB Payment Sync Warning]:', e.message)
    }
  }

  logAuditEvent(AUDIT_EVENTS.PAYMENT_SUCCESS, app.userId, 'Freelancer', {
    transactionRef: cleanRef,
    amount: REQUIRED_FEE_KSH,
    currency: 'KSh',
    applicationId: app.id
  })

  return {
    success: true,
    transactionRef: cleanRef,
    amount: REQUIRED_FEE_KSH,
    currency: 'KSh',
    timestamp,
    emailSentTo: app.email
  }
}


// --- TRAINING PROGRESS & ASSESSMENTS ---
export function updateTrainingProgress(applicationId, progressPercent) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)
  if (!app) return

  app.trainingProgress = Math.min(100, Math.max(0, progressPercent))
  if (app.trainingProgress >= 100 && !app.assessmentCompleted) {
    app.networkStatus = 'Assessment Pending'
  }

  if (store.currentUser && store.currentUser.applicationId === applicationId) {
    store.currentUser.trainingProgress = app.trainingProgress
    if (app.trainingProgress >= 100 && !store.currentUser.assessmentCompleted) {
      store.currentUser.networkStatus = 'Assessment Pending'
    }
  }

  saveStore(store)

  // Real-time update to Firebase Realtime Database
  if (rtdb) {
    try {
      update(ref(rtdb, 'applications/' + applicationId), {
        trainingProgress: app.trainingProgress,
        networkStatus: app.networkStatus
      })
    } catch (e) {}
  }
}

export function submitAssessmentResult(applicationId, scorePercentage) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)
  if (!app) return { success: false, message: 'Application not found.' }

  app.assessmentCompleted = true
  app.assessmentScore = scorePercentage

  const passed = scorePercentage >= 80
  let certRecord = null

  if (passed) {
    app.networkStatus = 'Talent Network'
    
    // Issue certificate
    const certId = 'RSTAR-CERT-' + Math.floor(100000 + Math.random() * 900000)
    certRecord = {
      id: certId,
      applicationId: app.id,
      freelancerName: app.fullName,
      trackName: app.primaryPosition,
      issueDate: new Date().toISOString(),
      score: scorePercentage,
      verificationUrl: `${window.location.origin}/#verify/certificate/${certId}`
    }
    store.certificates.push(certRecord)
    
    logAuditEvent(AUDIT_EVENTS.CERTIFICATE_ISSUED, app.userId, 'Freelancer', {
      certificateId: certId,
      trackName: app.primaryPosition
    })
  }

  if (store.currentUser && store.currentUser.applicationId === applicationId) {
    store.currentUser.assessmentCompleted = true
    store.currentUser.assessmentScore = scorePercentage
    if (passed) {
      store.currentUser.networkStatus = 'Talent Network'
    }
  }

  saveStore(store)

  // Real-time update of assessment and certificate to Firebase Realtime Database
  if (rtdb) {
    try {
      update(ref(rtdb, 'applications/' + applicationId), {
        assessmentCompleted: true,
        assessmentScore: scorePercentage,
        networkStatus: app.networkStatus
      })
      if (passed && certRecord) {
        set(ref(rtdb, 'certificates/' + certRecord.id), certRecord)
      }
    } catch (e) {}
  }

  logAuditEvent(AUDIT_EVENTS.ASSESSMENT_COMPLETED, app.userId, 'Freelancer', {
    applicationId: app.id,
    scorePercentage,
    passed
  })

  return {
    success: true,
    passed,
    scorePercentage,
    message: passed
      ? 'Congratulations! You passed the assessment and are now verified in the Rodstar Talent Network.'
      : 'You scored below the 80% passing threshold. Review the training materials and re-attempt.'
  }
}

// --- ADMIN MANAGEMENT APIS ---
export function updateApplicationStatus(applicationId, newStatus) {
  const store = getStore()
  const app = store.applications.find(a => a.id === applicationId)
  if (!app) return false

  const oldStatus = app.networkStatus
  app.networkStatus = newStatus
  saveStore(store)

  logAuditEvent(AUDIT_EVENTS.APPLICATION_STATUS_UPDATED, store.currentUser?.id || 'ADMIN', 'Administrator', {
    applicationId,
    oldStatus,
    newStatus
  })

  return true
}

export function createOpportunity(oppData) {
  const store = getStore()
  const newOpp = {
    id: 'OPP-' + Math.floor(100 + Math.random() * 900),
    title: oppData.title,
    category: oppData.category,
    requiredSkills: oppData.requiredSkills || [],
    experienceLevel: oppData.experienceLevel || 'Intermediate',
    projectType: oppData.projectType || 'Remote Contract',
    locationEligibility: oppData.locationEligibility || 'Remote',
    timeCommitment: oppData.timeCommitment || 'Full-time / Part-time',
    compensationInfo: oppData.compensationInfo || 'Market Competitive',
    deadline: oppData.deadline || '2026-12-31',
    partnerName: oppData.isConfidential ? 'Confidential Rodstar AI Partner' : (oppData.partnerName || 'Rodstar Partner'),
    isConfidential: !!oppData.isConfidential,
    description: oppData.description,
    requirements: oppData.requirements || [],
    status: 'Open',
    applicantCount: 0
  }

  store.opportunities.unshift(newOpp)
  saveStore(store)

  logAuditEvent(AUDIT_EVENTS.OPPORTUNITY_CREATED, store.currentUser?.id || 'ADMIN', 'Administrator', {
    opportunityId: newOpp.id,
    title: newOpp.title
  })

  return newOpp
}
