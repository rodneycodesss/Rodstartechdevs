export function setupNavigation() {
  const navigation = document.querySelector('#navigation')

  navigation.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="/RODSTAR.png" alt="Rodstar Tech Devs" width="120" height="120" style="height: 38px; width: auto; object-fit: contain;" loading="eager" fetchpriority="high">
          </a>
          <ul class="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            <li class="nav-dropdown">
              <a href="/services" class="nav-link nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Services
                <span class="nav-chevron" aria-hidden="true"></span>
              </a>
              <ul class="nav-dropdown-menu" role="menu">
                <li role="none"><a href="/development" class="nav-link nav-dropdown-link" role="menuitem">Development & Services</a></li>
                <li role="none"><a href="/shop" class="nav-link nav-dropdown-link" role="menuitem">Shop & Sourcing</a></li>
              </ul>
            </li>
            <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="/about" class="nav-link">About</a></li>
            <li><a href="/team" class="nav-link">Team</a></li>
            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>
            <li>
              <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
                <span class="theme-toggle-icon">☀️</span>
              </button>
            </li>
          </ul>
          <button type="button" class="mobile-menu-btn" aria-label="Open menu">☰</button>
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li class="nav-mobile-dropdown">
                <details class="nav-mobile-details">
                  <summary class="nav-mobile-summary">Services</summary>
                  <div class="nav-mobile-submenu">
                    <a href="/development" class="nav-link">Development & Services</a>
                    <a href="/shop" class="nav-link">Shop & Sourcing</a>
                  </div>
                </details>
              </li>
              <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/team" class="nav-link">Team</a></li>
              <li><a href="/pricing" class="nav-link">Pricing</a></li>
              <li><a href="/contact" class="nav-link">Contact</a></li>
              <li style="padding: 1rem 1rem 0.5rem; display: flex; justify-content: center;">
                <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
                  <span class="theme-toggle-icon" style="margin-right: 0.5rem;">☀️</span> Theme
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  `
}
