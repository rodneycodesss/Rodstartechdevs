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
                <p> rodstartechdevs@gmail.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>+254 780 48 22 90</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>Office</h4>
                <p> Nairobi, Kenya</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">⏰</div>
              <div class="contact-details">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <form class="contact-form" id="contactForm">
            <div id="contactStatus" class="contact-status" aria-live="polite" aria-atomic="true"></div>
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
  const status = document.querySelector('#contactStatus')
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgvayno'

  // Notification helper (accessible, dismissible, auto-hide)
  let notificationTimer = null
  function showNotification(message, type = 'success', timeout = 5000) {
    if (!status) return
    // clear existing timer
    if (notificationTimer) {
      clearTimeout(notificationTimer)
      notificationTimer = null
    }

    status.innerHTML = `
      <div class="notification notification--${type}" role="status">
        <div class="notification__content">${message}</div>
        <button class="notification__close" aria-label="Dismiss notification">&times;</button>
      </div>
    `

    const notif = status.querySelector('.notification')
    const closeBtn = status.querySelector('.notification__close')

    function remove() {
      if (!status) return
      status.innerHTML = ''
      if (notificationTimer) {
        clearTimeout(notificationTimer)
        notificationTimer = null
      }
    }

    closeBtn && closeBtn.addEventListener('click', remove)

    // Auto-hide after timeout
    if (timeout > 0) {
      notificationTimer = setTimeout(remove, timeout)
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Sending...'
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
        // Formspree accepted the submission
        showNotification('Thank you — your message has been sent!', 'success', 6000)
        form.reset()
      } else {
        // Try to read response for debugging
        const payload = await res.json().catch(() => null)
        console.error('Formspree error', res.status, payload)
        showNotification('There was a problem sending your message. Please try again later.', 'error', 8000)
      }
    } catch (err) {
      console.error('Network error while sending form', err)
      showNotification('Network error. Please check your connection and try again.', 'error', 8000)
    } finally {
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }
  })
}