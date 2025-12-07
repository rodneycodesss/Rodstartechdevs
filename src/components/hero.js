export function setupHero() {
  const hero = document.querySelector('#hero')
  
  hero.innerHTML = `
    <section class="hero">
      <div class="hero-background">
        <div class="hero-particles"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge fade-in-up">
            <i class="fas fa-star"></i>
            <span>Trusted by 5+ Clients</span>
          </div>
          <h1 class="fade-in-up">
            <span class="gradient-text">Innovative</span> Software Solutions
          </h1>
          <p class="fade-in-up">We build cutting-edge web applications, mobile apps, and custom software solutions that drive business growth and digital transformation.</p>
          <div class="cta-buttons fade-in-up">
            <a href="/pricing" class="btn btn-primary">
              <i class="fas fa-rocket"></i>
              Get Started
            </a>
            <a href="/portfolio" class="btn btn-outline">
              <i class="fas fa-eye"></i>
              View Our Work
            </a>
          </div>
          <div class="hero-stats fade-in-up">
            <div class="stat-item">
              <div class="stat-number" data-target="7">0</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="5+">0</div>
              <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-item">
              <div class="stat-number" data-target="2">0</div>
              <div class="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card-1">
            <i class="fas fa-code"></i>
            <span>Web Development</span>
          </div>
          <div class="floating-card card-2">
            <i class="fas fa-mobile-alt"></i>
            <span>Mobile Apps</span>
          </div>
          <div class="floating-card card-3">
            <i class="fas fa-cloud"></i>
            <span>Cloud Solutions</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in-up">Why Choose Rodstar Tech Devs?</h2>
          <p class="fade-in-up">We combine technical expertise with creative innovation to deliver exceptional results</p>
        </div>
        <div class="features-grid">
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance and rapid development cycles to get your project to market faster.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security and robust architecture ensure your applications are safe and dependable.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Expert Team</h3>
            <p>Experienced developers and designers who understand your business needs and deliver solutions that work.</p>
          </div>
          <div class="feature-card fade-in-up">
            <div class="feature-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock support and maintenance to keep your applications running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technologies Section -->
    <section class="technologies-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in-up">Technologies We Master</h2>
          <p class="fade-in-up">Cutting-edge tools and frameworks for modern development</p>
        </div>
        <div class="tech-grid">
          <div class="tech-item fade-in-up">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-aws"></i>
            <span>AWS</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-docker"></i>
            <span>Docker</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-angular"></i>
            <span>Angular</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-vue-js"></i>
            <span>Vue.js</span>
          </div>
          <div class="tech-item fade-in-up">
            <i class="fab fa-php"></i>
            <span>PHP</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="fade-in-up">Ready to Transform Your Business?</h2>
          <p class="fade-in-up">Let's discuss your project and create something amazing together</p>
          <div class="cta-buttons fade-in-up">
            <a href="/contact" class="btn btn-primary btn-large">
              <i class="fas fa-paper-plane"></i>
              Start Your Project
            </a>
            <a href="/pricing" class="btn btn-outline btn-large">
              <i class="fas fa-dollar-sign"></i>
              View Pricing
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
        const target = parseInt(entry.target.getAttribute('data-target'))
        const duration = 2000
        const increment = target / (duration / 16)
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          entry.target.textContent = Math.floor(current)
        }, 16)
        
        observer.unobserve(entry.target)
      }
    })
  })
  
  stats.forEach(stat => observer.observe(stat))
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