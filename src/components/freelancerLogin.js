import './styles/freelancer.css'
import { getCurrentUser, loginAsDemoRole, getStore, setCurrentUser } from '../services/freelancerStore.js'
import { loginWithFirebase, logoutFromFirebase, loginWithGoogleFirebase } from '../services/firebaseAuth.js'

export function setupFreelancerLogin() {
  const container = document.querySelector('#freelancer-login-container')
  if (!container) return

  let emailInput = ''
  let passwordInput = ''
  let errorMessage = ''

  function render() {
    const currentUser = getCurrentUser()

    container.innerHTML = `
      <div class="section container" style="max-width: 540px;">
        <div class="glass-panel" style="padding: 3rem 2rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div class="ai-badge-pill"><span class="pulse-dot"></span> Rodstar AI Secure Portal</div>
            <h1 class="section-title gradient-text" style="font-size: 2rem; margin-bottom: 0.5rem;">
              Portal Login
            </h1>
            <p style="font-size: 0.9rem; color: var(--text-light);">
              Sign in to access your Freelancer Dashboard, Training Modules, or Control Panel.
            </p>
          </div>

          ${currentUser ? `
            <div style="background: rgba(0, 212, 255, 0.1); border: 1px solid #00D4FF; border-radius: 12px; padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;">
              <p style="color: #ffffff; margin-bottom: 0.5rem;">Currently logged in as:</p>
              <strong style="color: #00D4FF; font-size: 1.1rem; display: block;">${currentUser.name} (${currentUser.role})</strong>
              <span style="font-size: 0.8rem; color: var(--text-light); display: block; margin-top: 0.2rem;">${currentUser.email}</span>
            </div>

            <div style="display: flex; gap: 1rem; flex-direction: column;">
              ${currentUser.role === 'Freelancer' ? `
                <a href="#/freelancer/dashboard" class="btn btn-primary" style="width: 100%;">
                  📊 Open Freelancer Dashboard
                </a>
              ` : `
                <a href="#/admin/freelancers" class="btn btn-primary" style="width: 100%;">
                  ⚙️ Open Admin Control Panel
                </a>
              `}
              <button type="button" class="btn btn-outline" id="btn-logout" style="width: 100%;">
                Log Out
              </button>
            </div>
          ` : `
            ${errorMessage ? `
              <div style="padding: 0.8rem; border-radius: 8px; background: rgba(255,77,77,0.15); border: 1px solid #FF4D4D; color: #FF4D4D; font-size: 0.85rem; margin-bottom: 1.2rem; text-align: center;">
                ${errorMessage}
              </div>
            ` : ''}

            <form id="login-form">
              <div style="margin-bottom: 1.2rem;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Email Address</label>
                <input type="email" id="login-email" placeholder="alex.mwangi@example.com" value="${emailInput}" required>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-size: 0.85rem; color: var(--text-light); margin-bottom: 0.4rem;">Password</label>
                <input type="password" id="login-password" placeholder="••••••••" value="${passwordInput}" required>
              </div>

              <button type="submit" id="btn-portal-signin" class="btn btn-primary" style="width: 100%; margin-bottom: 0.8rem;">
                Sign In to Portal
              </button>
            </form>

            <button type="button" id="btn-google-signin" class="btn btn-outline" style="width: 100%; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              Sign In with Google
            </button>

            <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1rem;">
                Don't have an account yet? <a href="#/ai/freelancers/apply" style="color: #00D4FF; text-decoration: underline;">Apply & Register Account</a>
              </p>

              <!-- QUICK DEMO ROLE SWITCHER FOR EVALUATION -->
              <div style="background: rgba(6, 13, 30, 0.7); border: 1px dashed rgba(0, 212, 255, 0.4); border-radius: 12px; padding: 1rem; margin-top: 1rem;">
                <span style="font-size: 0.78rem; color: #00D4FF; font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.6rem;">
                  ⚡ Quick Demo RBAC Role Switcher
                </span>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                  <button type="button" class="btn btn-outline demo-login-btn" data-role="Freelancer" style="padding: 0.35rem 0.7rem; font-size: 0.78rem; min-height: 30px;">
                    Freelancer Demo
                  </button>
                  <button type="button" class="btn btn-outline demo-login-btn" data-role="Administrator" style="padding: 0.35rem 0.7rem; font-size: 0.78rem; min-height: 30px;">
                    Admin Demo
                  </button>
                  <button type="button" class="btn btn-outline demo-login-btn" data-role="Recruiter" style="padding: 0.35rem 0.7rem; font-size: 0.78rem; min-height: 30px;">
                    Recruiter Demo
                  </button>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    `

    attachEvents()
  }

  function attachEvents() {
    const logoutBtn = container.querySelector('#btn-logout')
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        await logoutFromFirebase()
        setCurrentUser(null)
        render()
      })
    }

    const form = container.querySelector('#login-form')
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault()
        emailInput = container.querySelector('#login-email').value
        passwordInput = container.querySelector('#login-password').value

        const submitBtn = container.querySelector('#btn-portal-signin')
        if (submitBtn) {
          submitBtn.disabled = true
          submitBtn.textContent = '⏳ Authenticating...'
        }

        const fbResult = await loginWithFirebase(emailInput, passwordInput)
        const store = getStore()
        const app = store.applications.find(a => a.email.toLowerCase() === emailInput.toLowerCase())

        if (fbResult.success || app) {
          const user = {
            id: fbResult.user?.userId || fbResult.user?.uid || app?.userId || 'USR-' + Date.now(),
            name: fbResult.user?.fullName || fbResult.user?.name || app?.fullName || emailInput.split('@')[0],
            email: emailInput.toLowerCase(),
            role: fbResult.user?.role || app?.role || 'Freelancer',
            country: app?.country || 'Kenya',
            city: app?.city || 'Nairobi',
            phone: fbResult.user?.phone || app?.phone || '',
            applicationId: app?.id || fbResult.user?.applicationId || 'RSTAR-' + Date.now(),
            paymentStatus: app?.paymentStatus || 'Pending',
            trainingProgress: app?.trainingProgress || 0,
            assessmentCompleted: app?.assessmentCompleted || false,
            assessmentScore: app?.assessmentScore || 0,
            networkStatus: app?.networkStatus || 'Training Required'
          }
          setCurrentUser(user)
          window.location.hash = '#/freelancer/dashboard'
        } else {
          if (submitBtn) {
            submitBtn.disabled = false
            submitBtn.textContent = 'Sign In to Portal'
          }
          errorMessage = fbResult.message || 'Login failed. Please check your credentials or register a new account.'
          render()
        }
      })
    }

    const googleBtn = container.querySelector('#btn-google-signin')
    if (googleBtn) {
      googleBtn.addEventListener('click', async () => {
        googleBtn.disabled = true
        googleBtn.textContent = '⏳ Connecting to Google...'
        const gResult = await loginWithGoogleFirebase()
        if (gResult.success) {
          const user = {
            id: gResult.user.userId,
            name: gResult.user.fullName,
            email: gResult.user.email,
            role: gResult.user.role || 'Freelancer',
            country: 'Kenya',
            city: 'Nairobi',
            phone: gResult.user.phone || '',
            applicationId: 'RSTAR-G' + Math.floor(100000 + Math.random() * 900000),
            paymentStatus: 'Verified',
            trainingProgress: 0,
            assessmentCompleted: false,
            assessmentScore: 0,
            networkStatus: 'Training Active'
          }
          setCurrentUser(user)
          window.location.hash = '#/freelancer/dashboard'
        } else {
          googleBtn.disabled = false
          googleBtn.textContent = 'Sign In with Google'
          errorMessage = gResult.message || 'Google SSO sign-in failed.'
          render()
        }
      })
    }

    container.querySelectorAll('.demo-login-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role')
        loginAsDemoRole(role)
        if (role === 'Administrator') {
          window.location.hash = '#/admin/freelancers'
        } else {
          window.location.hash = '#/freelancer/dashboard'
        }
      })
    })
  }

  render()
}
