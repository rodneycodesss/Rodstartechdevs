export function setupAbout() {
  const about = document.querySelector('#about')
  
  about.innerHTML = `
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> ABOUT RODSTAR TECH DEVS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Rodstar Tech Devs — Engineering Next-Gen Digital Solutions</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Passionate software engineers, cloud architects, and digital strategists committed to delivering high-performance platforms.
        </p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about section" style="padding-top: 3rem;">
      <div class="container">
        <div class="about-content" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: center;">
          
          <div class="about-text glass-panel" style="padding: 2.5rem;">
            <h3 style="color: #ffffff; font-size: 1.6rem; font-weight: 700; margin-bottom: 1.2rem;">Our Engineering Mission</h3>
            <p style="color: var(--text-light); line-height: 1.65; margin-bottom: 1.2rem;">
              At Rodstar Tech Devs, we harness the power of artificial intelligence, cloud microservices, and minimalist web architecture to transform businesses. Our mission is to engineer robust, high-availability software platforms that empower startups and enterprises to scale without limits.
            </p>

            <p style="color: var(--text-light); line-height: 1.65; margin-bottom: 2rem;">
              Backed by continuous innovation, modern security standards, and 99.9% uptime SLA commitments, our specialized team delivers end-to-end web hosting, enterprise email systems, bespoke API pipelines, and custom software.
            </p>
            
            <div class="stats" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">50+</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Projects Delivered</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">100%</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Client Satisfaction</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">99.9%</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Uptime SLA</span>
              </div>
              <div class="stat glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,212,255,0.2) !important;">
                <span class="stat-number" style="color: #00D4FF; font-size: 1.8rem; font-weight: 700; display: block;">24/7</span>
                <span class="stat-label" style="color: var(--text-light); font-size: 0.8rem;">Ops Support</span>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="glass-panel" style="padding: 0.8rem; border-color: rgba(0,212,255,0.3) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 25px rgba(0,82,255,0.25);">
              <img src="/boardroom.png" alt="Engineering Boardroom" width="800" height="600" style="border-radius: 12px; width: 100%; height: auto; object-fit: cover; aspect-ratio: 4/3; display: block;" loading="lazy" decoding="async"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}