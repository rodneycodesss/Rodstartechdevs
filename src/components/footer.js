import './styles/footer.css'

export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <img src="/RODSTAR.png" alt="Rodstar Logo" width="120" height="120" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem; display: block; box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);" loading="lazy" decoding="async">
            <p>We are a minimalist digital infrastructure company. Delivering premium managed hosting, enterprise emails, custom domains, and bespoke software systems designed for scale.</p>
            <div class="social-links" style="display: flex; align-items: center; gap: 1rem;">
              <a href="#" class="social-icon" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><circle cx="12" cy="12" r="3" fill="white"></circle><circle cx="18" cy="6" r="1" fill="white"></circle></svg></a>
              <a href="#" class="social-icon" aria-label="X" style="display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block; margin: 0; padding: 0;">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok" style="display: flex; align-items: center; justify-content: center;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 9.5c-.5-.2-1-.4-1.5-.3V12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.3 0 .6.05.9.1V6.5c-.6-.1-1.1-.15-1.7-.15-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6v-2.5c1.1.8 2.4 1.3 3.8 1.4v-2.2c-.5 0-1-.05-1.5-.2z"></path></svg></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Infrastructure</h3>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Managed Web Hosting</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Enterprise Emails</a>
            <a href="https://rodstarhosting.shop" class="nav-link" target="_blank" rel="noopener noreferrer">Custom Domains</a>
            <a href="/services" class="nav-link">Cloud Deployments</a>
            <a href="/services" class="nav-link">System Architecture</a>
          </div>
          
          <div class="footer-section">
            <h3>Company</h3>
            <a href="/about" class="nav-link">About Us</a>
            <a href="/team" class="nav-link">Engineering Team</a>
            <a href="/portfolio" class="nav-link">Portfolio</a>
            <a href="/development" class="nav-link">Development</a>
            <a href="/shop" class="nav-link">Shop</a>
            <a href="/contact" class="nav-link">Contact Sales</a>
          </div>
          
          <div class="footer-section">
            <h3>Reach Out</h3>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22 6 12 13 2 6"></polyline></svg> <a href="mailto:enquiries@rodstartechdevs.co.ke" style="display:inline;">enquiries@rodstartechdevs.co.ke</a></p>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <a href="tel:+254780482290" style="display:inline;">+254780482290</a></p>
            <p style="display: flex; align-items: center; gap: 8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Nairobi, Kenya (Remote)</p>
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266l-.335.194-.347.059 1.327 3.849.274-.447c1.203-1.73 3.02-2.804 5.031-2.804 3.165 0 5.742 2.573 5.742 5.73 0 1.575-.548 3.06-1.55 4.286l.3.292.045.035c.78.774 1.217 1.814 1.217 2.932 0 3.077-2.512 5.59-5.589 5.59-3.076 0-5.589-2.512-5.589-5.589 0-2.049.979-3.977 2.631-5.21l.287-.213.046-.034c.3-.222.432-.632.328-1.01l-1.298-3.76-.358.057C5.64 3.05 2.767 5.9 2.767 9.467c0 3.81 3.1 6.91 6.91 6.91s6.91-3.1 6.91-6.91c0-3.167-2.29-5.834-5.348-6.51l-.334-.059z"></path></svg> Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Rodstar Tech. All rights reserved.</p>
          <div style="display: flex; gap: 2rem;">
            <a href="/privacy" class="nav-link">Privacy Policy</a>
            <a href="/terms" class="nav-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
}