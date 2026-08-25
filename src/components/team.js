export function setupTeam() {
  const team = document.querySelector('#team')
  
  team.innerHTML = `
    <!-- Page Hero Banner -->
    <section class="page-hero" style="background: transparent; padding: 7rem 0 4rem; text-align: center; position: relative;">
      <div class="hero-overlay" style="background: rgba(3,7,18,0.75);"></div>
      <div class="container" style="position: relative; z-index: 2;">
        <div class="ai-badge-pill fade-in-up">
          <span class="pulse-dot"></span> RODSTAR TALENT MATRIX • V3.5
        </div>
        <h2 class="section-title fade-in-up gradient-text" style="font-size: clamp(2rem, 4.5vw, 3.5rem); margin-bottom: 1rem;">Meet Our Engineering & Leadership Team</h2>
        <p class="section-subtitle fade-in-up" style="max-width: 700px; color: var(--text-light);">
          Architects, strategists, and developers engineering next-generation software, cloud infrastructure, and AI solutions.
        </p>
      </div>
    </section>

    <!-- Interactive 3D Team Command Center -->
    <section class="team section" style="padding-top: 4rem;">
      <div class="container">
        
        <!-- Department Filter Pills -->
        <div class="team-filter-bar fade-in-up">
          <button class="team-filter-btn active" data-dept="all">All Members</button>
          <button class="team-filter-btn" data-dept="leadership">Leadership & Strategy</button>
          <button class="team-filter-btn" data-dept="engineering">Engineering & AI</button>
          <button class="team-filter-btn" data-dept="growth">Operations & Growth</button>
        </div>

        <!-- 3D Holographic Team Grid -->
        <div class="team-holo-grid" id="team-holo-grid">
          
          <!-- Rodney Gilbert -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership engineering">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/RODNEY20261.JPG" alt="Rodney Gilbert" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • LEAD ARCHITECT
              </div>
              <h3 class="team-name">Rodney Gilbert</h3>
              <p class="team-role">CEO & Lead Developer</p>
              <p class="team-bio">
                Full-stack developer with expertise in modern web technologies, cloud deployments, and team leadership. Passionate about creating innovative AI solutions.
              </p>
              
              <div class="team-skills">
                <span class="skill-tag">Full-Stack AI</span>
                <span class="skill-tag">Cloud Architecture</span>
                <span class="skill-tag">Team Lead</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="rodney">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Desmond Migai -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/desmond.jpeg" alt="Desmond Migai" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • OPS DIRECTORY
              </div>
              <h3 class="team-name">Desmond Migai</h3>
              <p class="team-role">General Operations Manager</p>
              <p class="team-bio">
                Experienced manager directing operations, organizing project lifecycles, and ensuring high-quality client deliverables. Focused on team cohesion and efficiency.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Sprint Operations</span>
                <span class="skill-tag">Quality Assurance</span>
                <span class="skill-tag">Client Delivery</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="desmond">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Brian Gacao -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="leadership growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/BRAYO.jpg" alt="Brian Gacao" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • BIZ STRATEGY
              </div>
              <h3 class="team-name">Brian Gacao</h3>
              <p class="team-role">Business Developer</p>
              <p class="team-bio">
                Identifying strategic business opportunities, cultivating key partnerships, and driving growth. Focused on building long-term client relations and expanding market reach.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Strategic Growth</span>
                <span class="skill-tag">Partnerships</span>
                <span class="skill-tag">Client Relations</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="brian">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Sweeney Greg -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="engineering">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/SWEENEY.jpg" alt="Sweeney Greg" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • BACKEND OPS
              </div>
              <h3 class="team-name">Sweeney Greg</h3>
              <p class="team-role">Backend Developer</p>
              <p class="team-bio">
                Specializing in secure databases, server-side algorithms, and third-party API integrations. Passionate about building robust backend infrastructure that scales.
              </p>

              <div class="team-skills">
                <span class="skill-tag">PostgreSQL & DBs</span>
                <span class="skill-tag">Node / APIs</span>
                <span class="skill-tag">Backend Scaling</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="sweeney">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Daphny Kemi -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/DAPHNY.jpg" alt="Daphny Kemi" loading="lazy" class="team-avatar-img">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • DIGITAL MEDIA
              </div>
              <h3 class="team-name">Daphny Kemi</h3>
              <p class="team-role">Digital Marketing Intern</p>
              <p class="team-bio">
                Assisting in marketing outreach, content strategies, and social media enhancement. Eager to drive brand awareness and digital growth across multi-channel platforms.
              </p>

              <div class="team-skills">
                <span class="skill-tag">Digital Growth</span>
                <span class="skill-tag">Content Strategy</span>
                <span class="skill-tag">Social Media</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="daphny">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

          <!-- Astralia -->
          <div class="team-holo-card glass-panel fade-in-up" data-dept="engineering growth">
            <div class="holo-card-inner">
              <div class="holo-avatar-container">
                <div class="avatar-holo-ring"></div>
                <img src="/ASTRALIA.jpg" alt="Astralia" loading="lazy" class="team-avatar-img" onerror="this.onerror=null; this.src='ASTRALIA.jpg';">
              </div>
              <div class="team-status-pill">
                <span class="pulse-dot" style="background:#00D4FF;box-shadow:0 0 8px #00D4FF;"></span>
                ONLINE • SOFTWARE ARCHITECT
              </div>
              <h3 class="team-name">Astralia</h3>
              <p class="team-role">Systems & Web Engineer</p>
              <p class="team-bio">
                Designing sleek user interfaces, custom web applications, and responsive cloud services. Passionate about modern UI aesthetics and high-performance frontend architecture.
              </p>

              <div class="team-skills">
                <span class="skill-tag">UI/UX Systems</span>
                <span class="skill-tag">Web Engineering</span>
                <span class="skill-tag">Cloud Services</span>
              </div>

              <button type="button" class="btn btn-outline btn-inspect-member" data-member="astralia">
                Inspect Profile Matrix
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Modal Drawer for Member Profile Inspection -->
    <div class="member-modal-overlay" id="member-modal">
      <div class="member-modal-card glass-panel">
        <button class="member-modal-close" id="modal-close-btn">&times;</button>
        <div id="member-modal-content"></div>
      </div>
    </div>
  `

  // Attach 3D Tilt interaction
  setup3DTilt()

  // Attach Filter logic
  setupTeamFilters()

  // Attach Member Modal Inspection logic
  setupMemberModal()
}

