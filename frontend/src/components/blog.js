import './styles/blog.css'

export function setupBlog() {
  const blogContainer = document.querySelector('#blog')
  if (!blogContainer) return

  blogContainer.innerHTML = `
    <div class="blog-page page-hero">
      <div class="container">
        
        <!-- Header / Title -->
        <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
          <div class="ai-badge-pill fade-in-up">
            <span class="pulse-dot"></span> EXECUTIVE BRIEFINGS & PR DISPATCHES
          </div>
          <h1 class="section-title fade-in-up gradient-text" style="font-size: clamp(2.2rem, 4.5vw, 3.8rem);">
            The Neural Ledger
          </h1>
          <p class="section-subtitle fade-in-up">
            Decoding Intelligence, Cloud Architecture, SOC2 Compliance, and Sovereign AI Infrastructure.
          </p>
        </div>

        <!-- Interactive Shadcn Tag Filter Cloud -->
        <div class="filter-cloud fade-in-up" id="blog-tag-cloud">
          <button class="tag-chip active" data-filter="all">All Insights</button>
          <button class="tag-chip" data-filter="ai-governance">AI Governance</button>
          <button class="tag-chip" data-filter="cloud-arch">Cloud Architecture</button>
          <button class="tag-chip" data-filter="security">Security & Compliance</button>
          <button class="tag-chip" data-filter="case-studies">Enterprise Case Studies</button>
        </div>

        <!-- Featured PR Executive Whitepaper Story Card -->
        <div class="featured-pr-card glass-panel fade-in-up">
          <div class="featured-pr-grid">
            <div class="featured-pr-content">
              <span class="pr-tag-badge">★ FEATURED EXECUTIVE WHITEPAPER</span>
              <h2 class="featured-pr-title gradient-text">
                Sovereign AI Infrastructure: Achieving Sub-50ms Model Inference with Zero Data Retention
              </h2>
              <p class="featured-pr-excerpt">
                An architectural analysis by Rodstar Tech Devs on deploying private neural models within isolated VPC boundaries. Learn how we eliminate vendor lock-in, guarantee SOC2 Type II compliance, and process high-frequency real-time payloads.
              </p>
              
              <div class="pr-meta">
                <div class="pr-author-info">
                  <img src="/RODNEY20261.JPG" alt="Rodney Gilbert" class="pr-author-avatar">
                  <div>
                    <div class="pr-author-name">Rodney Gilbert</div>
                    <div class="pr-author-role">Founder & CEO, Rodstar Tech Devs</div>
                  </div>
                </div>
                
                <div style="display: flex; gap: 1rem; align-items: center;">
                  <button type="button" class="btn btn-primary btn-read-article" data-article-id="featured-whitepaper" style="padding: 0.65rem 1.4rem; font-size: 0.88rem;">
                    Read Executive Blueprint →
                  </button>
                </div>
              </div>
            </div>

            <div class="featured-pr-visual" style="text-align: center;">
              <div class="glass-panel" style="padding: 2rem; border-color: rgba(0, 212, 255, 0.4) !important; background: rgba(3, 7, 18, 0.9) !important;">
                <div class="pulse-dot" style="margin: 0 auto 1rem; width: 14px; height: 14px;"></div>
                <div style="font-size: 0.82rem; color: #00D4FF; font-weight: 700; margin-bottom: 0.5rem;">BENCHMARK REPORT v3.5</div>
                <div style="font-size: 2rem; font-weight: 800; color: #ffffff; margin-bottom: 0.5rem;">&lt; 38.4 ms</div>
                <div style="font-size: 0.8rem; color: var(--text-light);">Average Edge Inference Latency</div>
                <div style="margin-top: 1.2rem; padding-top: 1rem; border-top: 1px solid rgba(0, 119, 255, 0.2); font-size: 0.76rem; color: #27C93F;">
                  ✔ SOC2 Type II & ISO 27001 Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Content Grid (3 Columns) -->
        <div class="articles-grid" id="articles-grid-container">
          
          <!-- Article 1 -->
          <article class="article-card glass-panel fade-in-up" data-category="security">
            <div>
              <div class="article-category">Security & Compliance</div>
              <h3 class="article-title">Navigating SOC2 Type II & ISO 27001 Compliance in Microservice Deployment</h3>
              <p class="article-excerpt">How modern tech platforms safeguard tenant isolation, encryption key rotation, and automated audit trails in multi-cloud container environments.</p>
            </div>
            <div class="article-footer-meta">
              <span>5 Min Read • Oct 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-1">Read Article →</button>
            </div>
          </article>

          <!-- Article 2 -->
          <article class="article-card glass-panel fade-in-up" data-category="case-studies">
            <div>
              <div class="article-category">Case Studies</div>
              <h3 class="article-title">Scaling Digital Education: How Applegate School & ElimuNexus Built a 99.99% SLA Portal</h3>
              <p class="article-excerpt">Case study on architecting a zero-downtime student portal handling 20,000+ simultaneous daily requests with automated fee processing.</p>
            </div>
            <div class="article-footer-meta">
              <span>6 Min Read • Sep 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-2">Read Case Study →</button>
            </div>
          </article>

          <!-- Article 3 -->
          <article class="article-card glass-panel fade-in-up" data-category="cloud-arch">
            <div>
              <div class="article-category">Cloud Architecture</div>
              <h3 class="article-title">High-Frequency API Gateway Architectures: Lessons in Ultra-Low Latency</h3>
              <p class="article-excerpt">Deep-dive into custom reverse proxy caching, HTTP/3 QUIC protocol optimization, and regional edge routing at Rodstar Tech Devs.</p>
            </div>
            <div class="article-footer-meta">
              <span>8 Min Read • Sep 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-3">Read Article →</button>
            </div>
          </article>

          <!-- Article 4 -->
          <article class="article-card glass-panel fade-in-up" data-category="ai-governance">
            <div>
              <div class="article-category">AI Governance</div>
              <h3 class="article-title">Enterprise LLM Fine-Tuning: Protecting Proprietary IP with On-Premise Mesh Networks</h3>
              <p class="article-excerpt">Strategies for training custom open-weights models (Llama 3, Qwen, DeepSeek) without exposing proprietary enterprise data to third parties.</p>
            </div>
            <div class="article-footer-meta">
              <span>7 Min Read • Aug 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-4">Read Article →</button>
            </div>
          </article>

          <!-- Article 5 -->
          <article class="article-card glass-panel fade-in-up" data-category="case-studies">
            <div>
              <div class="article-category">Case Studies</div>
              <h3 class="article-title">Real Estate Portfolios: Geolocation Data Mapping for Moussad Realty</h3>
              <p class="article-excerpt">How vector indexing and responsive 3D property viewports increased digital conversion rates by 42% for commercial real estate platforms.</p>
            </div>
            <div class="article-footer-meta">
              <span>4 Min Read • Aug 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-5">Read Case Study →</button>
            </div>
          </article>

          <!-- Article 6 -->
          <article class="article-card glass-panel fade-in-up" data-category="cloud-arch">
            <div>
              <div class="article-category">Cloud Architecture</div>
              <h3 class="article-title">The Future of Web3 APIs and Decentralized Data Verification</h3>
              <p class="article-excerpt">Integrating cryptographically verifiable audit logs and smart contract middleware into traditional corporate SQL database systems.</p>
            </div>
            <div class="article-footer-meta">
              <span>6 Min Read • Jul 2026</span>
              <button type="button" class="read-btn btn-read-article" data-article-id="art-6">Read Article →</button>
            </div>
          </article>

        </div>

        <!-- Lead Generation & PR Engine Card -->
        <div class="newsletter-card glass-panel fade-in-up">
          <div class="ai-badge-pill" style="margin-bottom: 1rem;">EXECUTIVE DISPATCH</div>
          <h2 class="gradient-text" style="font-size: 2rem; font-weight: 700; margin-bottom: 0.8rem;">Subscribe to Executive Insights</h2>
          <p style="color: var(--text-light); max-width: 620px; margin: 0 auto;">Receive quarterly whitepapers, architectural blueprints, and press briefings directly from our lead engineering team.</p>
          
          <form class="newsletter-form" id="pr-newsletter-form">
            <input type="email" class="newsletter-input" required placeholder="Enter corporate email address (e.g. cto@enterprise.com)">
            <button type="submit" class="btn btn-primary" style="padding: 0.85rem 1.6rem; white-space: nowrap;">
              Subscribe Free →
            </button>
          </form>
          <div id="newsletter-status" style="margin-top: 1rem; font-size: 0.85rem; display: none;"></div>
        </div>

      </div>
    </div>

    <!-- Reading Drawer Modal Backdrop -->
    <div class="blog-modal-backdrop" id="blog-reading-modal">
      <div class="blog-modal-card glass-panel">
        <button type="button" class="blog-modal-close" id="btn-close-blog-modal">&times;</button>
        <div id="blog-modal-content"></div>
      </div>
    </div>
  `

  setupBlogFilters()
  setupBlogReaderModal()
  setupNewsletterForm()
}

