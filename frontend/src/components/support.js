import './styles/support.css'

export function setupSupport() {
  const supportContainer = document.querySelector('#support')
  if (!supportContainer) return

  supportContainer.innerHTML = `
    <div class="support-page page-hero">
      <div class="container">
        
        <!-- Header -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill fade-in-up">
            <span class="pulse-dot"></span> OPEN INNOVATION & PARTNERSHIP INITIATIVE
          </div>
          <h1 class="section-title fade-in-up gradient-text" style="font-size: clamp(2.2rem, 4.5vw, 3.8rem);">
            Support & Partner With Us
          </h1>
          <p class="section-subtitle fade-in-up">
            Fund our open-source AI benchmarks and academic EdTech grants — or collaborate with our engineering team on strategic enterprise technology ventures.
          </p>
        </div>

        <!-- Track Switcher -->
        <div class="track-switcher fade-in-up">
          <button class="track-btn active" data-target="track-donate">💚 Direct Funding & Sponsorship</button>
          <button class="track-btn" data-target="track-partner">🤝 Project Partnership Application</button>
        </div>

        <!-- TRACK 1: Direct Financial Support & Sponsorship -->
        <div id="track-donate" class="support-track-content">
          <div class="section-header" style="text-align: center; margin-bottom: 2.5rem;">
            <h2 class="gradient-text" style="font-size: 1.8rem; font-weight: 700;">Financial Sponsorship Channels</h2>
            <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto 0;">All financial contributions directly support local academic portal deployment, open-source AI models, and student hardware sourcing across Kenya.</p>
          </div>

          <div class="payment-methods-grid fade-in-up">
            
            <!-- Paystack Direct Link Store Card -->
            <div class="payment-card glass-panel" style="border-color: rgba(0, 212, 255, 0.4) !important;">
              <div class="payment-icon-box">💳</div>
              <h3 class="payment-title">Paystack Online Checkout</h3>
              <p style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 1.2rem;">Donate securely via Cards (Visa/Mastercard), M-Pesa automated checkout, or Apple Pay.</p>
              
              <a href="https://paystack.shop/pay/jeasxalcgv" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; padding: 0.75rem; font-size: 0.9rem; justify-content: center; text-decoration: none;">
                Pay via Official Paystack Portal →
              </a>
              <div style="font-size: 0.76rem; color: #00D4FF; margin-top: 0.8rem;">
                🔒 SSL Encrypted • Instant Paystack Verification
              </div>
            </div>

            <!-- M-Pesa Paybill / Till -->
            <div class="payment-card glass-panel">
              <div class="payment-icon-box">📱</div>
              <h3 class="payment-title">M-Pesa Mobile Pay</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Instant mobile money support via M-Pesa Till or Buy Goods.</p>
              <div class="payment-detail">TILL: 9285061</div>
              <p style="font-size: 0.78rem; color: #00D4FF;">Name: RODSTAR TECH DEVS</p>
            </div>

            <!-- Crypto / Web3 -->
            <div class="payment-card glass-panel">
              <div class="payment-icon-box">💎</div>
              <h3 class="payment-title">Crypto & Web3 Grants</h3>
              <p style="font-size: 0.85rem; color: var(--text-light);">Support via USDT (TRC20 / ERC20) or Bitcoin / Ethereum.</p>
              <div class="payment-detail" style="font-size: 0.75rem; word-break: break-all;">Contact for address</div>
              <p style="font-size: 0.78rem; color: #00D4FF;">USDT / ETH / BTC Network</p>
            </div>

          </div>

          <!-- Impact Stories -->
          <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
            <div class="ai-badge-pill" style="margin: 0 auto 1rem;">COMMUNITY IMPACT</div>
            <h2 class="gradient-text" style="font-size: 1.8rem; font-weight: 700;">Where Your Support Goes</h2>
          </div>

          <div class="impact-grid fade-in-up">
            <div class="impact-card glass-panel">
              <h4>🏫 Academic EdTech Grants</h4>
              <p>Funding digital portals, cloud bandwidth, and student portal infrastructure for regional partner institutions in Kenya.</p>
            </div>
            
            <div class="impact-card glass-panel">
              <h4>🤖 Open-Source Local AI Models</h4>
              <p>Benchmarking and fine-tuning open-weights LLMs for African languages and specialized regional domain data.</p>
            </div>

            <div class="impact-card glass-panel">
              <h4>💻 Hardware Sourcing & Refurbishment</h4>
              <p>Supplying refurbished laptops, routers, and computer accessories to underprivileged students and coding bootcamps.</p>
            </div>
          </div>
        </div>

        <!-- TRACK 2: Strategic Project Partnership Request Form (Formspree Integrated) -->
        <div id="track-partner" class="support-track-content" style="display: none;">
          <div class="partnership-card glass-panel fade-in-up">
            <div class="section-header" style="text-align: center; margin-bottom: 1.5rem;">
              <div class="ai-badge-pill">JOINT VENTURES & COLLABORATIONS</div>
              <h2 class="gradient-text" style="font-size: 2rem; font-weight: 700;">Partner With Rodstar Tech Devs</h2>
              <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto 0;">Submit a proposal for joint software engineering, enterprise AI deployment, or academic infrastructure co-sponsorship.</p>
            </div>

            <form id="partnership-form">
              <input type="hidden" name="_subject" value="New Partnership Application - Rodstar Tech Devs">
              
              <div class="partnership-form-grid">
                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Full Name / Authorized Lead *</label>
                  <input type="text" name="name" class="support-input" required placeholder="e.g. Dr. Michael Omondi">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Organization / Institution Name *</label>
                  <input type="text" name="organization" class="support-input" required placeholder="e.g. ElimuNexus / Astral Tech">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Corporate Email Address *</label>
                  <input type="email" name="email" class="support-input" required placeholder="e.g. partner@enterprise.com">
                </div>

                <div>
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Partnership Track *</label>
                  <select name="partnership_track" class="support-select" required>
                    <option value="Joint AI & Neural Venture">🤖 Joint AI & Neural Venture</option>
                    <option value="Academic EdTech Co-Sponsorship">🏫 Academic EdTech Co-Sponsorship</option>
                    <option value="Enterprise Cloud Deployment">☁️ Enterprise Cloud Deployment</option>
                    <option value="Hardware Sourcing Collaboration">💻 Hardware Sourcing Collaboration</option>
                  </select>
                </div>

                <div class="form-group-full">
                  <label style="font-size: 0.85rem; color: var(--text-light); font-weight: 600; margin-bottom: 0.4rem; display: block;">Project Proposal / Collaboration Abstract *</label>
                  <textarea name="message" class="support-textarea" rows="5" required placeholder="Describe your proposed project goals, required technical scope, estimated budget range, and timeline expectations..."></textarea>
                </div>
              </div>

              <div style="margin-top: 2rem; text-align: center;">
                <button type="submit" class="btn btn-primary" style="padding: 0.85rem 2.2rem; font-size: 0.95rem;">
                  Submit Partnership Proposal →
                </button>
              </div>
              
              <div id="partnership-status" style="margin-top: 1.2rem; text-align: center; font-size: 0.88rem; display: none;"></div>
            </form>
          </div>
        </div>

      </div>
    </div>
  `

  setupSupportTrackSwitcher()
  setupPartnershipForm()
}

