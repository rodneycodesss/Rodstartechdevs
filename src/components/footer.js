import './styles/footer.css'

export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <img src="/src/public/RODSTAR.png" alt="Rodstar Logo" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem; display: block; box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);">
            <p>We are a minimalist digital infrastructure company. Delivering premium managed hosting, enterprise emails, custom domains, and bespoke software systems designed for scale.</p>
            <div class="social-links" style="display: flex; align-items: center; gap: 1rem;">
              <a href="#" class="social-icon" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center;"><i class="fab fa-instagram" style="font-size: 18px; margin: 0; padding: 0; line-height: 1;"></i></a>
              <a href="#" class="social-icon" aria-label="X" style="display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display: block; margin: 0; padding: 0;">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="TikTok" style="display: flex; align-items: center; justify-content: center;"><i class="fab fa-tiktok" style="font-size: 18px; margin: 0; padding: 0; line-height: 1;"></i></a>
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
            <a href="/contact" class="nav-link">Contact Sales</a>
          </div>
          
          <div class="footer-section">
            <h3>Reach Out</h3>
            <p><i class="far fa-envelope" style="margin-right: 8px;"></i> <a href="mailto:rodstartechdevs@gmail.com" style="display:inline;">rodstartechdevs@gmail.com</a></p>
            <p><i class="fas fa-phone-alt" style="margin-right: 8px;"></i> <a href="tel:+254780482290" style="display:inline;">+254780482290</a></p>
            <p><i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i> Nairobi, Kenya (Remote)</p>
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i> Chat on WhatsApp
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