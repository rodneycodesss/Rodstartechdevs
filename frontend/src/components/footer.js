import './styles/footer.css'

export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  footer.innerHTML = `
    <footer class="footer" id="interactive-footer">
      <!-- Cursor-Tracking Dynamic Spotlight Canvas Background -->
      <canvas id="footer-spotlight-canvas" class="footer-spotlight-canvas"></canvas>
      
      <div class="container" style="position: relative; z-index: 2;">
        
        <!-- Live System Operational Pill -->
        <div style="display: flex; justify-content: center; margin-bottom: 3.5rem;">
          <div class="ai-badge-pill" style="margin-bottom: 0;">
            <span class="pulse-dot"></span> RODSTAR AI WORKFORCE MESH • 99.99% SLA ONLINE
          </div>
        </div>

        <div class="footer-content">
          <!-- Brand Info -->
          <div class="footer-section">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.2rem; flex-wrap: wrap;">
              <img src="/RODSTAR.png" alt="Rodstar Tech Devs Logo" width="50" height="50" style="width: 50px; height: 50px; min-width: 50px; min-height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4); display: block; flex-shrink: 0;" onerror="this.onerror=null; this.src='RODSTAR.png';" loading="eager" fetchpriority="high">
              <span style="font-size: 1.35rem; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; word-break: break-word;">RODSTAR TECH DEVS</span>
            </div>
            
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1.5rem; word-break: break-word;">
              Powering Growth Through Technology. Enterprise digital infrastructure, custom AI engineering, and the Rodstar AI Freelancer Network for global remote work opportunities.
            </p>

            <!-- Horizontally Aligned Social Links Mapped to Official Profiles -->
            <div class="social-links">
              <a href="https://www.instagram.com/rodstartechdevs" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://x.com/rodstartechdevs" class="social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@rodstartechdevs" class="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer" title="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 9.5c-.5-.2-1-.4-1.5-.3V12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.3 0 .6.05.9.1V6.5c-.6-.1-1.1-.15-1.7-.15-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6v-2.5c1.1.8 2.4 1.3 3.8 1.4v-2.2c-.5 0-1-.05-1.5-.2z"></path></svg>
              </a>
              <a href="https://github.com/rodstartechdevs" class="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/rodstartechdevs" class="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Rodstar AI & Freelancer Network -->
          <div class="footer-section">
            <h3>Rodstar AI Network</h3>
            <a href="/ai/freelancers" class="nav-link" style="color: #00D4FF !important; font-weight: 700;">🚀 Freelancer Network</a>
            <a href="/ai/freelancers/apply" class="nav-link" style="color: #27C93F !important; font-weight: 700;">📝 Apply to Join</a>
            <a href="/ai/freelancers#career-tracks" class="nav-link">🎯 75+ Career Tracks</a>
            <a href="/freelancer/login" class="nav-link">🔑 Portal Login</a>
            <a href="/verify/certificate" class="nav-link">🎓 Verify Certificate</a>
            <a href="/ai-hub" class="nav-link">🤖 AI Solutions Hub</a>
          </div>
          
          <!-- Column 3: Solutions & Company -->
          <div class="footer-section">
            <h3>Company & Support</h3>
            <a href="/support" class="nav-link" style="color: #27C93F !important; font-weight: 700;">💚 Support & Partner</a>
            <a href="/blog" class="nav-link">The Neural Ledger (Blog)</a>
            <a href="/about" class="nav-link">About Us</a>
            <a href="/team" class="nav-link">Engineering Team</a>
            <a href="/portfolio" class="nav-link">Portfolio</a>
            <a href="/development" class="nav-link">Development</a>
            <a href="/shop" class="nav-link">Hardware Shop</a>
            <a href="/pricing" class="nav-link">Pricing & Plans</a>
          </div>
          
          <!-- Column 4: Contact Connectors -->
          <div class="footer-section">
            <h3>Contact Sales</h3>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; word-break: break-all;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg> 
              <a href="mailto:enquiries@rodstartechdevs.co.ke" style="display:inline; color: var(--text-light); word-break: break-all;">enquiries@rodstartechdevs.co.ke</a>
            </p>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 
              <a href="tel:+254780482290" style="display:inline; color: var(--text-light);">+254 780 482 290</a>
            </p>
            <p style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--text-light);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2" style="flex-shrink: 0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
              Nairobi, Kenya
            </p>
            
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266l-.335.194-.347.059 1.327 3.849.274-.447c1.203-1.73 3.02-2.804 5.031-2.804 3.165 0 5.742 2.573 5.742 5.73 0 1.575-.548 3.06-1.55 4.286l.3.292.045.035c.78.774 1.217 1.814 1.217 2.932 0 3.077-2.512 5.59-5.589 5.59-3.076 0-5.589-2.512-5.589-5.589 0-2.049.979-3.977 2.631-5.21l.287-.213.046-.034c.3-.222.432-.632.328-1.01l-1.298-3.76-.358.057C5.64 3.05 2.767 5.9 2.767 9.467c0 3.81 3.1 6.91 6.91 6.91s6.91-3.1 6.91-6.91c0-3.167-2.29-5.834-5.348-6.51l-.334-.059z"></path></svg> Instant WhatsApp Chat
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Rodstar Tech Devs. All rights reserved.</p>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <a href="/privacy" class="nav-link">Privacy Policy</a>
            <a href="/terms" class="nav-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `

  initFooterSpotlight()
}

function initFooterSpotlight() {
  const footerContainer = document.querySelector('#interactive-footer')
  const canvas = document.querySelector('#footer-spotlight-canvas')
  if (!footerContainer || !canvas) return

  const ctx = canvas.getContext('2d')

  let width = (canvas.width = footerContainer.clientWidth)
  let height = (canvas.height = footerContainer.clientHeight)

  let mouseX = width / 2
  let mouseY = height / 2
  let targetX = width / 2
  let targetY = height / 2
  let isHovered = false

  function resizeCanvas() {
    if (!footerContainer || !canvas) return
    width = canvas.width = footerContainer.clientWidth
    height = canvas.height = footerContainer.clientHeight
  }

  window.addEventListener('resize', resizeCanvas)

  footerContainer.addEventListener('mousemove', (e) => {
    const rect = footerContainer.getBoundingClientRect()
    targetX = e.clientX - rect.left
    targetY = e.clientY - rect.top
    isHovered = true
  })

  footerContainer.addEventListener('mouseleave', () => {
    isHovered = false
  })

  function render() {
    if (!document.body.contains(canvas)) return

    mouseX += (targetX - mouseX) * 0.08
    mouseY += (targetY - mouseY) * 0.08

    ctx.clearRect(0, 0, width, height)

    if (isHovered || Math.abs(targetX - mouseX) > 1) {
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 380)
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.22)')
      gradient.addColorStop(0.4, 'rgba(0, 82, 255, 0.12)')
      gradient.addColorStop(0.8, 'rgba(3, 7, 18, 0.05)')
      gradient.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    requestAnimationFrame(render)
  }

  render()
}