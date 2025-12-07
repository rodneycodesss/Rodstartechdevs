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