function setup3DTilt() {
  const cards = document.querySelectorAll('.team-holo-card')

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
    })

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    })
  })
}

function setupTeamFilters() {
  const btns = document.querySelectorAll('.team-filter-btn')
  const cards = document.querySelectorAll('.team-holo-card')

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')

      const dept = btn.getAttribute('data-dept')

      cards.forEach(card => {
        const cardDepts = card.getAttribute('data-dept') || ''
        if (dept === 'all' || cardDepts.includes(dept)) {
          card.style.display = 'block'
          card.style.animation = 'fadeIn 0.4s ease'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })
}

function setupMemberModal() {
  const modal = document.querySelector('#member-modal')
  const modalContent = document.querySelector('#member-modal-content')
  const closeBtn = document.querySelector('#modal-close-btn')

  const MEMBERS_DATA = {
    rodney: {
      name: "Rodney Gilbert",
      role: "CEO & Lead Developer",
      avatar: "/RODNEY20261.JPG",
      status: "● ACTIVE - SYSTEM ARCHITECTURE",
      bio: "Rodney leads software engineering, system architecture, and client solution design at Rodstar Tech Devs. Specialist in full-stack JavaScript, cloud edge networks, and AI platform integration.",
      metrics: [
        { label: "Experience", val: "7+ Years" },
        { label: "Projects Delivered", val: "50+" },
        { label: "Core Focus", val: "AI & Web Scaling" }
      ]
    },
    desmond: {
      name: "Desmond Migai",
      role: "General Operations Manager",
      avatar: "/desmond.jpeg",
      status: "● ACTIVE - SPRINT MANAGEMENT",
      bio: "Desmond directs company operations, project delivery timelines, and client satisfaction metrics. Ensures engineering sprints meet high quality standards and seamless deployment schedules.",
      metrics: [
        { label: "Operations Managed", val: "100%" },
        { label: "On-Time Rate", val: "99.8%" },
        { label: "Core Focus", val: "Agile Leadership" }
      ]
    },
    brian: {
      name: "Brian Gacao",
      role: "Business Developer",
      avatar: "/BRAYO.jpg",
      status: "● ACTIVE - STRATEGIC PARTNERSHIPS",
      bio: "Brian oversees business growth, client relations, and market expansion strategies for Rodstar Tech Devs, connecting regional enterprises with cutting-edge tech hosting solutions.",
      metrics: [
        { label: "Partnerships", val: "25+" },
        { label: "Client Retention", val: "98%" },
        { label: "Core Focus", val: "Enterprise Growth" }
      ]
    },
    sweeney: {
      name: "Sweeney Greg",
      role: "Backend Developer",
      avatar: "/SWEENEY.jpg",
      status: "● ACTIVE - CLOUD INFRASTRUCTURE",
      bio: "Sweeney architects secure backend APIs, database clusters, and server-side automation logic, establishing high-availability microservices for complex web apps.",
      metrics: [
        { label: "Uptime Managed", val: "99.9%" },
        { label: "DB Latency", val: "<15ms" },
        { label: "Core Focus", val: "Microservices & APIs" }
      ]
    },
    daphny: {
      name: "Daphny Kemi",
      role: "Digital Marketing Intern",
      avatar: "/DAPHNY.jpg",
      status: "● ACTIVE - DIGITAL ENGAGEMENT",
      bio: "Daphny drives digital outreach, brand positioning, and content strategies across web and social channels, elevating brand awareness for Rodstar's technology ecosystem.",
      metrics: [
        { label: "Campaign Growth", val: "+140%" },
        { label: "Reach", val: "Multi-Channel" },
        { label: "Core Focus", val: "Digital Strategy" }
      ]
    },
    astralia: {
      name: "Astralia",
      role: "Systems & Web Engineer",
      avatar: "/ASTRALIA.jpg",
      status: "● ACTIVE - UI/UX SYSTEMS",
      bio: "Astralia designs sleek user interfaces, custom web applications, and responsive cloud services, crafting high-performance frontend systems for enterprise platforms.",
      metrics: [
        { label: "Design Systems", val: "100%" },
        { label: "UI Performance", val: "Sub-50ms" },
        { label: "Core Focus", val: "UI/UX & Web Apps" }
      ]
    }
  }

  document.addEventListener('click', (e) => {
    const inspectBtn = e.target.closest('.btn-inspect-member')
    if (inspectBtn) {
      const memberKey = inspectBtn.getAttribute('data-member')
      const member = MEMBERS_DATA[memberKey]
      if (!member) return

      modalContent.innerHTML = `
        <div style="text-align: center;">
          <img src="${member.avatar}" alt="${member.name}" style="width: 110px; height: 110px; border-radius: 50%; object-fit: cover; border: 2px solid #00D4FF; margin-bottom: 1rem; box-shadow: 0 0 25px rgba(0,212,255,0.4);">
          <div class="team-status-pill" style="margin: 0 auto 0.8rem; display: inline-flex;">${member.status}</div>
          <h3 style="font-size: 1.6rem; color: #fff; font-weight: 700; margin-bottom: 0.2rem;">${member.name}</h3>
          <p style="color: #00D4FF; font-weight: 600; font-size: 0.95rem; margin-bottom: 1.2rem;">${member.role}</p>
          <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.5rem;">${member.bio}</p>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-bottom: 1.5rem; background: rgba(3,7,18,0.8); padding: 1rem; border-radius: 12px; border: 1px solid rgba(0,119,255,0.2);">
            ${member.metrics.map(m => `
              <div>
                <div style="color: #00D4FF; font-weight: 700; font-size: 1.1rem;">${m.val}</div>
                <div style="color: var(--text-light); font-size: 0.75rem;">${m.label}</div>
              </div>
            `).join('')}
          </div>

          <a href="/contact" class="btn btn-primary nav-link" style="width: 100%;">Initiate Direct Inquiry</a>
        </div>
      `

      modal.classList.add('active')
    }
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'))
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active')
    })
  }
}
