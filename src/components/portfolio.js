export function setupPortfolio() {
  const portfolio = document.querySelector('#portfolio')
  
  portfolio.innerHTML = `
    <section class="portfolio section">
      <div class="container">
        <h2 class="section-title">Our Portfolio</h2>
        <p class="section-subtitle">Take a look at some of our recent projects and success stories.</p>
        
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>E-Commerce Platform</h3>
              <p>A full-featured e-commerce solution with payment integration, inventory management, and analytics dashboard.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">Node.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Stripe</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>Healthcare Management System</h3>
              <p>A comprehensive healthcare management platform for clinics and hospitals with patient records and appointment scheduling.</p>
              <div class="portfolio-tags">
                <span class="tag">Vue.js</span>
                <span class="tag">Python</span>
                <span class="tag">PostgreSQL</span>
                <span class="tag">AWS</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>Mobile Banking App</h3>
              <p>Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.</p>
              <div class="portfolio-tags">
                <span class="tag">React Native</span>
                <span class="tag">Firebase</span>
                <span class="tag">Biometrics</span>
                <span class="tag">Security</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>Learning Management System</h3>
              <p>Online learning platform with course management, video streaming, progress tracking, and certification system.</p>
              <div class="portfolio-tags">
                <span class="tag">Angular</span>
                <span class="tag">Express.js</span>
                <span class="tag">MySQL</span>
                <span class="tag">Video Streaming</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>Real Estate Platform</h3>
              <p>Property listing and management platform with advanced search, virtual tours, and agent management features.</p>
              <div class="portfolio-tags">
                <span class="tag">Next.js</span>
                <span class="tag">GraphQL</span>
                <span class="tag">Prisma</span>
                <span class="tag">Maps API</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>IoT Dashboard</h3>
              <p>Real-time IoT device monitoring dashboard with data visualization, alerts, and remote device control capabilities.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">WebSocket</span>
                <span class="tag">InfluxDB</span>
                <span class="tag">IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}