function setupBlogFilters() {
  const chips = document.querySelectorAll('#blog-tag-cloud .tag-chip')
  const cards = document.querySelectorAll('#articles-grid-container .article-card')

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'))
      chip.classList.add('active')

      const filter = chip.getAttribute('data-filter')

      cards.forEach(card => {
        const category = card.getAttribute('data-category')
        if (filter === 'all' || filter === category) {
          card.style.display = 'flex'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

function setupBlogReaderModal() {
  const modal = document.querySelector('#blog-reading-modal')
  const modalContent = document.querySelector('#blog-modal-content')
  const closeBtn = document.querySelector('#btn-close-blog-modal')

  const ARTICLES_DATA = {
    'featured-whitepaper': {
      title: "Sovereign AI Infrastructure: Achieving Sub-50ms Model Inference",
      author: "Rodney Gilbert • Founder & CEO",
      category: "EXECUTIVE WHITEPAPER",
      content: `
        <h3>Executive Summary</h3>
        <p>In 2026, enterprise data sovereignty has become a non-negotiable prerequisite for AI adoption. Public API endpoints introduce latency volatility and data exposure risks. Rodstar Tech Devs architects private neural inference clusters within dedicated VPC boundaries.</p>
        <h4>Key Takeaways</h4>
        <ul>
          <li><strong>Zero Data Retention:</strong> Strict ephemeral payload processing with immediate memory scrubbing.</li>
          <li><strong>Sub-50ms Edge Response:</strong> Model quantization and TensorRT execution environments.</li>
          <li><strong>Compliance Alignment:</strong> Built according to SOC2 Type II and ISO 27001 audit standards.</li>
        </ul>
        <p>Contact our system architects to request the full 45-page PDF whitepaper and benchmark suite.</p>
      `
    },
    'art-1': {
      title: "Navigating SOC2 Type II & ISO 27001 Compliance",
      author: "Rodstar Engineering Team",
      category: "SECURITY & COMPLIANCE",
      content: `
        <h3>Enterprise Compliance Frameworks</h3>
        <p>Modern microservice deployments must prove compliance through automated evidence collection, encrypted telemetry, and role-based access control (RBAC).</p>
        <p>Rodstar Tech Devs integrates automated security scanners and continuous log auditing across all managed cloud environments.</p>
      `
    },
    'art-2': {
      title: "Scaling Digital Education: Applegate School & ElimuNexus Case Study",
      author: "Rodstar Client Solutions Group",
      category: "CASE STUDY",
      content: `
        <h3>Academic Cloud Portal Scalability</h3>
        <p>Applegate School and ElimuNexus required a robust, high-availability platform capable of handling peak student exam submissions and real-time fee verifications.</p>
        <p>Through containerized microservices and automated database load balancing, we achieved 99.99% operational uptime throughout the academic cycle.</p>
      `
    }
  }

  document.querySelectorAll('.btn-read-article').forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-article-id')
      const data = ARTICLES_DATA[artId] || {
        title: "Executive Briefing: Rodstar Tech Devs",
        author: "Rodstar Engineering Team",
        category: "INSIGHTS",
        content: "<p>Detailed technical documentation available upon request. Contact our engineering team for full specifications.</p>"
      }

      modalContent.innerHTML = `
        <div class="pr-tag-badge">${data.category}</div>
        <h2 style="font-size: 1.8rem; font-weight: 700; color: #ffffff; margin-bottom: 0.8rem; line-height: 1.25;">${data.title}</h2>
        <div style="font-size: 0.85rem; color: #00D4FF; margin-bottom: 1.8rem; font-weight: 600;">Published by ${data.author}</div>
        <div style="line-height: 1.7; color: var(--text-light); font-size: 0.98rem;">${data.content}</div>
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(0, 119, 255, 0.2); display: flex; gap: 1rem;">
          <a href="/contact" class="btn btn-primary nav-link" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;">Request Full PDF Whitepaper →</a>
        </div>
      `

      modal.classList.add('active')
    })
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active')
    })
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active')
    })
  }
}

function setupNewsletterForm() {
  const form = document.querySelector('#pr-newsletter-form')
  const status = document.querySelector('#newsletter-status')

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      if (status) {
        status.style.display = 'block'
        status.style.color = '#00D4FF'
        status.textContent = '✔ Thank you for subscribing. The latest Executive Whitepaper has been dispatched to your email.'
      }
      form.reset()
    })
  }
}
