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
            <p><a href="#services">Web Development</a></p>
            <p><a href="#services">Mobile App Development</a></p>
            <p><a href="#services">UI/UX Design</a></p>
            <p><a href="#services">Cloud Solutions</a></p>
            <p><a href="#services">Custom Software</a></p>
          </div>
          
          <div class="footer-section">
            <h3>Company</h3>
            <p><a href="#about">About Us</a></p>
            <p><a href="#team">Our Team</a></p>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>📧 hello@rodstartechdevs.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Tech Street, Digital City, DC 12345</p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Rodstar Tech Devs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
}