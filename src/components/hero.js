import './styles/hero.css'

export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.style.position = "relative"
  hero.style.width = "100%"
  hero.style.overflow = "hidden"
  
  hero.innerHTML = `
    <!-- Dynamic Cyber Canvas (All-Round Cyber Particle Overlay) -->
    <canvas id="hero-cyber-canvas" class="hero-cyber-canvas"></canvas>
    
    <div class="hero-overlay"></div>
    <div class="glow-orb-1"></div>
    <div class="glow-orb-2"></div>

    <!-- 1. Main Hero Split Section -->
    <section class="hero-main-block">
      <div class="container">
        <div class="hero-layout">
          
          <div class="hero-content">
            <div class="ai-badge-pill fade-in-up">
              <span class="pulse-dot"></span>
              RODSTAR AI ENGINE v3.5 • ONLINE
            </div>

            <h1 id="typewriter-motto" class="hero-title">
              <span class="gradient-text">Engineering Growth</span>
              <span class="cursor">|</span>
            </h1>
            
            <p class="hero-subtext fade-in-up">
              Enterprise-grade AI software development, high-availability web hosting, custom domains, and scalable cloud architecture tailored for ambitious digital platforms.
            </p>

            <div class="cta-buttons fade-in-up">
              <a href="/contact" class="btn btn-primary nav-link">
                Start Building
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="/services" class="btn btn-outline nav-link">
                Explore Services
              </a>
              <button type="button" class="btn btn-tour" data-action="start-tour">
                <span class="pulse-dot" style="width:6px;height:6px;"></span> Take AI Tour
              </button>
            </div>
            
            <div class="hero-stats fade-in-up">
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="99.9">0</div>
                <div class="stat-label">Uptime SLA Guarantee</div>
              </div>
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">Hour Support Lifecycle</div>
              </div>
              <div class="stat-item glass-panel">
                <div class="stat-number" data-target="100">0</div>
                <div class="stat-label">Cloud Deployment Rate</div>
              </div>
            </div>
          </div>
          
          <!-- Interactive AI Architecture Terminal Widget (Positioned ~2/3 cm below fixed header) -->
          <div class="hero-terminal-container fade-in-up" id="hero-ai-console">
            <div class="terminal-glass-card glass-panel">
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="terminal-title">rodstar-ai-terminal v3.5</div>
                <div class="terminal-badge">LIVE 14ms</div>
              </div>

              <div class="terminal-body">
                <div class="terminal-prompt-selector">
                  <button class="prompt-chip active" data-prompt="ai-arch">⚡ AI Web Architecture</button>
                  <button class="prompt-chip" data-prompt="cloud-host">☁️ Enterprise Cloud</button>
                  <button class="prompt-chip" data-prompt="api-dev">🔧 Custom API Engine</button>
                </div>

                <div class="terminal-screen" id="terminal-screen-output">
                  <div class="line comment">// Selecting AI Architectural Blueprint...</div>
                  <div class="line output"><span class="keyword">const</span> system = <span class="string">"RODSTAR AI ENGINE"</span>;</div>
                  <div class="line output"><span class="keyword">await</span> system.deploy({ target: <span class="string">"Global Edge Network"</span> });</div>
                  <div class="line success">✔ Status: High-Availability Cloud Mesh Ready [99.99%]</div>
                </div>

                <div class="terminal-footer">
                  <span class="prompt-symbol">&gt;</span>
                  <input type="text" id="terminal-user-input" placeholder="Type prompt..." readonly value="Run System Health & AI Blueprint Check">
                  <button type="button" id="btn-run-terminal" class="terminal-run-btn">Run Prompt</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 2. Companies Worked With Section (Includes Applegate School) -->
    <section class="companies-section section">
      <div class="container">
        <p class="companies-title fade-in-up">TRUSTED BY INDUSTRY LEADERS, SCHOOLS & INNOVATIVE ENTERPRISES</p>
        <div class="companies-grid fade-in-up">
          <div class="company-badge glass-panel">
            <span class="company-icon">🏫</span> Applegate School
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🏢</span> Moussad Realty
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🎓</span> ElimuNexus LMS
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">💎</span> NusuFi Financial
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">⚡</span> Astral Tech
          </div>
          <div class="company-badge glass-panel">
            <span class="company-icon">🌐</span> Global Edge Cloud
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CEO's Perspective / Statement Section ("CEO's Say") -->
    <section class="ceo-say-section section">
      <div class="container">
        <div class="ceo-glass-card glass-panel fade-in-up">
          <div class="ceo-card-grid">
            <div class="ceo-avatar-col">
              <div class="ceo-avatar-wrapper">
                <div class="avatar-holo-ring"></div>
                <img src="/RODNEY20261.JPG" alt="Rodney Gilbert - CEO" class="ceo-avatar-img">
              </div>
              <div class="ceo-status-pill">● FOUNDER & LEAD ARCHITECT</div>
            </div>
            
            <div class="ceo-content-col">
              <div class="ai-badge-pill" style="margin-bottom: 1rem;">EXECUTIVE PERSPECTIVE</div>
              <h2 class="ceo-quote-title gradient-text">"Technology Should Eliminate Friction & Amplify Growth"</h2>
              <blockquote class="ceo-quote-text">
                "At Rodstar Tech Devs, our core engineering philosophy is simple: we build software systems that operate with absolute reliability, transparent performance, and minimalist speed. We don't just write code; we architect resilient digital foundations that empower businesses and institutions to thrive in an AI-driven era."
              </blockquote>
              <div class="ceo-meta">
                <h4 class="ceo-name">Rodney Gilbert</h4>
                <p class="ceo-title">CEO & Lead Developer, Rodstar Tech Devs</p>
              </div>
              <div style="margin-top: 1.5rem;">
                <a href="/contact" class="btn btn-outline nav-link" style="padding: 0.6rem 1.4rem; font-size: 0.88rem;">
                  Consult With Our Engineering Team →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Glimpse of Services Showcase -->
    <section class="services-glimpse-section section" id="infrastructure">
      <div class="container">
        <div class="section-header">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">OUR CAPABILITIES</div>
          <h2 class="section-title fade-in-up">Services At A Glance</h2>
          <p class="section-subtitle fade-in-up">Architected for high availability, security, and digital conversion.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6" y2="6.01"></line><line x1="6" y1="18" x2="6" y2="18.01"></line></svg>
            </div>
            <h3>Enterprise Hosting & Domains</h3>
            <p>Managed hosting for websites, enterprise emails, and domain registrations backed by 99.9% uptime SLA guarantees.</p>
            <a href="/services" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M6 12h12"></path></svg>
            </div>
            <h3>Cloud & Microservices</h3>
            <p>Resilient microservice architectures with automated load balancing, fault tolerance, and high-speed data routing.</p>
            <a href="/development" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>Bespoke AI Engineering</h3>
            <p>Custom software applications, neural API integrations, and modern glassmorphic interfaces built with precision.</p>
            <a href="/development" class="glimpse-link nav-link">Learn More →</a>
          </div>

          <div class="feature-card glass-panel fade-in-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle></svg>
            </div>
            <h3>Hardware & Tech Sourcing</h3>
            <p>Supply of commercial gadgets, networking routers, enterprise servers, and computer accessories across Kenya.</p>
            <a href="/shop" class="glimpse-link nav-link">Learn More →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Verified Client & Partner Testimonials Section (Featuring Applegate School) -->
    <section class="testimonials-section section">
      <div class="container">
        <div class="section-header">
          <div class="ai-badge-pill" style="margin: 0 auto 1rem;">CLIENT SATISFACTION</div>
          <h2 class="section-title fade-in-up">What Our Clients Say</h2>
          <p class="section-subtitle fade-in-up">Verified testimonials from academic leaders, tech executives, and enterprise partners.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Rodstar Tech Devs engineered our digital school management portal and enterprise cloud hosting. Their software stability and prompt technical support have been outstanding."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Applegate School Administration</h4>
                <p>Applegate School, Kenya</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Rodstar Tech Devs delivered our real estate platform ahead of schedule. Their cloud architecture and geolocation mapping run flawlessly with zero downtime."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Eng. Michael Omondi</h4>
                <p>CTO, Moussad Realty</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "The AI integration and database scaling developed by Rodney and his team transformed our learning platform. We handle over 20,000 active students seamlessly."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Dr. Sarah Chebet</h4>
                <p>Director, ElimuNexus LMS</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card glass-panel fade-in-up">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">
              "Fast, professional, and exceptionally skilled. The custom Web3 interface and high-speed API endpoints exceeded our security and speed expectations."
            </p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Kevin Vance</h4>
                <p>Product Lead, NusuFi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Animated Words Marquee Ticker -->
    <div class="marquee-container fade-in-up">
      <div class="marquee-content">
        <span class="marquee-item">🏫 Applegate School Partner</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🤖 AI Software Engineering</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🌐 Enterprise Web Hosting</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">✉️ Secure Business Emails</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🔒 Managed Custom Domains</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">⚡ High-Speed Edge Networks</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🛡️ Cloud Security & DevOps</span>
        <span class="marquee-item">•</span>
        <!-- Duplicate for seamless loop -->
        <span class="marquee-item">🏫 Applegate School Partner</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🤖 AI Software Engineering</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🌐 Enterprise Web Hosting</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">✉️ Secure Business Emails</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🔒 Managed Custom Domains</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">⚡ High-Speed Edge Networks</span>
        <span class="marquee-item">•</span>
        <span class="marquee-item">🛡️ Cloud Security & DevOps</span>
      </div>
    </div>

    <!-- 7. Final High-Conversion CTA Section -->
    <section class="cta-section" style="padding: 5rem 0;">
      <div class="container">
        <div class="cta-content glass-panel" style="padding: 3.5rem 2rem; text-align: center;">
          <div class="ai-badge-pill" style="margin: 0 auto 1.5rem;">READY TO ELEVATE YOUR TECH?</div>
          <h2 class="fade-in-up gradient-text" style="font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; margin-bottom: 1rem;">Architect Your Digital Future with Rodstar Tech Devs</h2>
          <p class="fade-in-up" style="max-width: 650px; margin: 0 auto 2.5rem; color: var(--text-light);">Empower your business or institution with enterprise web hosting, dedicated engineering, and modern AI platforms.</p>
          
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary nav-link">
              Contact Engineering
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="/pricing" class="btn btn-outline nav-link">
              View Solutions & Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  `

  // Initialize Cyber Canvas background
  initCyberCanvas()

  // Animate stats numbers
  animateStats()

  // Setup AI Terminal Widget interactions
  setupAITerminal()

  // Add scroll animations
  addScrollAnimations()
}

