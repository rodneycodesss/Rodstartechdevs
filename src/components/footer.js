export function setupFooter() {
  const footer = document.querySelector('#footer')
  
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Rodstar Tech Devs</h3>
            <p>We are a leading software development company specializing in web applications, mobile apps, and custom solutions that drive business growth.</p>
          </div>
          
          <div class="footer-section">
            <h3>Services</h3>
            <p><a href="/services">Web Development</a></p>
            <p><a href="/services">Mobile App Development</a></p>
            <p><a href="/services">UI/UX Design</a></p>
            <p><a href="/services">Cloud Solutions</a></p>
            <p><a href="/services">Custom Software</a></p>
          </div>
          
          <div class="footer-section">
            <h3>Company</h3>
            <p><a href="/about">About Us</a></p>
            <p><a href="/team">Our Team</a></p>
            <p><a href="/portfolio">Portfolio</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>📧 <a href="mailto:rodstartechdevs@gmail.com">rodstartechdevs@gmail.com</a></p>
            <p>📞 <a href="tel:+254780482290">+254780482290</a></p>
            <a href="https://wa.me/254780482290" class="whatsapp-btn" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
            <p>📍 Nairobi, Kenya (Remote)</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Rodstar Tech Devs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
}