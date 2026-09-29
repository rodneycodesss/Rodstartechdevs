import './styles/freelancer.css'
import { CAREER_CATEGORIES, CAREER_POSITIONS } from '../services/freelancerStore.js'

export function setupFreelancerLanding() {
  const container = document.querySelector('#freelancer-landing-container')
  if (!container) return

  let activeCategory = 'All'
  let searchQuery = ''

  function render() {
    const filteredPositions = CAREER_POSITIONS.filter(pos => {
      const matchesCategory = activeCategory === 'All' || pos.category === activeCategory
      const matchesSearch = searchQuery === '' || 
        pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pos.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })

    container.innerHTML = `
      <!-- HERO SECTION -->
      <section class="freelancer-hero container">
        <div class="ai-badge-pill">
          <span class="pulse-dot"></span> Rodstar AI Global Workforce Initiative
        </div>
        <h1 class="freelancer-hero-title gradient-text">
          Build Skills. Get Job-Ready.<br>Access Global Opportunities.
        </h1>
        <p class="freelancer-hero-subtext">
          Join the Rodstar AI Freelancer Network, receive practical role-specific training, demonstrate your skills and become eligible for remote opportunities from our technology and outsourcing partner network.
        </p>

        <div class="freelancer-cta-group">
          <a href="#/ai/freelancers/apply" class="btn btn-primary">
            🚀 Apply to Join Network
          </a>
          <a href="#career-tracks" class="btn btn-outline">
            🔍 Explore 75+ Career Tracks
          </a>
        </div>

        <!-- DYNAMIC STATS SECTION -->
        <div class="freelancer-stats-grid">
          <div class="freelancer-stat-card glass-panel">
            <div class="freelancer-stat-number">9</div>
            <div class="freelancer-stat-label">Professional Tracks</div>
          </div>
          <div class="freelancer-stat-card glass-panel">
            <div class="freelancer-stat-number">75+</div>
            <div class="freelancer-stat-label">Career Positions</div>
          </div>
          <div class="freelancer-stat-card glass-panel">
            <div class="freelancer-stat-number">100%</div>
            <div class="freelancer-stat-label">Practical Onboarding</div>
          </div>
          <div class="freelancer-stat-card glass-panel">
            <div class="freelancer-stat-number">Verified</div>
            <div class="freelancer-stat-label">Partner Opportunities</div>
          </div>
        </div>
      </section>

      <!-- 5-STEP HOW IT WORKS TIMELINE -->
      <section class="section container" id="how-it-works">
        <div class="ai-badge-pill" style="margin: 0 auto 1rem; display: table;">
          ⚡ Step-by-Step Pathway
        </div>
        <h2 class="section-title">How The Freelancer Network Works</h2>
        <p class="section-subtitle">
          A structured 5-step journey to prepare you for global technology projects.
        </p>

        <div class="timeline-container">
          <div class="timeline-step">
            <div class="timeline-marker">01</div>
            <div class="timeline-content glass-panel">
              <h3 class="timeline-title">01 — Apply</h3>
              <p class="timeline-desc">Create your professional profile, highlight your background, and select up to 3 preferred career tracks where you want to develop your skills.</p>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-marker">02</div>
            <div class="timeline-content glass-panel">
              <h3 class="timeline-title">02 — Get Assessed</h3>
              <p class="timeline-desc">Complete baseline skills assessments to gauge your technical readiness and identify custom training modules.</p>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-marker">03</div>
            <div class="timeline-content glass-panel">
              <h3 class="timeline-title">03 — Train & Onboard</h3>
              <p class="timeline-desc">Complete your role-specific Rodstar AI training, orientation, and onboarding modules to master industry standards.</p>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-marker">04</div>
            <div class="timeline-content glass-panel">
              <h3 class="timeline-title">04 — Get Verified</h3>
              <p class="timeline-desc">Submit required practical projects, capstone code, or portfolio evidence to earn your Rodstar AI verification badge.</p>
            </div>
          </div>

          <div class="timeline-step">
            <div class="timeline-marker">05</div>
            <div class="timeline-content glass-panel">
              <h3 class="timeline-title">05 — Access Opportunities</h3>
              <p class="timeline-desc">Qualified freelancers in the talent pool may be considered for remote projects from verified Rodstar technology and client partners.</p>
            </div>
          </div>
        </div>

        <!-- MANDATORY DISCLAIMER BOX -->
        <div class="transparency-box">
          <div class="transparency-header">
            <span>⚠️</span> Important Training & Opportunity Disclaimer
          </div>
          <p style="font-size: 0.95rem; color: var(--text-light); line-height: 1.6;">
            <strong>Training and onboarding do not guarantee employment or paid work.</strong> Remote work opportunities depend on individual qualifications, assessment results, client requirements, project availability, and successful matching. Rodstar AI does not fabricate vacancies or partnerships.
          </p>
        </div>
      </section>

      <!-- CAREER TRACKS EXPLORER -->
      <section class="section container" id="career-tracks">
        <h2 class="section-title">Explore Career Tracks & Positions</h2>
        <p class="section-subtitle">
          Browse over 75+ technology positions across 9 specialized disciplines. Discover skill requirements, recommended training, and evaluation criteria.
        </p>

        <!-- SEARCH BAR -->
        <div class="search-box-wrapper" style="max-width: 500px; margin: 0 auto 1.8rem;">
          <span class="search-icon-inside">🔍</span>
          <input type="text" class="search-box-input" id="track-search-input" placeholder="Search by role, skill (e.g. React, Python, Prompting)..." value="${searchQuery}">
        </div>

        <!-- CATEGORY FILTER BUTTONS -->
        <div class="track-filter-bar">
          <button type="button" class="track-filter-btn ${activeCategory === 'All' ? 'active' : ''}" data-cat="All">All Categories (${CAREER_POSITIONS.length})</button>
          ${CAREER_CATEGORIES.map(cat => {
            const count = CAREER_POSITIONS.filter(p => p.category === cat).length
            return `<button type="button" class="track-filter-btn ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat} (${count})</button>`
          }).join('')}
        </div>

        <!-- POSITIONS GRID -->
        <div class="positions-grid">
          ${filteredPositions.length === 0 ? `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;" class="glass-panel">
              <p style="color: var(--text-light);">No positions match your search term "${searchQuery}". Try searching another keyword.</p>
            </div>
          ` : filteredPositions.map(pos => `
            <div class="position-card glass-panel">
              <div>
                <span class="position-category-badge">${pos.category}</span>
                <h3 class="position-title">${pos.title}</h3>
                <div class="position-level">📊 ${pos.level}</div>

                <div class="skill-chips">
                  ${pos.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
                </div>
              </div>

              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                  <span class="status-badge ${getStatusClass(pos.status)}">${pos.status}</span>
                  <button type="button" class="btn btn-outline view-details-btn" data-title="${pos.title}" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; min-height: 32px;">
                    Details ➔
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- TRUST & TRANSPARENCY SECTION -->
      <section class="section container">
        <h2 class="section-title">Trust & Transparency Principles</h2>
        <p class="section-subtitle">
          We believe in 100% clarity regarding our freelancer onboarding fee, training delivery, and job match policy.
        </p>

        <div class="transparency-grid">
          <div class="transparency-card">
            <h4>💡 What the KSh 1,500 Covers</h4>
            <p>
              Covers full access to the Rodstar AI learning management system, practical role-specific course materials, orientation, assessment tools, freelancer profile onboarding, and talent network eligibility review.
            </p>
          </div>

          <div class="transparency-card">
            <h4>🛡️ What It Does Not Guarantee</h4>
            <p>
              Payment for training and onboarding does not guarantee employment, freelance client placement, or a specific income level. All placements depend on verified qualifications and real client demands.
            </p>
          </div>

          <div class="transparency-card">
            <h4>🤝 How Partner Matching Works</h4>
            <p>
              Verified admin opportunities from our tech network are matched with qualified candidates based on assessment scores, portfolio quality, and client technical specifications.
            </p>
          </div>
        </div>
      </section>

      <!-- FINAL LANDING PAGE CTA -->
      <section class="section container" style="text-align: center; margin-bottom: 3rem;">
        <div class="glass-panel" style="padding: 3.5rem 2rem; border-color: rgba(0, 212, 255, 0.4) !important;">
          <h2 class="section-title gradient-text" style="font-size: 2.2rem; margin-bottom: 1rem;">
            Your Skills Can Travel Further.
          </h2>
          <p class="section-subtitle" style="max-width: 650px; margin: 0 auto 2rem;">
            Build your skills with Rodstar AI and position yourself for opportunities in the global digital economy.
          </p>

          <div class="freelancer-cta-group" style="margin-bottom: 0;">
            <a href="#/ai/freelancers/apply" class="btn btn-primary">
              🚀 Join Freelancer Network
            </a>
            <a href="#career-tracks" class="btn btn-outline">
              📚 Explore Training Tracks
            </a>
          </div>
        </div>
      </section>

      <!-- POSITION DETAILS MODAL DRAWER -->
      <div class="position-modal-overlay" id="position-modal">
        <div class="position-modal-content" id="position-modal-body">
          <!-- Dynamically populated -->
        </div>
      </div>
    `

    attachEvents()
  }

  function getStatusClass(status) {
    if (status === 'Opportunities Available') return 'status-opportunities'
    if (status === 'Training Available') return 'status-training'
    if (status === 'Talent Pool') return 'status-talent'
    return 'status-soon'
  }

  function attachEvents() {
    // Search listener
    const searchInput = container.querySelector('#track-search-input')
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value
        render()
      })
    }

    // Category filter buttons
    container.querySelectorAll('.track-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-cat')
        render()
      })
    })

    // Position Details Modal listener
    const modal = container.querySelector('#position-modal')
    const modalBody = container.querySelector('#position-modal-body')

    container.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title')
        const pos = CAREER_POSITIONS.find(p => p.title === title)
        if (!pos || !modal || !modalBody) return

        modalBody.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
            <div>
              <span class="position-category-badge">${pos.category}</span>
              <h2 style="font-size: 1.6rem; color: #ffffff; font-weight: 700; margin-top: 0.3rem;">${pos.title}</h2>
              <div style="font-size: 0.88rem; color: var(--text-light);">Level: ${pos.level}</div>
            </div>
            <button type="button" id="close-modal-btn" style="background: transparent; border: none; color: #ffffff; font-size: 1.5rem; cursor: pointer;">✕</button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1.2rem; font-size: 0.92rem; color: var(--text-light);">
            <div>
              <strong style="color: #00D4FF;">Required Core Skills:</strong>
              <div class="skill-chips" style="margin-top: 0.4rem;">
                ${pos.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
              </div>
            </div>

            <div>
              <strong style="color: #00D4FF;">Recommended Rodstar Training:</strong>
              <p style="margin-top: 0.2rem; color: #ffffff;">${pos.recommendedTraining}</p>
            </div>

            <div>
              <strong style="color: #00D4FF;">Assessment Type:</strong>
              <p style="margin-top: 0.2rem; color: #ffffff;">${pos.assessmentType}</p>
            </div>

            <div>
              <strong style="color: #00D4FF;">Portfolio Requirements:</strong>
              <p style="margin-top: 0.2rem; color: #ffffff;">${pos.portfolioRequirements}</p>
            </div>

            <div>
              <strong style="color: #00D4FF;">Work Type:</strong>
              <p style="margin-top: 0.2rem; color: #ffffff;">${pos.workType}</p>
            </div>

            <div>
              <strong style="color: #00D4FF;">Network Status:</strong>
              <div style="margin-top: 0.3rem;">
                <span class="status-badge ${getStatusClass(pos.status)}">${pos.status}</span>
              </div>
            </div>
          </div>

          <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: flex-end;">
            <button type="button" class="btn btn-outline" id="modal-cancel-btn">Close</button>
            <a href="#/ai/freelancers/apply" class="btn btn-primary">Apply for this Role</a>
          </div>
        `

        modal.classList.add('active')

        modal.querySelector('#close-modal-btn')?.addEventListener('click', () => modal.classList.remove('active'))
        modal.querySelector('#modal-cancel-btn')?.addEventListener('click', () => modal.classList.remove('active'))
      })
    })

    // Click outside modal to close
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active')
    })
  }

  render()
}
