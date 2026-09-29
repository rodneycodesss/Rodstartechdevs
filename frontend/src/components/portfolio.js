export function setupPortfolio() {
  const portfolio = document.querySelector('#portfolio')
  
  portfolio.innerHTML = `
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> PROVEN PRODUCTION PLATFORMS
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Engineered for Scalability</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Deploying mission-critical applications, web3 platforms, real estate software, and AI LMS platforms natively on the cloud.
        </p>
      </div>
    </section>

    <section class="portfolio section" style="padding-top: 3rem;">
      <div class="container">
        
        <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">FINTECH & DEFI</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">NusuFi Platform</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A full-featured web3 platform for managing and investing in digital assets with high-frequency security protocols and low-cost transaction ledgers.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">React</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Web3</span>
                <span class="tag skill-tag">Blockchain</span>
                <span class="tag skill-tag">DeFi</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">EDTECH & AI</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">ElimuNexus LMS</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A comprehensive AI-driven learning management system for schools, automating student record processing and interactive curriculum insights.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">Next.js</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Supabase</span>
                <span class="tag skill-tag">AI Integration</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item glass-panel fade-in-up">
            <div class="portfolio-content">
              <div class="ai-badge-pill" style="margin-bottom: 0.8rem; font-size: 0.72rem; padding: 0.25rem 0.75rem;">PROPTECH & GEOLOCATION</div>
              <h3 style="color: #ffffff; font-size: 1.4rem; font-weight: 700; margin-bottom: 0.6rem;">Moussad Realty</h3>
              <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.2rem;">A premium real estate portal for verified listings, property investments, and long-term stays featuring secure booking integration and live spatial mapping.</p>
              <div class="portfolio-tags" style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                <span class="tag skill-tag">React</span>
                <span class="tag skill-tag">TypeScript</span>
                <span class="tag skill-tag">Real Estate</span>
                <span class="tag skill-tag">Geolocation API</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}