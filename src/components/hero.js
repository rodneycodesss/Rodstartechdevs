import './styles/hero.css'

export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
    <section class="hero">
      <video autoplay muted loop playsinline class="hero-video-bg">
        <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="glow-orb-1" style="z-index: 2;"></div>
      <div class="glow-orb-2" style="z-index: 2;"></div>
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <h1 id="typewriter-motto" style="line-height: 1.05 !important; min-height: 2.5em;">
              <span class="cursor" style="opacity: 0;">|</span>
            </h1>
            <p class="fade-in-up">Minimalist architecture. Scalable platforms. We provide enterprise-grade hosting for websites, emails, and custom domains, alongside specialized software development.</p>
            <div class="cta-buttons fade-in-up">
              <a href="/contact" class="btn btn-primary nav-link">
                Start Building
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="/services" class="btn btn-primary nav-link" style="color: rgba(255,255,255,0.8) !important;">
                Explore Services
                <i class="fas fa-arrow-right" style="border-color: rgba(255,255,255,0.3); color: white;"></i>
              </a>
            </div>
            
            <div class="hero-stats fade-in-up">
              <div class="stat-item">
                <div class="stat-number" data-target="99.9">0</div>
                <div class="stat-label">Uptime Guarantee</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-target="24">0</div>
                <div class="stat-label">Hour Support</div>
              </div>
              <div class="stat-item">
                <div class="stat-number" data-target="100">0</div>
                <div class="stat-label">Cloud Deployment</div>
              </div>
            </div>
          </div>
          
          <div class="hero-image fade-in-up">
            <img src="/public/RODSTAR.png" alt="Rodstar Logo" loading="eager" fetchpriority="high" decoding="sync">
          </div>
        </div>
      </div>
      
      <!-- Animated Words Moving Marquee -->
      <div class="marquee-container fade-in-up">
        <div class="marquee-content">
          <span class="marquee-item">Web Hosting</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Enterprise Emails</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Custom Domains</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Scalable Architecture</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Cloud Deployments</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Full-Stack Engineering</span>
          <span class="marquee-item">•</span>
          <!-- Duplicate for seamless looping -->
          <span class="marquee-item">Web Hosting</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Enterprise Emails</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Custom Domains</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Scalable Architecture</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Cloud Deployments</span>
          <span class="marquee-item">•</span>
          <span class="marquee-item">Full-Stack Engineering</span>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section" id="infrastructure" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url('/public/home_network.png') center/cover !important;">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in-up">Core Infrastructure</h2>
          <p class="fade-in-up">Clean code, robust deployments, and managed infrastructure.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3>Managed Hosting</h3>
            <p>High-performance hosting for websites, enterprise emails, and domains with 99.9% uptime guarantees.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-network-wired"></i>
            </div>
            <h3>Cloud Architecture</h3>
            <p>Scalable, secure, and distributed systems architected for modern digital products and massive traffic.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3>Bespoke Engineering</h3>
            <p>Custom software and web applications built with clean code and minimalist design principles.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h3>Digital Automation</h3>
            <p>Streamline your operations with automated pipelines, robust APIs, and intelligent workflow integrations.</p>
          </div>
        </div>
      </div>
    </section>
    
    
    <!-- CTA Section -->
    <section class="cta-section" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/public/homepage_hero.png') center/cover !important;">
      <div class="container">
        <div class="cta-content">
          <h2 class="fade-in-up">Ready to deploy?</h2>
          <p class="fade-in-up">Let's architect your next digital experience and scale your infrastructure.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary btn-large nav-link">
              Contact Engineering
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="/pricing" class="btn btn-outline btn-large nav-link" style="border-radius: 50px;">
              View Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  `
  
  // Animate stats numbers
  animateStats()
  
  // Add scroll animations
  addScrollAnimations()
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
          // Special handling for decimal uptime
          if (entry.target.getAttribute('data-target') === '99.9') {
              entry.target.textContent = current.toFixed(1) + '%'
          } else {
              entry.target.textContent = Math.floor(current)
          }
          // Add back the '+' or 'h' if needed
          if (entry.target.getAttribute('data-target') === '100') {
              entry.target.textContent = Math.floor(current) + '%'
          }
          if (entry.target.getAttribute('data-target') === '24') {
              entry.target.textContent = Math.floor(current) + '/7'
          }
        }, 16)
        
        observer.unobserve(entry.target)
      }
    })
  })
  
  stats.forEach(stat => observer.observe(stat))

  // Typewriter Effect Logic
  const mottoElement = document.querySelector('#typewriter-motto');
  if (mottoElement) {
    const text1 = "Engineering Growth";
    const text2 = " Through Technology.";
    let i = 0;
    
    function typeWriter() {
      if (!document.body.contains(mottoElement)) return; // Stop if unmounted
      
      if (i === 0) {
        mottoElement.innerHTML = '<span class="gradient-text"></span><span class="cursor">|</span>';
      }
      
      const span = mottoElement.querySelector('.gradient-text');
      const cursor = mottoElement.querySelector('.cursor');
      
      if (i < text1.length) {
        if (span) span.innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      } else if (i < text1.length + text2.length) {
        if (cursor) cursor.remove();
        mottoElement.innerHTML += text2.charAt(i - text1.length) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, 60);
      } else {
        const finalCursor = mottoElement.querySelector('.cursor');
        if (finalCursor) finalCursor.classList.add('blink');
      }
    }
    
    setTimeout(typeWriter, 400); // 400ms delay to let the page fade in natively
  }
}

function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, {
    threshold: 0.1
  })
  
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
}