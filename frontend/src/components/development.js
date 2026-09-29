export function setupDevelopment() {
  const el = document.querySelector('#development')

  el.innerHTML = `
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> FULL-STACK ENGINEERING PIPELINES
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Software Engineering & Cloud Delivery</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          End-to-end engineering for web, mobile, and cloud—clean architecture, secure delivery, and measurable outcomes.
        </p>
      </div>
    </section>

    <section class="services section" style="padding-top: 3rem;">
      <div class="container">
        <div class="services-intro" style="margin-bottom: 3rem;">
          <p style="text-align: center; color: var(--text-light); max-width: 720px; margin: 0 auto; font-size: 1.05rem; line-height: 1.65;" class="glass-panel" style="padding: 1.5rem 2rem;">
            Rodstar Tech Devs builds production-grade software with the same discipline we apply to hosting and infrastructure: clear scopes, documented APIs, and deployments you can operate with confidence.
          </p>
        </div>
        <div class="services-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;">
          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web applications" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Web Applications</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">SPAs, dashboards, and marketing sites with performance-first builds, accessibility, and SEO-aware structure.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">Mobile Engineering</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">Native and cross-platform releases with store-ready pipelines, crash reporting, and sensible offline behavior.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="APIs" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">APIs & Integrations</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">REST and event-driven services, third-party integrations, and internal tools that stay maintainable as you scale.</p>
          </div>

          <div class="service-card glass-panel fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #00D4FF; box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);" loading="lazy" decoding="async">
            <h3 style="color: #ffffff; font-size: 1.3rem; margin-bottom: 0.8rem; font-weight: 700;">DevOps & Reliability</h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6;">CI/CD, environments, and observability so your team ships safely and rolls back quickly when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seamless CTA Section -->
    <section class="cta-section" style="padding: 4rem 0;">
      <div class="container">
        <div class="cta-content glass-panel" style="padding: 3.5rem 2rem; text-align: center;">
          <h2 class="fade-in-up gradient-text" style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 700; margin-bottom: 1rem;">Start a Development Engagement</h2>
          <p class="fade-in-up" style="max-width: 650px; margin: 0 auto 2.5rem; color: var(--text-light);">Tell us about your product, timeline, and constraints—we will respond with a practical technical plan.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary nav-link">Contact Engineering</a>
            <a href="/services" class="btn btn-outline nav-link">View All Services</a>
          </div>
        </div>
      </div>
    </section>
  `
}
