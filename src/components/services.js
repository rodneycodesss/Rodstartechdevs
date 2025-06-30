export function setupServices() {
  const services = document.querySelector('#services')
  
  services.innerHTML = `
    <section class="services section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">We offer comprehensive software development services to meet all your digital needs.</p>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern frameworks like React, Vue.js, and Node.js. We create responsive, fast, and scalable web solutions.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3>Mobile App Development</h3>
            <p>Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver high-performance mobile experiences.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that enhance user experience.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Cloud infrastructure setup and management using AWS, Google Cloud, and Azure. We help you scale your applications efficiently.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3>Custom Software</h3>
            <p>Tailored software solutions designed specifically for your business needs. From CRM systems to enterprise applications.</p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🚀</div>
            <h3>DevOps & Deployment</h3>
            <p>Continuous integration and deployment pipelines. We ensure your applications are deployed efficiently and maintained properly.</p>
          </div>
        </div>
      </div>
    </section>
  `
}