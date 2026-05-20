export function setupDevelopment() {
  const el = document.querySelector('#development')

  el.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.82)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Software Development</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">End-to-end engineering for web, mobile, and cloud—clean architecture, secure delivery, and measurable outcomes.</p>
      </div>
    </section>
    <section class="services section" style="padding-top: 4rem;">
      <div class="container">
        <div class="services-intro" style="margin-bottom: 2.5rem;">
          <p style="text-align: center; color: var(--text-light); max-width: 720px; margin: 0 auto; font-size: 1.05rem; line-height: 1.65;">
            Rodstar Tech Devs builds production-grade software with the same discipline we apply to hosting and infrastructure: clear scopes, documented APIs, and deployments you can operate with confidence.
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Web applications" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Web applications</h3>
            <p>SPAs, dashboards, and marketing sites with performance-first builds, accessibility, and SEO-aware structure.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Mobile" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>Mobile engineering</h3>
            <p>Native and cross-platform releases with store-ready pipelines, crash reporting, and sensible offline behavior.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/2387796/pexels-photo-2387796.jpeg?auto=compress&cs=tinysrgb&w=150" alt="APIs" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>APIs & integrations</h3>
            <p>REST and event-driven services, third-party integrations, and internal tools that stay maintainable as you scale.</p>
          </div>
          <div class="service-card fade-in-up">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150" alt="DevOps" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; border: 2px solid #007BFF; box-shadow: 0 0 20px rgba(0, 123, 255, 0.4);" loading="lazy" decoding="async">
            <h3>DevOps & reliability</h3>
            <p>CI/CD, environments, and observability so your team ships safely and rolls back quickly when needed.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="cta-section" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/homepage_hero.png') center/cover !important;">
      <div class="container">
        <div class="cta-content">
          <h2 class="fade-in-up">Start a development engagement</h2>
          <p class="fade-in-up">Tell us about your product, timeline, and constraints—we will respond with a practical technical plan.</p>
          <div class="cta-buttons fade-in-up" style="justify-content: center !important;">
            <a href="/contact" class="btn btn-primary btn-large nav-link">Contact engineering</a>
            <a href="/services" class="btn btn-outline btn-large nav-link" style="border-radius: 50px;">View all services</a>
          </div>
        </div>
      </div>
    </section>
  `
}
