export function setupPortfolio() {
  const portfolio = document.querySelector('#portfolio')
  
  portfolio.innerHTML = `
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/cloud.png') center/cover; padding: 8rem 0 4rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <div class="container">
        <h2 class="section-title fade-in-up" style="font-size: clamp(1.5rem, 5vw, 3.5rem); margin-bottom: 1rem; color: white !important;">Our Portfolio</h2>
        <p class="section-subtitle fade-in-up" style="font-size: clamp(0.95rem, 2vw, 1.25rem);">Deploying massive applications natively on the cloud.</p>
      </div>
    </section>
    <section class="portfolio section" style="padding-top: 4rem;">
      <div class="container">
        
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>NusuFi</h3>
              <p>A full-featured web3 platform for managing and investing in digital assets with a focus on security and low-cost investment.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Web3</span>
                <span class="tag">Blockchain</span>
                <span class="tag">DeFi</span>
                <span class="tag">NFTs</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>ElimuNexus LMS</h3>
              <p>A comprehensive learning management system for schools and  with student records with AI integration.</p>
              <div class="portfolio-tags">
                <span class="tag">Next.js</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Supabase</span>
                <span class="tag">AI</span>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item">
            <div class="portfolio-image"></div>
            <div class="portfolio-content">
              <h3>DevSoko</h3>
              <p>A platform for freelancers to find clients and projects, with a focus on security and reliability.</p>
              <div class="portfolio-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Biometrics</span>
                <span class="tag">Security</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  `
}