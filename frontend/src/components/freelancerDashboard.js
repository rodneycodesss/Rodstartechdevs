import './styles/freelancer.css'
import {
  getCurrentUser,
  loginAsDemoRole,
  getStore,
  TRAINING_COURSES,
  ASSESSMENTS_BANK,
  updateTrainingProgress,
  submitAssessmentResult,
  processTrainingPayment,
  finalizeVerifiedPayment,
  DISABLE_PAYMENT_FOR_TESTING
} from '../services/freelancerStore.js'
import { verifyPaystackPayment } from '../services/paystackService.js'

export function setupFreelancerDashboard() {
  const container = document.querySelector('#freelancer-dashboard-container')
  if (!container) return

  // Ensure user is logged in (auto demo login if guest)
  let user = getCurrentUser()
  if (!user || user.role !== 'Freelancer') {
    user = loginAsDemoRole('Freelancer')
  }

  let activeTab = 'overview' // overview, training, assessment, opportunities, certificate
  let activeQuiz = null
  let quizAnswers = {}
  let quizResult = null

  // Payment Activation State (Step 1 in Portal)
  let paymentState = {
    phone: '',
    paystackInitialized: false,
    authorizationUrl: '',
    paymentRef: null,
    loading: false,
    verifying: false,
    errorMessage: '',
    successMessage: ''
  }

  function render() {
    const store = getStore()
    const application = store.applications.find(a => a.id === user.applicationId) || {
      id: user.applicationId || 'RSTAR-PENDING',
      primaryPosition: 'AI Engineer',
      paymentStatus: (DISABLE_PAYMENT_FOR_TESTING || user.paymentStatus === 'Paid') ? 'Paid' : 'Pending',
      paymentRef: user.paymentRef || (DISABLE_PAYMENT_FOR_TESTING ? 'TEST-WAIVED-1500' : null),
      networkStatus: (DISABLE_PAYMENT_FOR_TESTING || user.paymentStatus === 'Paid') ? 'Training Active' : 'Payment Required',
      trainingProgress: user.trainingProgress || 0,
      assessmentCompleted: user.assessmentCompleted || false,
      assessmentScore: user.assessmentScore || 0
    }

    const isPaid = DISABLE_PAYMENT_FOR_TESTING || application.paymentStatus === 'Paid'
    const certificates = store.certificates.filter(c => c.applicationId === application.id)
    const latestCert = certificates.length > 0 ? certificates[certificates.length - 1] : null

    container.innerHTML = `
      <div class="section container">
        <!-- HEADER PROFILE SUMMARY -->
        <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem; border-color: ${isPaid ? 'rgba(0, 212, 255, 0.3)' : '#FFBD2E'} !important;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div class="ai-badge-pill" style="margin-bottom: 0.5rem;">
                <span class="pulse-dot"></span> Freelancer Network Portal
              </div>
              <h1 style="font-size: 2rem; font-weight: 800; color: #ffffff;">Welcome, ${user.name}</h1>
              <p style="font-size: 0.9rem; color: var(--text-light);">
                Primary Track: <strong style="color: #00D4FF;">${application.primaryPosition}</strong> | Application ID: <span style="font-family: monospace;">${application.id}</span>
              </p>
            </div>

            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; align-items: center;">
              <span class="status-badge ${getNetworkStatusClass(application.networkStatus)}">
                ${application.networkStatus}
              </span>
              <a href="#/freelancer/login" class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.82rem; min-height: 36px;">
                Switch Account
              </a>
            </div>
          </div>
        </div>

        <!-- STATS OVERVIEW CARDS -->
        <div class="dashboard-grid">
          <div class="dash-card glass-panel">
            <span style="font-size: 0.82rem; color: var(--text-light); text-transform: uppercase;">Step 1: Membership Activation</span>
            <div class="dash-card-val" style="font-size: 1.3rem; color: #27C93F; margin: 0.4rem 0;">
              ${DISABLE_PAYMENT_FOR_TESTING ? '✓ Bypassed (Testing)' : (isPaid ? '✓ Active (Paid)' : 'Action Required (KSh 1,500)')}
            </div>
            <span style="font-size: 0.78rem; color: ${isPaid ? '#27C93F' : 'var(--text-light)'};">
              ${DISABLE_PAYMENT_FOR_TESTING ? 'KSh 1,500 Fee Waived for Testing' : (isPaid ? 'Fee Verified via Paystack' : 'Required to unlock portal tracks')}
            </span>
          </div>

          <div class="dash-card glass-panel" style="${!isPaid ? 'opacity: 0.6;' : ''}">
            <span style="font-size: 0.82rem; color: var(--text-light); text-transform: uppercase;">Step 2: Training Progress</span>
            <div class="dash-card-val">${isPaid ? `${application.trainingProgress}%` : '🔒 Locked'}</div>
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${isPaid ? application.trainingProgress : 0}%;"></div>
            </div>
          </div>

          <div class="dash-card glass-panel" style="${!isPaid ? 'opacity: 0.6;' : ''}">
            <span style="font-size: 0.82rem; color: var(--text-light); text-transform: uppercase;">Step 3: Assessment</span>
            <div class="dash-card-val" style="font-size: 1.3rem; color: ${isPaid ? (application.assessmentCompleted ? '#27C93F' : '#FFBD2E') : 'var(--text-light)'};">
              ${isPaid ? (application.assessmentCompleted ? `Passed (${application.assessmentScore}%)` : 'Pending') : '🔒 Locked'}
            </div>
            <span style="font-size: 0.78rem; color: var(--text-light);">${isPaid ? 'Pass Threshold: 80%' : 'Unlocks after training'}</span>
          </div>

          <div class="dash-card glass-panel" style="${!isPaid ? 'opacity: 0.6;' : ''}">
            <span style="font-size: 0.82rem; color: var(--text-light); text-transform: uppercase;">Step 4: Network Access</span>
            <div class="dash-card-val" style="font-size: 1.25rem; color: #00D4FF;">
              ${isPaid ? application.networkStatus : '🔒 Inactive'}
            </div>
            <span style="font-size: 0.78rem; color: var(--text-light);">${isPaid ? 'Partner Match Enabled' : 'Activate in Step 1'}</span>
          </div>
        </div>

        <!-- DASHBOARD NAVIGATION TABS -->
        <div class="track-filter-bar" style="margin-bottom: 2rem;">
          <button type="button" class="track-filter-btn ${activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
            📌 Overview & Step 1 Activation
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'training' ? 'active' : ''}" data-tab="training">
            📚 Training Hub ${!isPaid ? '🔒' : `(${application.trainingProgress}%)`}
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'assessment' ? 'active' : ''}" data-tab="assessment">
            📝 Skill Assessments ${!isPaid ? '🔒' : ''}
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'opportunities' ? 'active' : ''}" data-tab="opportunities">
            💼 Verified Opportunities ${!isPaid ? '🔒' : `(${store.opportunities.length})`}
          </button>
          <button type="button" class="track-filter-btn ${activeTab === 'certificate' ? 'active' : ''}" data-tab="certificate">
            🎓 Certificate ${!isPaid ? '🔒' : ''}
          </button>
        </div>

        <!-- TAB CONTENT AREA -->
        <div class="glass-panel" style="padding: 2.2rem;">
          ${renderTabContent(application, store, latestCert, isPaid)}
        </div>
      </div>
    `

    attachEvents(application)
  }

  function getNetworkStatusClass(status) {
    if (status === 'Talent Network') return 'status-opportunities'
    if (status === 'Training Active') return 'status-training'
    if (status === 'Assessment Pending') return 'status-talent'
    return 'status-soon'
  }

  function renderLockedSection(sectionName) {
    return `
      <div style="text-align: center; padding: 3rem 1.5rem;">
        <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(255, 189, 46, 0.15); border: 2px solid #FFBD2E; color: #FFBD2E; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
          🔒
        </div>
        <h3 style="color: #ffffff; font-size: 1.5rem; margin-bottom: 0.6rem;">${sectionName} Locked</h3>
        <p style="color: var(--text-light); max-width: 520px; margin: 0 auto 1.8rem; font-size: 0.95rem; line-height: 1.6;">
          Complete <strong>Step 1: Membership Activation & Onboarding Fee (KSh 1,500)</strong> in the Overview tab to unlock role training modules, assessments, and client contract opportunities.
        </p>
        <button type="button" class="btn btn-primary switch-tab-btn" data-target="overview" style="padding: 0.8rem 2rem;">
          Go to Step 1: Membership Activation ➔
        </button>
      </div>
    `
  }

  function renderTabContent(application, store, latestCert, isPaid) {
    if (activeTab === 'overview') {
      return `
        <!-- STEP 1 STATUS: TESTING MODE WAIVED BANNER OR LIVE PAYMENT GATEWAY -->
        ${DISABLE_PAYMENT_FOR_TESTING ? `
          <div style="background: rgba(0, 212, 255, 0.08); border: 2px solid #00D4FF; border-radius: 16px; padding: 1.8rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
              <div>
                <span class="ai-badge-pill" style="background: rgba(39, 201, 63, 0.2); color: #27C93F; border-color: rgba(39, 201, 63, 0.4); margin-bottom: 0.5rem;">
                  🧪 Testing Mode Active • Fee Bypassed
                </span>
                <h2 style="color: #ffffff; font-size: 1.5rem; margin: 0.3rem 0;">
                  All Portal Modules & Tracks Unlocked for Testing
                </h2>
                <p style="color: var(--text-light); font-size: 0.9rem; max-width: 600px;">
                  The standard <strong>KSh 1,500</strong> onboarding fee is automatically waived in this testing environment. You have full access to interactive LMS courses, role verification quizzes, certificates, and partner opportunities.
                </p>
              </div>

              <div style="text-align: right;">
                <div style="font-size: 1.8rem; font-weight: 800; color: #00D4FF; text-decoration: line-through; opacity: 0.65;">KSh 1,500</div>
                <span style="font-size: 0.85rem; color: #27C93F; font-weight: 700;">Waived (Testing Mode)</span>
              </div>
            </div>

            <!-- Optional Test Checkout Drawer for Testers -->
            <details style="margin-top: 1rem; padding: 0.8rem 1.2rem; background: rgba(6, 13, 30, 0.6); border: 1px dashed rgba(0, 212, 255, 0.4); border-radius: 10px;">
              <summary style="color: #00D4FF; font-size: 0.88rem; cursor: pointer; font-weight: 600;">
                ⚙️ Optional: Test Live Paystack Gateway (KSh 1,500)
              </summary>
              <div style="margin-top: 1rem; display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 240px;">
                  <label style="display: block; font-size: 0.82rem; color: var(--text-light); margin-bottom: 0.3rem;">
                    M-Pesa / Tester Phone
                  </label>
                  <input type="tel" id="input-portal-phone" value="${paymentState.phone || user.phone || ''}" placeholder="0712345678" style="width: 100%;">
                </div>
                <button type="button" class="btn btn-primary" id="btn-portal-launch-payment" style="font-size: 0.9rem; padding: 0.65rem 1.4rem;">
                  ${paymentState.loading ? '⏳ Launching...' : '🔒 Launch Paystack Checkout (KSh 1,500)'}
                </button>
              </div>

              ${paymentState.errorMessage ? `
                <div style="padding: 0.6rem 0.8rem; border-radius: 6px; background: rgba(255, 77, 77, 0.15); border: 1px solid #FF4D4D; color: #FF4D4D; font-size: 0.85rem; margin-top: 0.8rem;">
                  ${paymentState.errorMessage}
                </div>
              ` : ''}

              ${paymentState.successMessage ? `
                <div style="padding: 0.6rem 0.8rem; border-radius: 6px; background: rgba(39, 201, 63, 0.15); border: 1px solid #27C93F; color: #27C93F; font-size: 0.85rem; margin-top: 0.8rem;">
                  ${paymentState.successMessage}
                </div>
              ` : ''}

              ${paymentState.paystackInitialized ? `
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(10, 22, 51, 0.9); border-radius: 8px;">
                  <p style="font-size: 0.85rem; color: #ffffff; margin-bottom: 0.8rem;">
                    Paystack Ref: <strong style="color: #00D4FF;">${paymentState.paymentRef}</strong>
                  </p>
                  <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                    <a href="${paymentState.authorizationUrl}" target="_blank" class="btn btn-primary" style="font-size: 0.85rem;">
                      🚀 Open Paystack Checkout (KSh 1,500) ➔
                    </a>
                    <button type="button" class="btn btn-outline" id="btn-portal-verify-payment" style="border-color: #27C93F; color: #27C93F; font-size: 0.85rem;">
                      ${paymentState.verifying ? '⏳ Verifying...' : '✅ Verify Payment'}
                    </button>
                  </div>
                </div>
              ` : ''}
            </details>
          </div>
        ` : (!isPaid ? `
          <div style="background: rgba(0, 212, 255, 0.08); border: 2px solid #00D4FF; border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.2rem;">
              <div>
                <span class="ai-badge-pill" style="background: rgba(255, 189, 46, 0.2); color: #FFBD2E; border-color: rgba(255, 189, 46, 0.4); margin-bottom: 0.5rem;">
                  Step 1 Required • Portal Activation
                </span>
                <h2 style="color: #ffffff; font-size: 1.6rem; margin: 0.3rem 0;">
                  Activate Membership & Onboarding Fee
                </h2>
                <p style="color: var(--text-light); font-size: 0.9rem; max-width: 560px;">
                  Complete this one-time fee to unlock your AI training curriculum, verification assessments, and remote client opportunities.
                </p>
              </div>

              <div style="text-align: right;">
                <div style="font-size: 2.2rem; font-weight: 800; color: #00D4FF;">KSh 1,500</div>
                <span style="font-size: 0.8rem; color: #27C93F;">Zero-Bypass Paystack Live Gateway</span>
              </div>
            </div>

            ${paymentState.errorMessage ? `
              <div style="padding: 0.8rem 1rem; border-radius: 8px; background: rgba(255, 77, 77, 0.15); border: 1px solid #FF4D4D; color: #FF4D4D; font-size: 0.88rem; margin-bottom: 1rem;">
                ${paymentState.errorMessage}
              </div>
            ` : ''}

            ${paymentState.successMessage ? `
              <div style="padding: 0.8rem 1rem; border-radius: 8px; background: rgba(39, 201, 63, 0.15); border: 1px solid #27C93F; color: #27C93F; font-size: 0.88rem; margin-bottom: 1rem;">
                ${paymentState.successMessage}
              </div>
            ` : ''}

            ${paymentState.paystackInitialized ? `
              <div style="background: rgba(6, 13, 30, 0.9); border: 1px solid #00D4FF; border-radius: 12px; padding: 1.8rem; text-align: center;">
                <div style="font-size: 1.1rem; color: #ffffff; margin-bottom: 0.5rem;">
                  Paystack Checkout Session Ready
                </div>
                <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 1.5rem;">
                  Transaction Reference: <strong style="color: #00D4FF; font-family: monospace;">${paymentState.paymentRef}</strong>.
                  Complete the payment in the Paystack window using M-Pesa or Card, then verify below.
                </p>

                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                  <a href="${paymentState.authorizationUrl}" target="_blank" class="btn btn-primary" style="font-weight: 700;">
                    🚀 Open Paystack Checkout (KSh 1,500) ➔
                  </a>
                  <button type="button" class="btn btn-outline" id="btn-portal-verify-payment" style="border-color: #27C93F; color: #27C93F;">
                    ${paymentState.verifying ? '⏳ Verifying with Paystack...' : '✅ Verify Completed Payment'}
                  </button>
                </div>
              </div>
            ` : `
              <div style="display: flex; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 260px;">
                  <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">
                    M-Pesa / Contact Phone Number *
                  </label>
                  <input type="tel" id="input-portal-phone" value="${paymentState.phone || user.phone || ''}" placeholder="0712345678" style="width: 100%;">
                </div>
                <button type="button" class="btn btn-primary" id="btn-portal-launch-payment" style="font-size: 1rem; padding: 0.85rem 1.8rem;">
                  ${paymentState.loading ? '⏳ Launching Paystack Checkout...' : '🔒 Launch Paystack Checkout (KSh 1,500)'}
                </button>
              </div>
            `}
          </div>
        ` : `
          <!-- ACTIVE MEMBERSHIP BADGE IF PAID -->
          <div style="background: rgba(39, 201, 63, 0.1); border: 1px solid #27C93F; border-radius: 12px; padding: 1.2rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.8rem;">
              <span style="font-size: 1.5rem; color: #27C93F;">✓</span>
              <div>
                <strong style="color: #ffffff; display: block;">Step 1: Membership Activated & Fee Verified</strong>
                <span style="font-size: 0.85rem; color: var(--text-light);">
                  Paystack Reference: <code style="color: #27C93F;">${application.paymentRef || 'Verified'}</code> | All training modules and career tracks unlocked.
                </span>
              </div>
            </div>
            <span class="status-badge status-opportunities">Paid & Verified</span>
          </div>
        `)}

        <h3 style="font-size: 1.3rem; color: #00D4FF; margin-bottom: 1.2rem;">Freelancer Onboarding Steps</h3>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <!-- STEP 1: PAYMENT ACTIVATION -->
          <div style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(6, 13, 30, 0.6); border: 1px solid ${isPaid ? '#27C93F' : '#FFBD2E'}; border-radius: 12px;">
            <div style="font-size: 1.5rem; color: ${isPaid ? '#27C93F' : '#FFBD2E'};">${isPaid ? '✓' : '1'}</div>
            <div style="flex: 1;">
              <strong style="color: #ffffff; display: block;">Step 1: Membership Activation (KSh 1,500 Onboarding Fee)</strong>
              <span style="font-size: 0.85rem; color: var(--text-light);">
                ${DISABLE_PAYMENT_FOR_TESTING ? 'Waived for testing — all training modules & tracks unlocked' : (isPaid ? `Verified via Paystack (${application.paymentRef || 'Paid'})` : 'Required to unlock training modules and client marketplace')}
              </span>
            </div>
            <span class="status-badge ${isPaid ? 'status-opportunities' : 'status-soon'}">${DISABLE_PAYMENT_FOR_TESTING ? 'Bypassed (Test)' : (isPaid ? 'Completed' : 'Action Required')}</span>
          </div>

          <!-- STEP 2: TRAINING -->
          <div style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(6, 13, 30, 0.6); border: 1px solid ${isPaid ? (application.trainingProgress >= 100 ? '#27C93F' : '#00D4FF') : 'var(--card-border)'}; border-radius: 12px; ${!isPaid ? 'opacity: 0.65;' : ''}">
            <div style="font-size: 1.5rem; color: ${isPaid ? '#00D4FF' : 'var(--text-light)'};">📖</div>
            <div style="flex: 1;">
              <strong style="color: #ffffff; display: block;">Step 2: Role-Specific Rodstar AI Training</strong>
              <span style="font-size: 0.85rem; color: var(--text-light);">
                ${isPaid ? `Current completion: ${application.trainingProgress}%` : 'Locked — Complete Step 1 to unlock'}
              </span>
            </div>
            ${isPaid ? `
              <button type="button" class="btn btn-outline switch-tab-btn" data-target="training" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">
                Open Training ➔
              </button>
            ` : `<span style="font-size: 0.8rem; color: var(--text-light);">🔒 Locked</span>`}
          </div>

          <!-- STEP 3: ASSESSMENT -->
          <div style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(6, 13, 30, 0.6); border: 1px solid ${isPaid && application.assessmentCompleted ? '#27C93F' : 'var(--card-border)'}; border-radius: 12px; ${!isPaid ? 'opacity: 0.65;' : ''}">
            <div style="font-size: 1.5rem; color: #FFBD2E;">✍️</div>
            <div style="flex: 1;">
              <strong style="color: #ffffff; display: block;">Step 3: Skill Assessment & Verification Exam</strong>
              <span style="font-size: 0.85rem; color: var(--text-light);">
                ${isPaid ? (application.assessmentCompleted ? `Passed (${application.assessmentScore}%)` : 'Complete training to take the 80% passing exam') : 'Locked until Step 1 activation'}
              </span>
            </div>
            ${isPaid ? `
              <button type="button" class="btn btn-outline switch-tab-btn" data-target="assessment" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">
                View Assessment ➔
              </button>
            ` : `<span style="font-size: 0.8rem; color: var(--text-light);">🔒 Locked</span>`}
          </div>

          <!-- STEP 4: OPPORTUNITIES -->
          <div style="display: flex; align-items: center; gap: 1rem; padding: 1.2rem; background: rgba(6, 13, 30, 0.6); border: 1px solid var(--card-border); border-radius: 12px; ${!isPaid ? 'opacity: 0.65;' : ''}">
            <div style="font-size: 1.5rem; color: #00D4FF;">💼</div>
            <div style="flex: 1;">
              <strong style="color: #ffffff; display: block;">Step 4: Access Verified Partner Remote Opportunities</strong>
              <span style="font-size: 0.85rem; color: var(--text-light);">
                ${isPaid ? 'Browse and apply for client AI & engineering contracts' : 'Locked until Step 1 activation'}
              </span>
            </div>
            ${isPaid ? `
              <button type="button" class="btn btn-outline switch-tab-btn" data-target="opportunities" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">
                Browse Jobs ➔
              </button>
            ` : `<span style="font-size: 0.8rem; color: var(--text-light);">🔒 Locked</span>`}
          </div>
        </div>
      `
    }

    if (activeTab === 'training') {
      if (!isPaid) return renderLockedSection('Training Curriculum')

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 0.5rem;">Rodstar AI Learning Management System</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.8rem;">
          Complete all interactive modules to reach 100% training progress and unlock your verified assessment.
        </p>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${TRAINING_COURSES.map(course => `
            <div style="background: rgba(6, 13, 30, 0.7); border: 1px solid var(--card-border); border-radius: 16px; padding: 1.8rem;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <span class="position-category-badge">${course.category}</span>
                  <h4 style="font-size: 1.2rem; color: #ffffff; font-weight: 700; margin-top: 0.3rem;">${course.title}</h4>
                  <p style="font-size: 0.85rem; color: var(--text-light); margin-top: 0.2rem;">${course.description}</p>
                </div>
                <span style="font-size: 0.8rem; color: #00D4FF; font-family: monospace;">Duration: ${course.estimatedDuration}</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.2rem;">
                ${course.modules.map(mod => `
                  <div style="padding: 1.2rem; background: rgba(10, 22, 51, 0.8); border: 1px solid rgba(0, 119, 255, 0.2); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                      <strong style="color: #ffffff; display: block;">${mod.title}</strong>
                      <p style="font-size: 0.82rem; color: var(--text-light); margin-top: 0.2rem;">${mod.summary}</p>
                    </div>
                    <button type="button" class="btn btn-primary complete-mod-btn" data-app-id="${application.id}" style="padding: 0.35rem 0.9rem; font-size: 0.8rem; min-height: 34px;">
                      ▶ Watch / Mark Complete
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `
    }

    if (activeTab === 'assessment') {
      if (!isPaid) return renderLockedSection('Skill Assessments')

      if (activeQuiz) {
        return renderActiveQuiz(activeQuiz)
      }

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 0.5rem;">Role Skill Assessments</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.8rem;">
          Passing score requirement: <strong>80% or higher</strong> to become verified in the Rodstar Talent Network.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          ${ASSESSMENTS_BANK.map(assess => `
            <div style="background: rgba(6, 13, 30, 0.7); border: 1px solid var(--card-border); border-radius: 16px; padding: 1.8rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="position-category-badge">${assess.trackCategory}</span>
                <h4 style="font-size: 1.15rem; color: #ffffff; font-weight: 700; margin: 0.4rem 0;">${assess.title}</h4>
                <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1rem;">
                  Time limit: ${assess.timeLimitMinutes} Mins | Questions: ${assess.questions.length} | Pass score: ${assess.passingScorePercentage}%
                </p>
              </div>

              <div>
                ${application.assessmentCompleted ? `
                  <div style="background: rgba(39, 201, 63, 0.15); border: 1px solid #27C93F; border-radius: 8px; padding: 0.8rem; text-align: center; margin-bottom: 1rem; color: #27C93F; font-size: 0.9rem;">
                    ✓ Completed — Score: ${application.assessmentScore}%
                  </div>
                ` : `
                  <button type="button" class="btn btn-primary start-quiz-btn" data-quiz-id="${assess.id}" style="width: 100%;">
                    ✍️ Take Assessment Quiz
                  </button>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      `
    }

    if (activeTab === 'opportunities') {
      if (!isPaid) return renderLockedSection('Partner Opportunities')

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 0.5rem;">Active Client Engagements & Opportunities</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.8rem;">
          Qualified candidates in the Rodstar Talent Network are directly matched with client partner contracts.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${store.opportunities.map(opp => `
            <div style="background: rgba(6, 13, 30, 0.7); border: 1px solid var(--card-border); border-radius: 16px; padding: 1.8rem;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
                <div>
                  <span class="position-category-badge">${opp.category}</span>
                  <h4 style="font-size: 1.25rem; color: #ffffff; font-weight: 700; margin: 0.3rem 0;">${opp.title}</h4>
                  <span style="font-size: 0.85rem; color: #00D4FF;">Compensation: <strong>${opp.compensationInfo || opp.compensation || 'Market Rate'}</strong></span>
                </div>
                <button type="button" class="btn btn-primary apply-opp-btn" data-opp-id="${opp.id}">
                  Apply for Contract ➔
                </button>
              </div>

              <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 1rem;">${opp.description}</p>

              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${(opp.requiredSkills || []).map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `
    }

    if (activeTab === 'certificate') {
      if (!isPaid) return renderLockedSection('Certificate')

      return `
        <h3 style="font-size: 1.4rem; color: #00D4FF; margin-bottom: 0.5rem;">Digital Certificate & Verification</h3>
        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.8rem;">
          Issued upon passing the role-specific assessment with an 80%+ benchmark score.
        </p>

        ${latestCert ? `
          <div style="background: rgba(6, 13, 30, 0.85); border: 2px solid #27C93F; border-radius: 16px; padding: 2.5rem 2rem; max-width: 600px; margin: 0 auto; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎓</div>
            <h4 style="color: #27C93F; font-size: 1.3rem; margin-bottom: 0.4rem;">Rodstar AI Verified Credential</h4>
            <div style="font-size: 1.1rem; color: #ffffff; font-weight: 700; margin-bottom: 1rem;">${latestCert.freelancerName || user.name}</div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 1.5rem;">
              Track: <strong>${latestCert.trackName || application.primaryPosition}</strong><br>
              Certificate ID: <code style="color: #00D4FF;">${latestCert.id}</code>
            </p>
            <a href="#/verify/certificate/${latestCert.id}" class="btn btn-primary">
              View Public Verification Page ➔
            </a>
          </div>
        ` : `
          <div style="text-align: center; padding: 2.5rem; background: rgba(6, 13, 30, 0.5); border-radius: 12px; border: 1px dashed var(--input-border);">
            <p style="color: var(--text-light); font-size: 0.95rem; margin: 0;">
              No certificate issued yet. Complete your training curriculum and score 80%+ on the skill assessment to earn your verified credential!
            </p>
          </div>
        `}
      `
    }
  }

  function renderActiveQuiz(quiz) {
    return `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <div>
            <h3 style="color: #00D4FF; font-size: 1.3rem;">${quiz.title}</h3>
            <span style="font-size: 0.82rem; color: var(--text-light);">Pass threshold: ${quiz.passingScorePercentage}%</span>
          </div>
          <button type="button" class="btn btn-outline cancel-quiz-btn" style="padding: 0.3rem 0.8rem; font-size: 0.8rem;">
            ✕ Cancel
          </button>
        </div>

        ${quizResult ? `
          <div style="background: rgba(6, 13, 30, 0.9); border: 2px solid ${quizResult.passed ? '#27C93F' : '#FF4D4D'}; border-radius: 14px; padding: 2rem; text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${quizResult.passed ? '🎉' : '⚠️'}</div>
            <h4 style="font-size: 1.4rem; color: ${quizResult.passed ? '#27C93F' : '#FF4D4D'}; margin-bottom: 0.5rem;">
              ${quizResult.passed ? 'Assessment Passed!' : 'Assessment Not Passed'}
            </h4>
            <p style="color: #ffffff; font-size: 1.1rem; margin-bottom: 1.5rem;">
              Your Score: <strong>${quizResult.scorePercentage}%</strong> (Required: 80%)
            </p>
            <p style="font-size: 0.88rem; color: var(--text-light); max-width: 480px; margin: 0 auto 1.5rem;">
              ${quizResult.message}
            </p>
            <button type="button" class="btn btn-primary close-quiz-res-btn">
              Close & Return to Dashboard
            </button>
          </div>
        ` : `
          <form id="quiz-form">
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2rem;">
              ${quiz.questions.map((q, idx) => `
                <div style="background: rgba(6, 13, 30, 0.7); border: 1px solid var(--card-border); border-radius: 12px; padding: 1.4rem;">
                  <strong style="color: #ffffff; display: block; margin-bottom: 0.8rem;">
                    ${idx + 1}. ${q.questionText}
                  </strong>
                  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                    ${q.options.map((opt, optIdx) => `
                      <label style="display: flex; align-items: center; gap: 0.6rem; padding: 0.7rem 1rem; background: rgba(10, 22, 51, 0.8); border: 1px solid var(--input-border); border-radius: 8px; font-size: 0.85rem; color: var(--text-light); cursor: pointer;">
                        <input type="radio" name="q_${q.id}" value="${optIdx}" style="width: auto;">
                        <span>${opt}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">
              Submit Assessment Answers
            </button>
          </form>
        `}
      </div>
    `
  }

  function attachEvents(application) {
    // Switch tab buttons
    container.querySelectorAll('.track-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab')
        activeQuiz = null
        quizResult = null
        render()
      })
    })

    container.querySelectorAll('.switch-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-target')
        activeQuiz = null
        quizResult = null
        render()
      })
    })

    // Step 1: Launch Paystack Checkout
    const launchPaymentBtn = container.querySelector('#btn-portal-launch-payment')
    if (launchPaymentBtn) {
      launchPaymentBtn.addEventListener('click', async () => {
        paymentState.errorMessage = ''
        paymentState.successMessage = ''
        paymentState.loading = true
        paymentState.phone = container.querySelector('#input-portal-phone')?.value || user.phone || ''

        render()

        const payResult = await processTrainingPayment({
          applicationId: application.id,
          phoneNumber: paymentState.phone
        })

        paymentState.loading = false

        if (payResult.success) {
          paymentState.paystackInitialized = true
          paymentState.authorizationUrl = payResult.authorizationUrl
          paymentState.paymentRef = payResult.transactionRef
          paymentState.successMessage = 'Paystack checkout session initiated. Opening checkout window...'

          render()

          // Open Paystack checkout in new window automatically
          if (payResult.authorizationUrl) {
            window.open(payResult.authorizationUrl, '_blank')
          }
        } else {
          paymentState.errorMessage = payResult.message || 'Payment initiation failed. Please check phone number and retry.'
          render()
        }
      })
    }

    // Step 1: Verify Paystack Payment
    const verifyPaymentBtn = container.querySelector('#btn-portal-verify-payment')
    if (verifyPaymentBtn) {
      verifyPaymentBtn.addEventListener('click', async () => {
        paymentState.errorMessage = ''
        paymentState.successMessage = ''
        paymentState.verifying = true
        render()

        const verifyRes = await verifyPaystackPayment(paymentState.paymentRef)

        paymentState.verifying = false

        if (verifyRes.success) {
          finalizeVerifiedPayment(application.id, verifyRes.transactionRef)
          paymentState.paystackInitialized = false
          paymentState.successMessage = 'Payment verified successfully! All portal tracks unlocked.'
          render()
        } else {
          paymentState.errorMessage = verifyRes.message || 'Payment verification pending. Complete checkout in Paystack window then verify.'
          render()
        }
      })
    }

    // Complete module listener
    container.querySelectorAll('.complete-mod-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const appId = btn.getAttribute('data-app-id')
        const newProg = Math.min(100, application.trainingProgress + 25)
        updateTrainingProgress(appId, newProg)
        render()
      })
    })

    // Start quiz listener
    container.querySelectorAll('.start-quiz-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const quizId = btn.getAttribute('data-quiz-id')
        activeQuiz = ASSESSMENTS_BANK.find(a => a.id === quizId)
        quizAnswers = {}
        quizResult = null
        render()
      })
    })

    // Cancel quiz
    container.querySelector('.cancel-quiz-btn')?.addEventListener('click', () => {
      activeQuiz = null
      render()
    })

    // Submit Quiz
    const quizForm = container.querySelector('#quiz-form')
    if (quizForm) {
      quizForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!activeQuiz) return

        let correctCount = 0
        activeQuiz.questions.forEach(q => {
          const selected = quizForm.querySelector(`input[name="q_${q.id}"]:checked`)
          if (selected && parseInt(selected.value, 10) === q.correctIndex) {
            correctCount++
          }
        })

        const scorePct = Math.round((correctCount / activeQuiz.questions.length) * 100)
        quizResult = submitAssessmentResult(application.id, scorePct)
        render()
      })
    }

    container.querySelector('.close-quiz-res-btn')?.addEventListener('click', () => {
      activeQuiz = null
      quizResult = null
      render()
    })

    // Apply for Opportunity
    container.querySelectorAll('.apply-opp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Application submitted for opportunity! An administrator will review your verified profile.')
      })
    })
  }

  render()
}
