import './styles/shop.css'

const categories = [
  {
    title: 'Laptops & Desktops',
    blurb: 'Corporate-grade laptops, high-performance developer workstations, and ultrabooks from top-tier brands (HP, Dell, Lenovo, Apple).',
    tag: 'Sourcing & Supply',
    icon: '💻',
    hue: 'linear-gradient(135deg, rgba(0, 123, 255, 0.25), rgba(0, 0, 0, 0.6))',
  },
  {
    title: 'Networking Devices',
    blurb: 'Enterprise switches, high-speed routers, access points, network cabinets, and structured cabling solutions.',
    tag: 'Infrastructure',
    icon: '🌐',
    hue: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 40, 80, 0.7))',
  },
  {
    title: 'Computer Accessories',
    blurb: 'Ergonomic keyboards, gaming/office mice, external SSDs, USB-C hubs, and productivity accessories.',
    tag: 'Workspace',
    icon: '🔌',
    hue: 'linear-gradient(135deg, rgba(91, 180, 255, 0.2), rgba(0, 0, 0, 0.6))',
  },
  {
    title: 'Printers & Copiers',
    blurb: 'Heavy-duty print stations, smart ink-tank printers, scanner-copier combos, and genuine toners/consumables.',
    tag: 'Office Equipment',
    icon: '🖨️',
    hue: 'linear-gradient(135deg, rgba(0, 86, 179, 0.3), rgba(0, 0, 0, 0.65))',
  },
  {
    title: 'CCTV & Security',
    blurb: 'Smart IP surveillance systems, HD cameras, biometric access control terminals, and electronic locks.',
    tag: 'Security & Surveillance',
    icon: '🛡️',
    hue: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(26, 10, 46, 0.65))',
  },
  {
    title: 'Other Tech & Backups',
    blurb: 'Uninterruptible Power Supplies (UPS), voltage regulators, smart IoT accessories, and custom gadgets.',
    tag: 'Power & IoT',
    icon: '⚡',
    hue: 'linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(22, 33, 62, 0.7))',
  },
]

function addShopScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.shop-page .fade-in-up').forEach((el) => observer.observe(el))
}

