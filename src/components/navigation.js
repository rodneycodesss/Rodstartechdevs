import './styles/navigation.css'

export function setupNavigation() {
  const navigation = document.querySelector('#navigation')

  navigation.innerHTML = `
    <nav class="navbar" id="main-navbar">
      <div class="container">
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="/RODSTAR.png" alt="Rodstar Tech Devs" width="120" height="120" style="height: 36px; width: auto; object-fit: contain;" loading="eager" fetchpriority="high">
          </a>
          
          <!-- Floating Glassmorphism Desktop Navigation -->
          <ul class="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            
            <!-- Solutions & AI Dropdown -->
            <li class="nav-dropdown">
              <a href="/ai-hub" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Solutions & AI
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none">
                  <a href="/ai-hub" class="nav-link nav-dropdown-link" role="menuitem" style="color: #00D4FF; font-weight: 700;">
                    🤖 Rodstar AI Hub
                  </a>
                </li>
                <li role="none"><a href="/development" class="nav-link nav-dropdown-link" role="menuitem">⚡ Development & Services</a></li>
                <li role="none"><a href="/shop" class="nav-link nav-dropdown-link" role="menuitem">🛒 Hardware Shop & Sourcing</a></li>
                <li role="none"><a href="/services" class="nav-link nav-dropdown-link" role="menuitem">☁️ Cloud Infrastructure</a></li>
              </ul>
            </li>

            <!-- Company & PR Dropdown -->
            <li class="nav-dropdown">
              <a href="/about" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Company & PR
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none"><a href="/about" class="nav-link nav-dropdown-link" role="menuitem">🏢 About Us</a></li>
                <li role="none"><a href="/team" class="nav-link nav-dropdown-link" role="menuitem">👥 Engineering Team</a></li>
                <li role="none"><a href="/portfolio" class="nav-link nav-dropdown-link" role="menuitem">📁 Portfolio & Case Studies</a></li>
                <li role="none"><a href="/blog" class="nav-link nav-dropdown-link" role="menuitem">📰 The Neural Ledger (Blog)</a></li>
                <li role="none"><a href="/support" class="nav-link nav-dropdown-link" role="menuitem" style="color:#27C93F; font-weight:700;">💚 Support & Partner</a></li>
              </ul>
            </li>

            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>

            <li>
              <button type="button" class="btn btn-tour" data-action="start-tour" style="padding: 0.35rem 0.9rem; font-size: 0.82rem; min-height: 34px;">
                <span class="pulse-dot" style="width:6px;height:6px;"></span> AI Tour
              </button>
            </li>
          </ul>

          <button type="button" class="mobile-menu-btn" aria-label="Open menu">☰</button>
          
          <!-- Full Mobile Menu (Preserves All Page Direct Links) -->
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="/ai-hub" class="nav-link" style="color:#00D4FF; font-weight:700;">🤖 Rodstar AI Hub</a></li>
              <li><a href="/support" class="nav-link" style="color:#27C93F; font-weight:700;">💚 Support & Partner</a></li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Solutions & Services</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/ai-hub" class="nav-link">Rodstar AI Hub</a>
                    <a href="/development" class="nav-link">Development & Services</a>
                    <a href="/shop" class="nav-link">Hardware Shop & Sourcing</a>
                    <a href="/services" class="nav-link">Cloud Infrastructure</a>
                  </div>
                </details>
              </li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Company & PR Insights</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/blog" class="nav-link">The Neural Ledger (Blog)</a>
                    <a href="/support" class="nav-link">Support & Partner With Us</a>
                    <a href="/about" class="nav-link">About Us</a>
                    <a href="/team" class="nav-link">Engineering Team</a>
                    <a href="/portfolio" class="nav-link">Portfolio Showcase</a>
                  </div>
                </details>
              </li>
              <li><a href="/pricing" class="nav-link">Pricing & Plans</a></li>
              <li><a href="/contact" class="nav-link">Contact Sales</a></li>
              <li style="padding: 0.75rem 1rem;">
                <button type="button" class="btn btn-tour" data-action="start-tour" style="width:100%; justify-content:center;">
                  <span class="pulse-dot"></span> Start AI Platform Tour
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  `

  initNavbarScrollHide()
}

function initNavbarScrollHide() {
  const navbar = document.querySelector('#main-navbar')
  if (!navbar) return

  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY

    // Hide floating navbar on scroll downwards (past 70px)
    if (currentScrollY > lastScrollY && currentScrollY > 70) {
      navbar.classList.add('navbar-hidden')
    } else {
      // Reveal floating navbar on scroll upwards or at top
      navbar.classList.remove('navbar-hidden')
    }

    lastScrollY = currentScrollY
  }, { passive: true })
}
