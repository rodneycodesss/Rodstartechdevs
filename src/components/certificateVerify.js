import './styles/freelancer.css'
import { getStore } from '../services/freelancerStore.js'

export function setupCertificateVerify() {
  const container = document.querySelector('#certificate-verify-container')
  if (!container) return

  // Extract ID from hash if present e.g. #/verify/certificate/RSTAR-CERT-12345
  const hash = window.location.hash
  const parts = hash.split('/verify/certificate/')
  let searchId = parts.length > 1 ? parts[1].split('?')[0] : ''

  function render() {
    const store = getStore()
    const foundCert = searchId ? store.certificates.find(c => c.id.toUpperCase() === searchId.toUpperCase()) : null

    container.innerHTML = `
      <div class="section container" style="max-width: 760px;">
        <div class="glass-panel" style="padding: 3rem 2rem; text-align: center;">
          <div class="ai-badge-pill" style="margin-bottom: 1rem;">
            <span class="pulse-dot"></span> Rodstar AI Public Credential Verification
          </div>
          <h1 class="section-title gradient-text" style="font-size: 2.2rem; margin-bottom: 0.5rem;">
            Verify Certificate Authenticity
          </h1>
          <p style="font-size: 0.95rem; color: var(--text-light); margin-bottom: 2rem;">
            Enter a Rodstar AI Certificate ID to verify training completion and talent network accreditation.
          </p>

          <form id="verify-cert-form" style="max-width: 480px; margin: 0 auto 2rem; display: flex; gap: 0.8rem;">
            <input type="text" id="cert-id-input" placeholder="e.g. RSTAR-CERT-991821" value="${searchId}" style="flex: 1;">
            <button type="submit" class="btn btn-primary" style="white-space: nowrap;">
              Verify ID
            </button>
          </form>

          ${searchId ? (foundCert ? `
            <div class="certificate-frame">
              <div style="padding: 0.4rem 1rem; border-radius: 100px; background: rgba(39,201,63,0.15); color: #27C93F; border: 1px solid #27C93F; display: inline-block; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">
                ✓ Official Authenticated Credential
              </div>
              <h2 style="font-size: 1.8rem; color: #ffffff; margin-bottom: 0.3rem;">${foundCert.freelancerName}</h2>
              <p style="font-size: 0.9rem; color: var(--text-light);">Track: <strong style="color: #00D4FF;">${foundCert.trackName}</strong></p>
              
              <div style="display: flex; justify-content: space-around; margin: 1.5rem 0; font-size: 0.85rem; color: var(--text-light); border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 0.8rem 0;">
                <div>Score: <strong style="color:#27C93F;">${foundCert.score}%</strong></div>
                <div>Issued: <strong>${new Date(foundCert.issueDate).toLocaleDateString()}</strong></div>
                <div>ID: <strong style="color:#00D4FF; font-family:monospace;">${foundCert.id}</strong></div>
              </div>
              <span style="font-size: 0.78rem; color: #27C93F;">This certificate is active and verified in the Rodstar AI Talent Network registry.</span>
            </div>
          ` : `
            <div style="background: rgba(255,77,77,0.1); border: 1px solid #FF4D4D; border-radius: 14px; padding: 2rem;">
              <h3 style="color: #FF4D4D; margin-bottom: 0.5rem;">Certificate Not Found</h3>
              <p style="font-size: 0.9rem; color: var(--text-light);">
                No active credential matching ID "<strong>${searchId}</strong>" was found in the Rodstar registry. Please verify the ID spelling.
              </p>
            </div>
          `) : `
            <p style="font-size: 0.85rem; color: var(--text-light);">Enter a certificate ID above to verify.</p>
          `}
        </div>
      </div>
    `

    attachEvents()
  }

  function attachEvents() {
    const form = container.querySelector('#verify-cert-form')
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputVal = container.querySelector('#cert-id-input')?.value.trim()
        if (inputVal) {
          searchId = inputVal
          window.location.hash = `#/verify/certificate/${inputVal}`
          render()
        }
      })
    }
  }

  render()
}