export function setupShop() {
  const shop = document.querySelector('#shop')

  const cardsHtml = categories
    .map(
      (c) => `
    <article class="shop-category-card fade-in-up">
      <div class="shop-card-visual" style="background: ${c.hue};">
        <div class="shop-card-icon" aria-hidden="true">${c.icon}</div>
        <div class="shop-card-placeholder" aria-hidden="true"></div>
      </div>
      <h3>${c.title}</h3>
      <p>${c.blurb}</p>
      <div class="shop-card-meta">
        <span class="shop-tag">${c.tag}</span>
        <span class="shop-tag" style="opacity:0.75;">Coming soon</span>
      </div>
    </article>
  `
    )
    .join('')

  shop.innerHTML = `
    <div class="shop-page">
      <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('/home_network.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
          <p class="shop-hero-badge fade-in-up">Rodstar Hardware · Supply & Sourcing</p>
          <h1 class="shop-hero-title fade-in-up">Premium Tech Sourcing & Hardware</h1>
          <p class="shop-hero-lead fade-in-up">We supply digital gadgets, laptops, computer accessories, networking equipment, printers, and other tech products for businesses and individuals across Kenya. Partnering with top-tier suppliers to deliver quality at scale.</p>
          <div class="shop-hero-ctas fade-in-up">
            <a href="#order-form-section" class="btn btn-primary">Place Urgent Order</a>
            <a href="/contact" class="btn btn-outline nav-link">Contact Sourcing Team</a>
          </div>
        </div>
      </section>

      <section class="shop-construction section" aria-labelledby="shop-construction-heading">
        <div class="container">
          <div class="shop-construction-inner fade-in-up">
            <div class="shop-construction-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-6h6v6"/></svg>
            </div>
            <h2 id="shop-construction-heading">Catalog Sourcing In Progress 📦</h2>
            <p>Our online storefront and interactive product catalog are updating shortly. In the meantime, we are fully active in sourcing and supply operations. You can place urgent hardware, laptop, copier, or digital gadget requests directly below using our urgent order request form.</p>
          </div>
        </div>
      </section>

      <section class="shop-workspace section" id="order-form-section" aria-labelledby="shop-workspace-heading">
        <div class="container">
          <div class="shop-grid-layout">
            <div class="shop-catalog-info">
              <div class="shop-section-head fade-in-up" style="text-align: left; margin-bottom: 2rem;">
                <h2 id="shop-workspace-heading">Sourcing Capabilities</h2>
                <p>Browse our core categories. We handle everything from bulk business setups to custom individual accessories.</p>
              </div>
              <div class="shop-categories-grid">
                ${cardsHtml}
              </div>
            </div>

            <div class="shop-form-wrapper fade-in-up">
              <div class="urgent-order-card">
                <h3>Urgent Hardware Order Form</h3>
                <p>Need tech gadgets, laptops, or equipment urgently? Tell us your specifications, quantity, and delivery window, and our sourcing department will respond immediately with availability and pricing options.</p>
                
                <form class="urgent-order-form" id="urgentOrderForm">
                  <div id="orderStatus" class="contact-status" aria-live="polite" aria-atomic="true"></div>
                  
                  <div class="form-group">
                    <label for="orderName">Full Name</label>
                    <input type="text" id="orderName" name="name" required placeholder="Your full name">
                  </div>
                  
                  <div class="form-group">
                    <label for="orderEmail">Email Address</label>
                    <input type="email" id="orderEmail" name="email" required placeholder="your.email@example.com">
                  </div>

                  <div class="form-group">
                    <label for="orderPhone">Phone Number / WhatsApp</label>
                    <input type="tel" id="orderPhone" name="phone" required placeholder="e.g. +254 700 000 000">
                  </div>
                  
                  <div class="form-group">
                    <label for="orderCompany">Company / Organization (Optional)</label>
                    <input type="text" id="orderCompany" name="company" placeholder="e.g. Acme Tech Kenya">
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="orderUrgency">Delivery Urgency</label>
                      <select id="orderUrgency" name="urgency" required>
                        <option value="" disabled selected>Select urgency...</option>
                        <option value="Immediate (Within 24 Hours)">Immediate (Within 24 Hours)</option>
                        <option value="Urgent (Within 3 Days)">Urgent (Within 3 Days)</option>
                        <option value="Standard (Within 1 Week)">Standard (Within 1 Week)</option>
                        <option value="Bulk Sourcing / Sourcing Details Needed">Bulk Sourcing / Sourcing Details Needed</option>
                      </select>
                    </div>
                    
                    <div class="form-group">
                      <label for="orderQuantity">Quantity Needed</label>
                      <input type="number" id="orderQuantity" name="quantity" min="1" required placeholder="e.g. 5">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="orderItems">Items & Specifications Requested</label>
                    <textarea id="orderItems" name="message" required placeholder="List laptops, accessories, printers, specs, or models you need..."></textarea>
                  </div>

                  <div class="form-group">
                    <label for="orderLocation">Delivery / Shipping Location</label>
                    <input type="text" id="orderLocation" name="location" required placeholder="e.g. Nairobi CBD, Westlands, Mombasa">
                  </div>

                  <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Submit Sourcing Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `

  addShopScrollAnimations()

  // Handle urgent order form submission
  const form = document.querySelector('#urgentOrderForm')
  const status = document.querySelector('#orderStatus')
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvgvayno'

  let notificationTimer = null
  function showNotification(message, type = 'success', timeout = 5000) {
    if (!status) return
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

    if (timeout > 0) {
      notificationTimer = setTimeout(remove, timeout)
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Sending Request...'
    submitBtn.disabled = true

    const formData = new FormData(form)
    
    // Construct rich text message for Formspree to capture phone, location, urgency, and quantity clearly
    const phone = formData.get('phone')
    const company = formData.get('company') || 'N/A'
    const urgency = formData.get('urgency')
    const quantity = formData.get('quantity')
    const location = formData.get('location')
    const message = formData.get('message')

    // Formspree accepts regular form inputs. We submit all parameters
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: `Urgent Hardware Sourcing Request: ${urgency}`,
      company: company,
      phone: phone,
      urgency: urgency,
      quantity: quantity,
      location: location,
      message: `
[URGENT SHOP ORDER REQUEST]
----------------------------------
Company: ${company}
Phone/WhatsApp: ${phone}
Urgency Level: ${urgency}
Quantity Needed: ${quantity}
Delivery Location: ${location}

Requested Items & Specs:
${message}
      `.trim()
    }

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
        showNotification('Thank you — your sourcing request has been submitted. Our team will contact you shortly!', 'success', 7000)
        form.reset()
      } else {
        const payload = await res.json().catch(() => null)
        console.error('Formspree order error', res.status, payload)
        showNotification('There was a problem submitting your request. Please try again or contact us directly.', 'error', 8000)
      }
    } catch (err) {
      console.error('Network error while submitting order', err)
      showNotification('Network error. Please check your internet connection and try again.', 'error', 8000)
    } finally {
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }
  })
}
