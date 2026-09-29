import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAcOlc2fiXneXRSmf5ece-GwRfi_TSi3Q",
  authDomain: "rodstarfreelancers.firebaseapp.com",
  databaseURL: "https://rodstarfreelancers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rodstarfreelancers",
  storageBucket: "rodstarfreelancers.firebasestorage.app",
  messagingSenderId: "926072923215",
  appId: "1:926072923215:web:fbde6ba23da6676526763a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const timestamp = new Date().toISOString();

console.log("==================================================");
console.log("🔥 Initializing Rodstar AI Firebase Database Schema Sync...");
console.log("Database URL:", firebaseConfig.databaseURL);
console.log("==================================================");

// Complete Database Schema & Seed Data
const databaseSchema = {
  // 1. System Metadata & Config
  system: {
    name: "Rodstar AI Freelancer Network",
    version: "2.5.0",
    environment: "production",
    lastSchemaUpdate: timestamp,
    status: "Online",
    paymentGateway: {
      provider: "Paystack",
      currency: "KES",
      onboardingFee: 1,
      mode: "Live",
      bypassStrictlyForbidden: true
    },
    authProvider: "Firebase Authentication"
  },

  // 2. Roles & Access Control (RBAC)
  roles: {
    freelancer: {
      name: "Freelancer",
      description: "Qualified candidate with access to training, assessments, and verified opportunities."
    },
    administrator: {
      name: "Administrator",
      description: "Platform supervisor with candidate vetting, payment verification, and opportunity management privileges."
    },
    recruiter: {
      name: "Recruiter",
      description: "Enterprise partner reviewing qualified talent portfolios and contract applicants."
    }
  },

  // 3. Career Categories (9 Pillars)
  categories: [
    "AI & Machine Learning",
    "Software Engineering",
    "Data & Analytics",
    "Design & Product",
    "IT & Infrastructure",
    "Digital & Growth",
    "Project & Delivery",
    "AI Training & Education",
    "Specialized / Emerging Tech"
  ],

  // 4. Training Courses & Modules
  courses: {
    "CRS-AI-101": {
      id: "CRS-AI-101",
      title: "Enterprise AI Integration & RAG Architectures",
      category: "AI & Machine Learning",
      description: "Comprehensive training on Retrieval-Augmented Generation, vector databases (Pinecone, Chroma), fine-tuning models, and deploying production AI microservices.",
      duration: "3 Weeks",
      passScore: 80,
      status: "Active",
      modules: [
        { id: "MOD-101", title: "Advanced Prompt Engineering & System Directives", duration: "45 mins" },
        { id: "MOD-102", title: "Building Scalable RAG Pipelines with Embeddings", duration: "60 mins" },
        { id: "MOD-103", title: "Autonomous Multi-Agent Tool Calling (CrewAI & LangChain)", duration: "90 mins" }
      ],
      createdAt: timestamp
    },
    "CRS-DEV-201": {
      id: "CRS-DEV-201",
      title: "Production Full-Stack Architecture & Security Protocols",
      category: "Software Engineering",
      description: "Modern web application development with responsive glassmorphism UI, Node.js Express microservices, Paystack payment webhooks, and cybersecurity defense.",
      duration: "4 Weeks",
      passScore: 80,
      status: "Active",
      modules: [
        { id: "MOD-201", title: "RESTful & Realtime Architecture with Firebase", duration: "50 mins" },
        { id: "MOD-202", title: "Cybersecurity Defenses: Injection, Replay Attacks & Rate Limiting", duration: "65 mins" },
        { id: "MOD-203", title: "Automated Deployment & Production Bundle Optimization", duration: "75 mins" }
      ],
      createdAt: timestamp
    },
    "CRS-DATA-301": {
      id: "CRS-DATA-301",
      title: "Modern Data Engineering & Pipeline Automation",
      category: "Data & Analytics",
      description: "Hands-on pipeline orchestration, automated ETL, and data curation for enterprise model training.",
      duration: "3 Weeks",
      passScore: 80,
      status: "Active",
      modules: [
        { id: "MOD-301", title: "Data Ingestion & Cleaning Workflows", duration: "45 mins" },
        { id: "MOD-302", title: "ETL Pipelines with Python & SQL", duration: "60 mins" },
        { id: "MOD-303", title: "Data Quality Auditing & Schema Validation", duration: "60 mins" }
      ],
      createdAt: timestamp
    }
  },

  // 5. Client Opportunities & Contracts
  opportunities: {
    "OPP-8091": {
      id: "OPP-8091",
      title: "Senior Full Stack AI Developer (Remote Contract)",
      category: "Software Engineering",
      experienceLevel: "Senior (5+ yrs)",
      compensation: "$3,500 - $5,500 / month",
      commitment: "Full Time (40 hrs/week)",
      location: "Remote (Worldwide / East Africa)",
      deadline: "2026-10-15",
      status: "Open",
      description: "Lead enterprise client full-stack application development integrating generative AI microservices and cloud databases.",
      requirements: [
        "Strong experience in JavaScript (ES6+), React/Vite, Node.js, and Express",
        "Expertise in Firebase Realtime Database & cloud authentication",
        "Proven background integrating third-party payment gateways (Paystack)"
      ],
      applicantCount: 16,
      createdAt: timestamp
    },
    "OPP-8092": {
      id: "OPP-8092",
      title: "LLM Fine-Tuning & Data Annotation Lead",
      category: "AI & Machine Learning",
      experienceLevel: "Intermediate to Senior",
      compensation: "$30 - $45 / hour",
      commitment: "Part Time (20 hrs/week)",
      location: "Remote (Kenya / Global)",
      deadline: "2026-10-20",
      status: "Open",
      description: "Manage RLHF annotation pipelines, evaluate model benchmarking datasets, and fine-tune domain-specific Llama 3 models.",
      requirements: [
        "Proficiency in Python data workflows and LLM evaluation",
        "Familiarity with RLHF, human preference scoring, and prompt engineering"
      ],
      applicantCount: 11,
      createdAt: timestamp
    },
    "OPP-8093": {
      id: "OPP-8093",
      title: "AI Security & Adversarial Red-Team Auditor",
      category: "Specialized / Emerging Tech",
      experienceLevel: "Senior",
      compensation: "$4,000 - $6,000 / month",
      commitment: "Full Time (40 hrs/week)",
      location: "Remote",
      deadline: "2026-10-25",
      status: "Open",
      description: "Conduct security auditing on production AI agents, prompt injection vulnerabilities, and API endpoints.",
      requirements: [
        "Cybersecurity expertise in web application penetration testing",
        "Experience auditing LLM system prompts against adversarial jailbreaks"
      ],
      applicantCount: 8,
      createdAt: timestamp
    }
  },

  // 6. Users Schema & Profiles
  users: {
    "USR-ADMIN-001": {
      userId: "USR-ADMIN-001",
      fullName: "Rodstar Platform Administrator",
      email: "admin@rodstar.co.ke",
      role: "Administrator",
      phone: "+254700000000",
      country: "Kenya",
      city: "Nairobi",
      isVerified: true,
      createdAt: timestamp
    },
    "USR-DEMO-002": {
      userId: "USR-DEMO-002",
      fullName: "Alex Rodney Mwangi",
      email: "candidate@rodstar.co.ke",
      role: "Freelancer",
      phone: "+254712345678",
      country: "Kenya",
      city: "Nairobi",
      applicationId: "RSTAR-881923",
      isVerified: true,
      createdAt: timestamp
    }
  },

  // 7. Applications Schema
  applications: {
    "RSTAR-881923": {
      id: "RSTAR-881923",
      userId: "USR-DEMO-002",
      fullName: "Alex Rodney Mwangi",
      email: "candidate@rodstar.co.ke",
      phone: "+254712345678",
      country: "Kenya",
      city: "Nairobi",
      timeZone: "UTC+3",
      headline: "Senior Full-Stack AI Engineer",
      experienceLevel: "Intermediate - Advanced",
      yearsOfExperience: "3-5 Years",
      employmentStatus: "Freelance / Open to Work",
      education: "BSc Computer Science",
      primaryPosition: "AI Engineer",
      additionalPositions: ["Generative AI Engineer", "AI Agent Developer"],
      skills: ["Python", "JavaScript", "React", "Node.js", "Firebase", "Paystack"],
      workPreferences: ["Remote", "Freelance"],
      hoursPerWeek: "20-40 hrs/week",
      availability: "Immediate",
      cvFileName: "rodstar_talent_resume.pdf",
      cvSize: "1.2 MB",
      paymentStatus: "Verified",
      paymentRef: "RSTAR-LIVE-PAY-881923",
      paymentDate: timestamp,
      networkStatus: "Talent Network",
      trainingProgress: 100,
      assessmentCompleted: true,
      assessmentScore: 92,
      submittedAt: timestamp
    }
  },

  // 8. Payments Schema (Strict Zero-Bypass)
  payments: {
    "RSTAR-LIVE-PAY-881923": {
      transactionRef: "RSTAR-LIVE-PAY-881923",
      applicationId: "RSTAR-881923",
      email: "candidate@rodstar.co.ke",
      amount: 1,
      currency: "KES",
      gateway: "Paystack",
      status: "Verified",
      verifiedAt: timestamp,
      securityCheck: "Zero-Bypass Cryptographic Verification Passed"
    }
  },

  // 9. Verified Certificates
  certificates: {
    "CERT-AI-881923": {
      certificateId: "CERT-AI-881923",
      recipientName: "Alex Rodney Mwangi",
      trackName: "Enterprise AI Integration & RAG Architectures",
      issueDate: "2026-09-24",
      verifyHash: "0x8f2a1b9c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      status: "Active & Publicly Verifiable"
    }
  },

  // 10. Realtime Aggregated Metrics
  metrics: {
    totalTalentRegistered: 1,
    activeApplications: 1,
    verifiedPayments: 1,
    totalOpportunities: 3,
    activeTrainingModules: 9,
    lastCalculated: timestamp
  }
};

async function syncSchemaToFirebase() {
  try {
    console.log("→ Uploading schema tree to Firebase Realtime Database...");
    
    // Write the complete schema to the root database node
    await set(ref(db), databaseSchema);

    console.log("==================================================");
    console.log("✅ All schemas and collections successfully updated to Firebase!");
    console.log("   • /system (metadata, Paystack settings, auth config)");
    console.log("   • /roles (Freelancer, Administrator, Recruiter)");
    console.log("   • /categories (9 career tracks)");
    console.log("   • /courses (training curriculum & modules)");
    console.log("   • /opportunities (marketplace client contracts)");
    console.log("   • /users (profiles & credentials)");
    console.log("   • /applications (candidate records & status)");
    console.log("   • /payments (verified transactions)");
    console.log("   • /certificates (verifiable digital credentials)");
    console.log("   • /metrics (live counter statistics)");
    console.log("==================================================");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to update schema to Firebase:", error);
    process.exit(1);
  }
}

syncSchemaToFirebase();