function initCyberCanvas() {
  const canvas = document.querySelector('#hero-cyber-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  })

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    alpha: Math.random() * 0.5 + 0.2
  }))

  function draw() {
    if (!document.body.contains(canvas)) return
    ctx.clearRect(0, 0, width, height)

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`
      ctx.fill()

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(0, 119, 255, ${0.15 * (1 - dist / 120)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(draw)
  }

  draw()
}

function setupAITerminal() {
  const chips = document.querySelectorAll('.prompt-chip')
  const screen = document.querySelector('#terminal-screen-output')
  const inputField = document.querySelector('#terminal-user-input')
  const runBtn = document.querySelector('#btn-run-terminal')

  const PROMPTS_DATA = {
    'ai-arch': {
      input: "Execute AI Architecture Synthesis",
      lines: [
        { type: "comment", text: "// Synthesizing High-Availability Architecture..." },
        { type: "output", text: "const app = new RodstarAIStack({ edge: true, ssl: 'ECC-384' });" },
        { type: "output", text: "await app.optimizePerformance({ targetUptime: '99.99%' });" },
        { type: "success", text: "✔ Architecture Compiled: Scalable Edge Ready [Latency: 12ms]" }
      ]
    },
    'cloud-host': {
      input: "Check Enterprise Cloud & Domains Health",
      lines: [
        { type: "comment", text: "// Verifying Cloud Server Cluster Status..." },
        { type: "output", text: "Cluster Health: ONLINE | Domains DNSSEC: ENABLED" },
        { type: "output", text: "Enterprise Email Relay: 100% Delivery Verified" },
        { type: "success", text: "✔ All Systems Operational Across Global Edge Regions" }
      ]
    },
    'api-dev': {
      input: "Build Custom API & Automation Route",
      lines: [
        { type: "comment", text: "// Generating Microservice API Endpoints..." },
        { type: "output", text: "POST /v1/ai/automate -> 200 OK [Response: 9ms]" },
        { type: "output", text: "Connected Webhook -> Realtime Payment & Order Sync" },
        { type: "success", text: "✔ Secure API Endpoint Deployed Successfully" }
      ]
    }
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'))
      chip.classList.add('active')

      const promptKey = chip.getAttribute('data-prompt')
      const data = PROMPTS_DATA[promptKey]
      if (!data) return

      if (inputField) inputField.value = data.input

      if (screen) {
        screen.innerHTML = `<div class="line comment">// Running ${data.input}...</div>`
        setTimeout(() => {
          screen.innerHTML = data.lines.map(l => `<div class="line ${l.type}">${l.text}</div>`).join('')
        }, 300)
      }
    })
  })

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (screen) {
        screen.innerHTML += `<div class="line comment">// Processing custom terminal command...</div><div class="line success">✔ Command Verified & Logged</div>`
        screen.scrollTop = screen.scrollHeight
      }
    })
  }
}

