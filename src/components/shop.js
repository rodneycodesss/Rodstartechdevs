import './styles/shop.css'

const categories = [
  {
    title: 'Laptops & Desktops',
    blurb: 'Corporate-grade laptops, high-performance developer workstations, and ultrabooks from top-tier brands (HP, Dell, Lenovo, Apple).',
    tag: 'Sourcing & Supply',
    icon: '💻',
    hue: 'linear-gradient(135deg, rgba(0, 123, 255, 0.25), rgba(0, 0, 0, 0.6))',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Networking Devices',
    blurb: 'Enterprise switches, high-speed routers, access points, network cabinets, and structured cabling solutions.',
    tag: 'Infrastructure',
    icon: '🌐',
    hue: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 40, 80, 0.7))',
    image: 'https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Computer Accessories',
    blurb: 'Ergonomic keyboards, gaming/office mice, external SSDs, USB-C hubs, and productivity accessories.',
    tag: 'Workspace',
    icon: '🔌',
    hue: 'linear-gradient(135deg, rgba(91, 180, 255, 0.2), rgba(0, 0, 0, 0.6))',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Printers & Copiers',
    blurb: 'Heavy-duty print stations, smart ink-tank printers, scanner-copier combos, and genuine toners/consumables.',
    tag: 'Office Equipment',
    icon: '🖨️',
    hue: 'linear-gradient(135deg, rgba(0, 86, 179, 0.3), rgba(0, 0, 0, 0.65))',
    image: 'https://images.pexels.com/photos/1683498/pexels-photo-1683498.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'CCTV & Security',
    blurb: 'Smart IP surveillance systems, HD cameras, biometric access control terminals, and electronic locks.',
    tag: 'Security & Surveillance',
    icon: '🛡️',
    hue: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(26, 10, 46, 0.65))',
    image: 'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Other Tech & Backups',
    blurb: 'Uninterruptible Power Supplies (UPS), voltage regulators, smart IoT accessories, and custom gadgets.',
    tag: 'Power & IoT',
    icon: '⚡',
    hue: 'linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(22, 33, 62, 0.7))',
    image: 'https://images.pexels.com/photos/45082/pexels-photo-45082.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

