export function setupServices() {
  const services = document.querySelector('#services')
  
  services.innerHTML = `
    <!-- Page Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="hero-overlay" style="background: rgba(3,7,18,0.75);"></div>
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> RODSTAR CAPABILITIES • ENTERPRISE SUITE
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Full-Spectrum AI & Cloud Engineering</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          End-to-end software development, high-availability web hosting, and predictive data automation built for scalable growth.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Hosting" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Enterprise Hosting</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Premium managed hosting environments featuring custom domain registration databases, dedicated enterprise emails, and high-availability servers structured for maximal uptime SLA.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web Arch" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">AI Web Architecture</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">High-end web applications built inherently scalable with modern JavaScript, React, and Next.js environments. We create responsive, instantaneous, and cinematic digital web platforms.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile Apps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Mobile App Deployment</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Native mobile applications structurally compiled for iOS and Android. Cross-platform engineering pipelines to deploy high-velocity user experiences directly to major app stores.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="UX Design" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">UI/UX Systems</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Glassmorphism, high-contrast dark modes, and dynamic micro-animations. We engineer interface experiences that prioritize raw digital immersion and absolute conversion rates.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Cloud" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Cloud Infrastructure</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Elastic cloud infrastructure setups running parallel load balancing using AWS, Edge CDNs, and hybrid clusters to handle massive scale traffic effortlessly.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Custom Code" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Custom Software Systems</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Tailored computational software engineered explicitly for complex datasets. Ranging from Fintech POS ledgers, CRM algorithms to multi-node operational architecture.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">DevOps & CI/CD Pipelines</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Automated software delivery streams guaranteeing your production environments sync flawlessly directly with your active coding networks via zero-latency pipelines.</p>
          </div>
          
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Digital Marketing" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Digital Growth & SEO</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Strategic online marketing, search engine optimization (SEO), and social media growth campaigns designed to elevate your brand presence and user conversion rates.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Data Science" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">AI Data Science</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Predictive modeling, machine learning integration, and advanced analytical pipelines to transform raw enterprise data into intelligent automation streams.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Maintenance & Support" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">24/7 SLA Maintenance</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Dedicated maintenance, security patching, hosting uptime support, and continuous feature monitoring for enterprise portals, applications, and networks.</p>
          </div>
        </div>

      </div>
    </section>
  `
}