function animateStats() {
  const stats = document.querySelectorAll('.stat-number')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'))
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          if (entry.target.getAttribute('data-target') === '99.9') {
            entry.target.textContent = current.toFixed(1) + '%'
          } else if (entry.target.getAttribute('data-target') === '100') {
            entry.target.textContent = Math.floor(current) + '%'
          } else if (entry.target.getAttribute('data-target') === '24') {
            entry.target.textContent = Math.floor(current) + '/7'
          } else {
            entry.target.textContent = Math.floor(current)
          }
        }, 16)
        
        observer.unobserve(entry.target)
      }
    })
  })
  
  stats.forEach(stat => observer.observe(stat))

  // Typewriter Effect Logic
  const mottoElement = document.querySelector('#typewriter-motto')
  if (mottoElement) {
    const text1 = "Engineering Growth"
    const text2 = " Through AI & Technology."
    let i = 0
    
    function typeWriter() {
      if (!document.body.contains(mottoElement)) return
      
      if (i === 0) {
        mottoElement.innerHTML = '<span class="gradient-text"></span><span class="cursor">|</span>'
      }
      
      const span = mottoElement.querySelector('.gradient-text')
      const cursor = mottoElement.querySelector('.cursor')
      
      if (i < text1.length) {
        if (span) span.innerHTML += text1.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      } else if (i < text1.length + text2.length) {
        if (cursor) cursor.remove()
        mottoElement.innerHTML += text2.charAt(i - text1.length) + '<span class="cursor">|</span>'
        i++
        setTimeout(typeWriter, 50)
      } else {
        const finalCursor = mottoElement.querySelector('.cursor')
        if (finalCursor) finalCursor.classList.add('blink')
      }
    }
    
    setTimeout(typeWriter, 300)
  }
}

function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
}