function setupSupportTrackSwitcher() {
  const btns = document.querySelectorAll('.track-btn')
  const tracks = document.querySelectorAll('.support-track-content')

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const targetId = btn.getAttribute('data-target')
      tracks.forEach(track => {
        if (track.id === targetId) {
          track.style.display = 'block'
        } else {
          track.style.display = 'none'
        }
      })
    })
  })
}

function setupPartnershipForm() {
  const form = document.querySelector('#partnership-form')
  const status = document.querySelector('#partnership-status')
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgvayno'

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()

      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = 'Submitting Proposal...'
      submitBtn.disabled = true

      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if (res.ok) {
          if (status) {
            status.style.display = 'block'
            status.style.color = '#00D4FF'
            status.textContent = '✔ Thank you! Your partnership proposal has been submitted successfully. Our executive team will review and reply within 24 hours.'
          }
          form.reset()
        } else {
          if (status) {
            status.style.display = 'block'
            status.style.color = '#FF5F56'
            status.textContent = '✖ There was an issue submitting your proposal. Please try again or email us directly at enquiries@rodstartechdevs.co.ke.'
          }
        }
      } catch (err) {
        console.error('Formspree network error', err)
        if (status) {
          status.style.display = 'block'
          status.style.color = '#FF5F56'
          status.textContent = '✖ Network connection error. Please check your internet connection and try again.'
        }
      } finally {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }
}
