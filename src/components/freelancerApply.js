import './styles/freelancer.css'
import { CAREER_POSITIONS, submitApplication } from '../services/freelancerStore.js'
import { validatePassword, validateFileUpload, sanitizeInput } from '../services/security.js'
import { registerWithFirebase } from '../services/firebaseAuth.js'

export function setupFreelancerApply() {
  const container = document.querySelector('#freelancer-apply-container')
  if (!container) return

  let currentStep = 1
  const totalSteps = 6

  // Form State
  const formData = {
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    country: 'Kenya',
    city: 'Nairobi',
    timeZone: 'UTC+3',
    password: '',
    confirmPassword: '',

    // Step 2
    headline: '',
    experienceLevel: 'Intermediate',
    yearsOfExperience: '2-4 Years',
    employmentStatus: 'Freelance / Open to Work',
    education: "Bachelor's Degree",
    certifications: '',
    linkedIn: '',
    gitHub: '',
    portfolioUrl: '',
    cvFileName: '',
    cvSize: '',

    // Step 3
    primaryPosition: 'AI Engineer',
    additionalPositions: [],

    // Step 4
    skills: [],

    // Step 5
    workPreferences: ['Remote', 'Freelance'],
    hoursPerWeek: '20-30 hrs/week',
    preferredHours: 'Flexible / Asynchronous',
    availability: 'Immediate (within 1 week)',

    // Step 6
    projectDescriptions: '',
    agreedToTerms: false,

    applicationId: null,
    firebaseUid: null
  }

  function render() {
    container.innerHTML = `
      <div class="section container" style="max-width: 900px;">
        <!-- HEADER -->
        <div style="text-align: center; margin-bottom: 2.5rem;">
          <div class="ai-badge-pill">
            <span class="pulse-dot"></span> Rodstar AI Talent Network Application
          </div>
          <h1 class="section-title gradient-text" style="font-size: 2.2rem; margin-bottom: 0.8rem;">
            Join the Rodstar AI Freelancer Network
          </h1>
          <p class="section-subtitle" style="margin-bottom: 1.5rem;">
            Create your professional account and select your technical tracks to access the network portal.
          </p>
        </div>

        <!-- STEPPER INDICATOR (6 STEPS) -->
        <div class="stepper-header glass-panel" style="padding: 1.2rem; margin-bottom: 2rem;">
          <div class="stepper-item ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 1 ? '✓' : '1'}</div>
            <span>Account</span>
          </div>
          <div class="stepper-item ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 2 ? '✓' : '2'}</div>
            <span>Profile</span>
          </div>
          <div class="stepper-item ${currentStep === 3 ? 'active' : currentStep > 3 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 3 ? '✓' : '3'}</div>
            <span>Tracks</span>
          </div>
          <div class="stepper-item ${currentStep === 4 ? 'active' : currentStep > 4 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 4 ? '✓' : '4'}</div>
            <span>Skills</span>
          </div>
          <div class="stepper-item ${currentStep === 5 ? 'active' : currentStep > 5 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 5 ? '✓' : '5'}</div>
            <span>Preferences</span>
          </div>
          <div class="stepper-item ${currentStep === 6 ? 'active' : currentStep > 6 ? 'completed' : ''}">
            <div class="stepper-number">${currentStep > 6 ? '✓' : '6'}</div>
            <span>Submit</span>
          </div>
        </div>

        <!-- FORM CONTAINER -->
        <div class="glass-panel" style="padding: 2.5rem 2rem;">
          <div id="form-error-alert" style="display: none; padding: 1rem; border-radius: 8px; background: rgba(255, 77, 77, 0.15); border: 1px solid #FF4D4D; color: #FF4D4D; font-size: 0.9rem; margin-bottom: 1.5rem;"></div>

          <!-- STEP 1: ACCOUNT -->
          <div class="app-form-section ${currentStep === 1 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 1.5rem;">Step 1: Account Creation</h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem;">
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Full Name *</label>
                <input type="text" id="input-fullName" placeholder="e.g. Alex Rodney Mwangi" value="${formData.fullName}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Email Address *</label>
                <input type="email" id="input-email" placeholder="alex.mwangi@example.com" value="${formData.email}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Phone Number *</label>
                <input type="tel" id="input-phone" placeholder="+254 712 345 678" value="${formData.phone}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Country *</label>
                <select id="input-country">
                  <option value="Kenya" ${formData.country === 'Kenya' ? 'selected' : ''}>Kenya</option>
                  <option value="Nigeria" ${formData.country === 'Nigeria' ? 'selected' : ''}>Nigeria</option>
                  <option value="South Africa" ${formData.country === 'South Africa' ? 'selected' : ''}>South Africa</option>
                  <option value="Rwanda" ${formData.country === 'Rwanda' ? 'selected' : ''}>Rwanda</option>
                  <option value="Uganda" ${formData.country === 'Uganda' ? 'selected' : ''}>Uganda</option>
                  <option value="Tanzania" ${formData.country === 'Tanzania' ? 'selected' : ''}>Tanzania</option>
                  <option value="United States" ${formData.country === 'United States' ? 'selected' : ''}>United States</option>
                  <option value="United Kingdom" ${formData.country === 'United Kingdom' ? 'selected' : ''}>United Kingdom</option>
                  <option value="Other International" ${formData.country === 'Other International' ? 'selected' : ''}>Other International</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">City / Location *</label>
                <input type="text" id="input-city" placeholder="Nairobi, Mombasa, Eldoret..." value="${formData.city}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Time Zone</label>
                <select id="input-timeZone">
                  <option value="UTC+3" ${formData.timeZone === 'UTC+3' ? 'selected' : ''}>UTC+3 (East Africa Time)</option>
                  <option value="UTC+1" ${formData.timeZone === 'UTC+1' ? 'selected' : ''}>UTC+1 (West Africa Time)</option>
                  <option value="UTC+2" ${formData.timeZone === 'UTC+2' ? 'selected' : ''}>UTC+2 (South Africa Time)</option>
                  <option value="UTC+0" ${formData.timeZone === 'UTC+0' ? 'selected' : ''}>UTC+0 (GMT / WET)</option>
                  <option value="UTC-5" ${formData.timeZone === 'UTC-5' ? 'selected' : ''}>UTC-5 (EST / US)</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Password * (Min 8 chars, 1 Upper, 1 Number)</label>
                <input type="password" id="input-password" placeholder="••••••••" value="${formData.password}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Confirm Password *</label>
                <input type="password" id="input-confirmPassword" placeholder="••••••••" value="${formData.confirmPassword}">
              </div>
            </div>
          </div>

          <!-- STEP 2: PROFESSIONAL PROFILE -->
          <div class="app-form-section ${currentStep === 2 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 1.5rem;">Step 2: Professional Profile & CV</h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem;">
              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Professional Headline *</label>
                <input type="text" id="input-headline" placeholder="e.g. Generative AI Engineer & Full-Stack Developer" value="${formData.headline}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Current Experience Level *</label>
                <select id="input-experienceLevel">
                  <option value="Beginner" ${formData.experienceLevel === 'Beginner' ? 'selected' : ''}>Beginner (0-1 yrs)</option>
                  <option value="Intermediate" ${formData.experienceLevel === 'Intermediate' ? 'selected' : ''}>Intermediate (2-4 yrs)</option>
                  <option value="Advanced" ${formData.experienceLevel === 'Advanced' ? 'selected' : ''}>Advanced (5-7 yrs)</option>
                  <option value="Professional" ${formData.experienceLevel === 'Professional' ? 'selected' : ''}>Professional / Principal (8+ yrs)</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Years of Technical Experience</label>
                <input type="text" id="input-yearsOfExperience" placeholder="e.g. 3 Years" value="${formData.yearsOfExperience}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Current Employment Status</label>
                <select id="input-employmentStatus">
                  <option value="Freelance / Open to Work" ${formData.employmentStatus.includes('Freelance') ? 'selected' : ''}>Freelance / Open to Work</option>
                  <option value="Employed (Seeking Side Projects)" ${formData.employmentStatus.includes('Employed') ? 'selected' : ''}>Employed (Seeking Side Projects)</option>
                  <option value="Recent Graduate / Student" ${formData.employmentStatus.includes('Graduate') ? 'selected' : ''}>Recent Graduate / Student</option>
                  <option value="Self-Employed / Contractor" ${formData.employmentStatus.includes('Contractor') ? 'selected' : ''}>Self-Employed / Contractor</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Highest Education</label>
                <input type="text" id="input-education" placeholder="e.g. BSc Computer Science / Diploma ICT" value="${formData.education}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Technical Certifications</label>
                <input type="text" id="input-certifications" placeholder="e.g. AWS Certified, TensorFlow Developer" value="${formData.certifications}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">LinkedIn Profile URL</label>
                <input type="url" id="input-linkedIn" placeholder="https://linkedin.com/in/username" value="${formData.linkedIn}">
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">GitHub Profile URL</label>
                <input type="url" id="input-gitHub" placeholder="https://github.com/username" value="${formData.gitHub}">
              </div>

              <div style="grid-column: 1 / -1;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">CV / Resume Upload * (PDF, DOC, DOCX up to 5MB)</label>
                <input type="file" id="input-cvFile" accept=".pdf,.doc,.docx" style="padding: 0.5rem; background: rgba(0,0,0,0.3); border: 1px dashed var(--input-border); border-radius: 8px; width: 100%;">
                <span id="cv-status-msg" style="display: block; font-size: 0.78rem; color: #27C93F; margin-top: 0.4rem;">
                  ${formData.cvFileName ? `Uploaded: ${formData.cvFileName} (${formData.cvSize})` : ''}
                </span>
              </div>
            </div>
          </div>

          <!-- STEP 3: CAREER TRACKS -->
          <div class="app-form-section ${currentStep === 3 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 1.5rem;">Step 3: Select Career Positions</h3>

            <div style="margin-bottom: 1.8rem;">
              <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Primary Specialization *</label>
              <select id="input-primaryPosition" style="width: 100%; font-size: 1rem; padding: 0.8rem;">
                ${CAREER_POSITIONS.map(pos => `
                  <option value="${pos.title}" ${formData.primaryPosition === pos.title ? 'selected' : ''}>
                    ${pos.title} — (${pos.category})
                  </option>
                `).join('')}
              </select>
            </div>

            <!-- DYNAMIC ROLE PREVIEW -->
            <div id="role-preview-card" style="background: rgba(0, 212, 255, 0.08); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 12px; padding: 1.2rem; margin-bottom: 1.8rem;"></div>

            <div>
              <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.6rem;">Additional Positions (Select up to 2)</label>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.8rem; max-height: 240px; overflow-y: auto; padding: 0.5rem; background: rgba(0,0,0,0.2); border-radius: 8px;">
                ${CAREER_POSITIONS.map(pos => `
                  <label style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.82rem; color: var(--text-light); cursor: pointer;">
                    <input type="checkbox" class="add-pos-checkbox" value="${pos.title}" ${formData.additionalPositions.includes(pos.title) ? 'checked' : ''} style="width: auto;">
                    <span>${pos.title}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- STEP 4: SKILLS MATRIX -->
          <div class="app-form-section ${currentStep === 4 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 0.5rem;">Step 4: Skills Matrix Checklist</h3>
            <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1.5rem;">
              Select all tools, libraries, and frameworks you have hands-on experience with:
            </p>

            <div id="skills-matrix-container"></div>
          </div>

          <!-- STEP 5: WORK PREFERENCES -->
          <div class="app-form-section ${currentStep === 5 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 1.5rem;">Step 5: Work Preferences</h3>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem;">
              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Available Hours Per Week</label>
                <select id="input-hoursPerWeek">
                  <option value="10-20 hrs/week" ${formData.hoursPerWeek.includes('10-20') ? 'selected' : ''}>10–20 hrs/week (Part-Time)</option>
                  <option value="20-30 hrs/week" ${formData.hoursPerWeek.includes('20-30') ? 'selected' : ''}>20–30 hrs/week (Flexible)</option>
                  <option value="30-40+ hrs/week" ${formData.hoursPerWeek.includes('30-40') ? 'selected' : ''}>30–40+ hrs/week (Full-Time Commitment)</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Preferred Working Hours</label>
                <select id="input-preferredHours">
                  <option value="Flexible / Asynchronous" ${formData.preferredHours.includes('Flexible') ? 'selected' : ''}>Flexible / Asynchronous</option>
                  <option value="Standard EAT (UTC+3) Business Hours" ${formData.preferredHours.includes('EAT') ? 'selected' : ''}>Standard EAT (UTC+3) Business Hours</option>
                  <option value="EST / PST Overlap (US Shift)" ${formData.preferredHours.includes('EST') ? 'selected' : ''}>EST / PST Overlap (US Shift)</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Earliest Availability</label>
                <select id="input-availability">
                  <option value="Immediate (within 1 week)" ${formData.availability.includes('Immediate') ? 'selected' : ''}>Immediate (within 1 week)</option>
                  <option value="In 2 Weeks" ${formData.availability.includes('2 Weeks') ? 'selected' : ''}>In 2 Weeks</option>
                  <option value="In 1 Month" ${formData.availability.includes('1 Month') ? 'selected' : ''}>In 1 Month</option>
                </select>
              </div>
            </div>
          </div>

          <!-- STEP 6: REVIEW & SUBMIT APPLICATION -->
          <div class="app-form-section ${currentStep === 6 ? 'active' : ''}">
            <h3 style="color: #00D4FF; font-size: 1.3rem; margin-bottom: 1.2rem;">Step 6: Review & Final Submission</h3>

            <div style="background: rgba(6, 13, 30, 0.8); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 12px; padding: 1.4rem; margin-bottom: 1.5rem;">
              <h4 style="color: #00D4FF; font-size: 1.05rem; margin-bottom: 0.8rem;">Profile Review Summary</h4>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.8rem; font-size: 0.85rem;">
                <div><span style="color: var(--text-light);">Candidate:</span> <strong style="color: #ffffff;">${formData.fullName || '—'}</strong></div>
                <div><span style="color: var(--text-light);">Email:</span> <strong style="color: #ffffff;">${formData.email || '—'}</strong></div>
                <div><span style="color: var(--text-light);">Primary Track:</span> <strong style="color: #00D4FF;">${formData.primaryPosition}</strong></div>
                <div><span style="color: var(--text-light);">Location:</span> <strong style="color: #ffffff;">${formData.city}, ${formData.country}</strong></div>
                <div><span style="color: var(--text-light);">CV Uploaded:</span> <strong style="color: #27C93F;">${formData.cvFileName || 'Uploaded'}</strong></div>
                <div><span style="color: var(--text-light);">Experience:</span> <strong style="color: #ffffff;">${formData.yearsOfExperience} (${formData.experienceLevel})</strong></div>
              </div>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Brief Overview of Past Projects / Work Samples</label>
              <textarea id="input-projectDescriptions" rows="3" placeholder="Describe 1-2 projects you have built or worked on recently...">${formData.projectDescriptions}</textarea>
            </div>

            <!-- MANDATORY TERMS & PRIVACY CONSENT -->
            <div style="background: rgba(6, 13, 30, 0.7); border: 1px solid var(--input-border); border-radius: 12px; padding: 1.2rem; margin-bottom: 1.5rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.8rem; font-size: 0.85rem; color: var(--text-light); cursor: pointer;">
                <input type="checkbox" id="input-agreedToTerms" ${formData.agreedToTerms ? 'checked' : ''} style="width: auto; margin-top: 0.2rem;">
                <span>
                  I acknowledge that I have read and agree to the <strong>Rodstar AI Privacy Policy</strong>, <strong>Terms of Service</strong>, and <strong>Freelancer Network Terms</strong>. I understand that standard membership activation (KSh 1,500 onboarding fee — waived during testing mode) and role training are completed inside the Freelancer Portal.
                </span>
              </label>
            </div>

            <div style="background: rgba(0, 212, 255, 0.08); border: 1px dashed #00D4FF; border-radius: 12px; padding: 1.2rem; text-align: center;">
              <span class="ai-badge-pill" style="background: rgba(39, 201, 63, 0.2); color: #27C93F; border-color: rgba(39, 201, 63, 0.4); margin-bottom: 0.5rem;">
                🧪 Testing Mode Active
              </span>
              <p style="font-size: 0.88rem; color: #ffffff; margin: 0.3rem 0 0;">
                After submission, your account is immediately created and the standard KSh 1,500 fee is waived for testing. All portal tracks, AI LMS courses, and verified quizzes will be fully unlocked upon redirect!
              </p>
            </div>
          </div>

          <!-- BUTTON CONTROLS -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; border-top: 1px solid rgba(0, 119, 255, 0.15); padding-top: 1.5rem;">
            ${currentStep > 1 ? `
              <button type="button" class="btn btn-outline" id="btn-prev-step">← Back</button>
            ` : `<div></div>`}

            ${currentStep < 6 ? `
              <button type="button" class="btn btn-primary" id="btn-next-step">Continue →</button>
            ` : `
              <button type="button" class="btn btn-primary" id="btn-submit-app">Submit Application & Open Portal ➔</button>
            `}
          </div>
        </div>
      </div>
    `

    updateDynamicRolePreview()
    updateDynamicSkillsMatrix()
    attachEvents()
  }

  function updateDynamicRolePreview() {
    const previewContainer = container.querySelector('#role-preview-card')
    if (!previewContainer) return
    const role = CAREER_POSITIONS.find(p => p.title === formData.primaryPosition)
    if (!role) return

    previewContainer.innerHTML = `
      <div style="font-size: 0.85rem; color: #00D4FF; font-weight: 700; text-transform: uppercase;">Selected Primary Position Overview</div>
      <h4 style="font-size: 1.1rem; color: #ffffff; font-weight: 700; margin: 0.3rem 0;">${role.title}</h4>
      <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.6rem;">Recommended Training: <strong>${role.recommendedTraining}</strong></p>
      <div class="skill-chips">
        ${role.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
      </div>
    `
  }

  function updateDynamicSkillsMatrix() {
    const matrixContainer = container.querySelector('#skills-matrix-container')
    if (!matrixContainer) return

    const primaryRole = CAREER_POSITIONS.find(p => p.title === formData.primaryPosition)
    const roleSkills = primaryRole ? primaryRole.skills : ['Python', 'JavaScript', 'React', 'Git', 'APIs']

    matrixContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.8rem;">
        ${roleSkills.map(skill => `
          <label style="display: flex; align-items: center; gap: 0.6rem; padding: 0.8rem; background: rgba(6, 13, 30, 0.6); border: 1px solid var(--input-border); border-radius: 8px; font-size: 0.85rem; color: #ffffff; cursor: pointer;">
            <input type="checkbox" class="skill-matrix-checkbox" value="${skill}" ${formData.skills.includes(skill) ? 'checked' : ''} style="width: auto;">
            <span>${skill}</span>
          </label>
        `).join('')}
      </div>
    `
  }

  function showFormError(msg) {
    const alertBox = container.querySelector('#form-error-alert')
    if (alertBox) {
      alertBox.textContent = msg
      alertBox.style.display = 'block'
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  function hideFormError() {
    const alertBox = container.querySelector('#form-error-alert')
    if (alertBox) alertBox.style.display = 'none'
  }

  function attachEvents() {
    // Inputs synchronization
    container.querySelector('#input-fullName')?.addEventListener('input', e => formData.fullName = e.target.value)
    container.querySelector('#input-email')?.addEventListener('input', e => formData.email = e.target.value)
    container.querySelector('#input-phone')?.addEventListener('input', e => formData.phone = e.target.value)
    container.querySelector('#input-country')?.addEventListener('change', e => formData.country = e.target.value)
    container.querySelector('#input-city')?.addEventListener('input', e => formData.city = e.target.value)
    container.querySelector('#input-timeZone')?.addEventListener('change', e => formData.timeZone = e.target.value)
    container.querySelector('#input-password')?.addEventListener('input', e => formData.password = e.target.value)
    container.querySelector('#input-confirmPassword')?.addEventListener('input', e => formData.confirmPassword = e.target.value)

    container.querySelector('#input-headline')?.addEventListener('input', e => formData.headline = e.target.value)
    container.querySelector('#input-experienceLevel')?.addEventListener('change', e => formData.experienceLevel = e.target.value)
    container.querySelector('#input-yearsOfExperience')?.addEventListener('input', e => formData.yearsOfExperience = e.target.value)
    container.querySelector('#input-employmentStatus')?.addEventListener('change', e => formData.employmentStatus = e.target.value)
    container.querySelector('#input-education')?.addEventListener('input', e => formData.education = e.target.value)
    container.querySelector('#input-certifications')?.addEventListener('input', e => formData.certifications = e.target.value)
    container.querySelector('#input-linkedIn')?.addEventListener('input', e => formData.linkedIn = e.target.value)
    container.querySelector('#input-gitHub')?.addEventListener('input', e => formData.gitHub = e.target.value)

    // CV File Upload Listener
    container.querySelector('#input-cvFile')?.addEventListener('change', e => {
      const file = e.target.files[0]
      if (!file) return
      const validation = validateFileUpload(file)
      if (!validation.isValid) {
        showFormError(validation.message)
        e.target.value = ''
        return
      }
      hideFormError()
      formData.cvFileName = validation.safeFileName
      formData.cvSize = validation.fileSizeFormatted
      const statusMsg = container.querySelector('#cv-status-msg')
      if (statusMsg) statusMsg.textContent = `Uploaded File Validated: ${validation.originalName} (${validation.fileSizeFormatted})`
    })

    container.querySelector('#input-primaryPosition')?.addEventListener('change', e => {
      formData.primaryPosition = e.target.value
      updateDynamicRolePreview()
      updateDynamicSkillsMatrix()
    })

    container.querySelectorAll('.add-pos-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const checked = Array.from(container.querySelectorAll('.add-pos-checkbox:checked')).map(c => c.value)
        if (checked.length > 2) {
          cb.checked = false
          showFormError('You can select a maximum of 2 additional positions.')
          return
        }
        hideFormError()
        formData.additionalPositions = checked
      })
    })

    container.querySelectorAll('.skill-matrix-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        formData.skills = Array.from(container.querySelectorAll('.skill-matrix-checkbox:checked')).map(c => c.value)
      })
    })

    container.querySelector('#input-hoursPerWeek')?.addEventListener('change', e => formData.hoursPerWeek = e.target.value)
    container.querySelector('#input-preferredHours')?.addEventListener('change', e => formData.preferredHours = e.target.value)
    container.querySelector('#input-availability')?.addEventListener('change', e => formData.availability = e.target.value)
    container.querySelector('#input-projectDescriptions')?.addEventListener('input', e => formData.projectDescriptions = e.target.value)
    container.querySelector('#input-agreedToTerms')?.addEventListener('change', e => formData.agreedToTerms = e.target.checked)

    // Navigation Buttons
    container.querySelector('#btn-prev-step')?.addEventListener('click', () => {
      hideFormError()
      if (currentStep > 1) {
        currentStep--
        render()
      }
    })

    container.querySelector('#btn-next-step')?.addEventListener('click', () => {
      hideFormError()
      if (validateCurrentStep()) {
        currentStep++
        render()
      }
    })

    container.querySelector('#btn-submit-app')?.addEventListener('click', async () => {
      hideFormError()
      if (!formData.agreedToTerms) {
        showFormError('You must acknowledge and agree to the Terms of Service & Opportunity Disclaimer to proceed.')
        return
      }

      const btn = container.querySelector('#btn-submit-app')
      if (btn) {
        btn.disabled = true
        btn.textContent = '⏳ Creating Account & Portal Session...'
      }

      // 1. Register candidate account in Firebase Auth & Realtime Database
      const fbRegResult = await registerWithFirebase({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone,
        role: 'Freelancer'
      })

      if (!fbRegResult.success) {
        if (btn) {
          btn.disabled = false
          btn.textContent = 'Submit Application & Open Portal ➔'
        }
        showFormError(fbRegResult.message || 'Registration failed. Please check your account details.')
        return
      }

      // 2. Attach Firebase UID
      if (fbRegResult.user && fbRegResult.user.userId) {
        formData.firebaseUid = fbRegResult.user.userId
      }

      // 3. Submit application
      const result = submitApplication(formData)
      if (result.success) {
        // Direct redirect to portal dashboard where Step 1 is membership activation!
        window.location.hash = '#/freelancer/dashboard'
      }
    })
  }

  function validateCurrentStep() {
    if (currentStep === 1) {
      if (!formData.fullName.trim()) { showFormError('Please enter your full name.'); return false }
      if (!formData.email.trim() || !formData.email.includes('@')) { showFormError('Please enter a valid email address.'); return false }
      if (!formData.phone.trim()) { showFormError('Please enter your phone number.'); return false }
      if (!formData.city.trim()) { showFormError('Please enter your city/location.'); return false }
      
      const pwdVal = validatePassword(formData.password)
      if (!pwdVal.isValid) { showFormError(pwdVal.message); return false }
      if (formData.password !== formData.confirmPassword) { showFormError('Passwords do not match.'); return false }
    }

    if (currentStep === 2) {
      if (!formData.headline.trim()) { showFormError('Please enter your professional headline.'); return false }
      if (!formData.cvFileName) { showFormError('Please upload your CV/Resume file (PDF, DOC, or DOCX).'); return false }
    }

    return true
  }

  render()
}