const products = [
  {
    id: 'mikrotik-rb951',
    name: 'Mikrotik RB951',
    price: 7500,
    category: 'Routers & GPON',
    desc: 'High performance wireless SOHO AP with a new generation Atheros CPU and robust processing power.',
    image: '/mikrotik_router.jpg'
  },
  {
    id: 'f3-tenda',
    name: 'F3 Tenda',
    price: 950,
    category: 'Routers & GPON',
    desc: '300Mbps wireless router designed for smart home networking life. Easy setup and high stability.',
    image: '/tenda_router.jpg'
  },
  {
    id: 'cat6-indoor',
    name: 'Cat 6 Indoor Cable',
    price: 4000,
    category: 'Cables',
    desc: 'High-speed, high-quality copper indoor network cable (305m roll) for local networking.',
    image: '/cat6_cable.png'
  },
  {
    id: 'cat6-outdoor',
    name: 'Cat 6 Outdoor Cable',
    price: 6000,
    category: 'Cables',
    desc: 'Weatherproof, double-shielded outdoor network cable (305m roll) for heavy-duty networking.',
    image: '/cat6_cable.png'
  },
  {
    id: 'tape-small',
    name: 'Insulating Tape (Small)',
    price: 70,
    category: 'Accessories & Management',
    desc: 'Durable electrical insulating tape for wire wrapping and safe splicing.',
    image: '/electrical_tape.png'
  },
  {
    id: 'tape-big',
    name: 'Insulating Tape (Large)',
    price: 130,
    category: 'Accessories & Management',
    desc: 'High-grade professional electrical insulating tape for heavy-duty wire protection.',
    image: '/electrical_tape.png'
  },
  {
    id: 'adapter-small',
    name: 'Adapter Box (Small)',
    price: 300,
    category: 'Accessories & Management',
    desc: 'Small protective adapter casing/junction box for clean node connections.',
    image: '/adapter_box.png'
  },
  {
    id: 'adapter-big',
    name: 'Adapter Box (Big)',
    price: 350,
    category: 'Accessories & Management',
    desc: 'Large weatherproof adapter box/junction box for enclosing connectors and splitters.',
    image: '/adapter_box.png'
  },
  {
    id: 'gpon',
    name: 'GPON ONU',
    price: 1350,
    category: 'Routers & GPON',
    desc: 'Gigabit Passive Optical Network terminal for high-speed fiber-to-the-home internet access.',
    image: '/gpon_onu.jpg'
  },
  {
    id: 'cable-tie-small',
    name: 'Cable Ties (Small Size)',
    price: 180,
    category: 'Accessories & Management',
    desc: 'Pack of small nylon cable zip ties for neat wire and cable management.',
    image: '/cable_ties.jpg'
  },
  {
    id: 'cable-tie-big',
    name: 'Cable Ties (Big Size)',
    price: 250,
    category: 'Accessories & Management',
    desc: 'Pack of large, high-tensile strength nylon cable ties for securing cables.',
    image: '/cable_ties.jpg'
  },
  {
    id: 'switch-8port',
    name: 'Switch 8 Port',
    price: 1200,
    category: 'Switches',
    desc: 'Compact 8-port Ethernet switch for fast desktop wired network expansion.',
    image: '/network_switch.jpg'
  },
  {
    id: 'switch-gigaport',
    name: 'Gigaport Switch',
    price: 2450,
    category: 'Switches',
    desc: 'High-speed Gigabit Ethernet switch for zero-bottleneck data transfer across nodes.',
    image: '/network_switch_giga.jpg'
  },
  {
    id: 'extension-standard',
    name: 'Power Extension',
    price: 450,
    category: 'Accessories & Management',
    desc: 'Multi-socket power extension strip with surge protection for office or home setups.',
    image: '/power_extension.jpg'
  },
  {
    id: 'extension-10m',
    name: 'Power Extension (10m)',
    price: 1300,
    category: 'Accessories & Management',
    desc: 'Heavy-duty 10-meter long power extension cable with multiple sockets and surge protector.',
    image: '/power_extension_10m.jpg'
  }
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

  const capabilitiesHtml = categories
    .map(
      (c) => `
    <article class="shop-category-card fade-in-up">
      <div class="shop-card-visual" style="position: relative;">
        <img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; pointer-events: none;" loading="lazy">
        <div style="position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.65)); pointer-events: none;"></div>
        <div class="shop-card-icon" style="position: relative; z-index: 1;" aria-hidden="true">${c.icon}</div>
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
            <a href="#catalog-section" class="btn btn-primary">Browse Catalog</a>
            <a href="#order-form-section" class="btn btn-outline">Custom Sourcing Request</a>
          </div>
        </div>
      </section>

      <section class="shop-catalog section" id="catalog-section" aria-labelledby="shop-catalog-heading">
        <div class="container">
          <div class="shop-section-head fade-in-up">
            <h2 id="shop-catalog-heading">Available Stock & Hardware</h2>
            <p>Browse our in-stock items ready for immediate sourcing and local delivery across Kenya.</p>
          </div>
          
          <div class="shop-catalog-controls fade-in-up">
            <div class="search-bar-wrapper">
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="productSearch" placeholder="Search hardware, brands, specs...">
            </div>
            
            <div class="filter-buttons-wrapper">
              <button class="filter-btn active" data-category="All">All</button>
              <button class="filter-btn" data-category="Routers & GPON">Routers & GPON</button>
              <button class="filter-btn" data-category="Cables">Cables</button>
              <button class="filter-btn" data-category="Switches">Switches</button>
              <button class="filter-btn" data-category="Accessories & Management">Accessories & Management</button>
            </div>
          </div>

          <div class="shop-products-grid" id="product-grid">
            <!-- Filtered products will render here -->
          </div>
        </div>
      </section>

      <section class="shop-workspace section" id="order-form-section" aria-labelledby="shop-workspace-heading">
        <div class="container">
          <div class="shop-grid-layout">
            <div class="shop-catalog-info">
              <div class="shop-section-head fade-in-up" style="text-align: left; margin-bottom: 2rem;">
                <h2 id="shop-workspace-heading">Sourcing Capabilities</h2>
                <p>Browse our core capabilities. We handle everything from bulk business setups to custom individual accessories.</p>
              </div>
              <div class="shop-categories-grid">
                ${capabilitiesHtml}
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

  // Interactive Product Catalog Filtering
  const productGrid = document.querySelector('#product-grid')
  const searchInput = document.querySelector('#productSearch')
  const filterButtons = document.querySelectorAll('.filter-btn')

  let activeCategory = 'All'
  let searchQuery = ''

  function renderFilteredProducts() {
    const filtered = products.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                            p.desc.toLowerCase().includes(searchQuery) ||
                            p.category.toLowerCase().includes(searchQuery)
      return matchesCategory && matchesSearch
    })

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div class="shop-no-results fade-in-up animate-in">
          <p>No products found matching your search. Please submit a custom request below.</p>
        </div>
      `
      return
    }

    productGrid.innerHTML = filtered.map(p => `
      <article class="shop-product-card fade-in-up animate-in">
        <div class="product-card-image-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="product-category-tag">${p.category}</span>
        </div>
        <div class="product-card-body">
          <h3>${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">KES ${p.price.toLocaleString()}</span>
            <button class="btn btn-primary product-action-btn" data-name="${p.name}" data-price="${p.price}">Inquire / Order</button>
          </div>
        </div>
      </article>
    `).join('')

    bindProductActionButtons()
  }

  function bindProductActionButtons() {
    document.querySelectorAll('.product-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name')
        const price = e.target.getAttribute('data-price')
        
        const orderItemsField = document.querySelector('#orderItems')
        const quantityField = document.querySelector('#orderQuantity')
        
        if (orderItemsField && quantityField) {
          orderItemsField.value = `Requested Product: ${name}\nUnit Price: KES ${parseInt(price).toLocaleString()}`
          quantityField.value = '1'
          
          const orderSection = document.querySelector('#order-form-section')
          if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth' })
            
            const orderCard = orderSection.querySelector('.urgent-order-card')
            if (orderCard) {
              orderCard.classList.add('highlight-pulse')
              setTimeout(() => {
                orderCard.classList.remove('highlight-pulse')
              }, 2000)
            }
          }
        }
      })
    })
  }

  // Bind Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim()
    renderFilteredProducts()
  })

  // Bind Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      activeCategory = btn.getAttribute('data-category')
      renderFilteredProducts()
    })
  })

  // Initial render
  renderFilteredProducts()

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
    
    const phone = formData.get('phone')
    const company = formData.get('company') || 'N/A'
    const urgency = formData.get('urgency')
    const quantity = formData.get('quantity')
    const location = formData.get('location')
    const message = formData.get('message')

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
