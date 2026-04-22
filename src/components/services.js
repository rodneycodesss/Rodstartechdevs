export function setupServices() {
  const services = document.querySelector('#services')
  
  services.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/cloud.png') center/cover; padding: 12rem 0 6rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05); margin-top: -5rem;">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: 3.5rem; margin-bottom: 1rem; color: white !important;">Our Services</h2>
        <p class="section-subtitle fade-in-up" style="font-size: 1.25rem;">We offer comprehensive software development services to meet all your digital needs.</p>
      </div>
    </section>
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="services-grid">
          <div class="service-card">
            <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Hosting" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>Enterprise Hosting</h3>
            <p>Premium managed hosting environments featuring custom domain registration databases, dedicated enterprise emails, and high-availability servers structured for maximal uptime.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web Arch" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>Web Architecture</h3>
            <p>High-end single page applications built inherently scalable with modern javascript environments. We create responsive, instantaneous, and cinematic web structures.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile Apps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>Mobile App Deployment</h3>
            <p>Native mobile applications structurally compiled for iOS and Android. Cross-platform engineering pipelines to deploy high-velocity user experiences directly to app stores.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="UX Design" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>UI/UX Systems</h3>
            <p>Glassmorphism, high-contrast dark modes, and dynamic geometry. We engineer interface experiences that prioritize raw digital immersion and absolute conversion rates.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Cloud" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>Cloud Solutions</h3>
            <p>Elastic infrastructure setups running parallel load balancing using AWS, Vercel, and hybrid structures. We scale your raw networking data infinitely.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Custom Code" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>Custom Software Systems</h3>
            <p>Tailored computational systems engineered explicitly for complex datasets. Ranging from Fintech POS ledgers, CRM algorithms to multi-node operational architecture.</p>
          </div>
          
          <div class="service-card">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);">
            <h3>DevOps & CI/CD Pipelines</h3>
            <p>Automated software delivery streams guaranteeing your production environments sync flawlessly directly with your active coding networks via zero-latency pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  `
}