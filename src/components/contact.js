export function setupContact() {
  const contact = document.querySelector('#contact')
  
  contact.innerHTML = `
    <section class="contact section">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Ready to start your next project? Let's discuss how we can help bring your ideas to life.</p>
        
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's Talk</h3>
            <p>We'd love to hear about your project and discuss how we can help you achieve your goals. Get in touch with us today!</p>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>hello@rodstartechdevs.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>Office</h4>
                <p>123 Tech Street, Digital City, DC 12345</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">⏰</div>
              <div class="contact-details">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="company">Company (Optional)</label>
              <input type="text" id="company" name="company">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `
  
  // Handle form submission
  const form = document.querySelector('#contactForm')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true
    
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.')
      form.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}