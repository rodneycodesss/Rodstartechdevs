export function setupNavigation() {
  const navigation = document.querySelector('#navigation')
  
  navigation.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <div class="nav-container">
          <a href="/" class="logo">
            <img src="/src/public/RODSTAR.png" alt="Rodstar Tech Devs" style="height: 38px; width: auto; object-fit: contain;">
          </a>
          <ul class="nav-menu">
            <li><a href="/" class="nav-link">Home</a></li>
            <li><a href="/services" class="nav-link">Services</a></li>
            <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="/about" class="nav-link">About</a></li>
            <li><a href="/team" class="nav-link">Team</a></li>
            <li><a href="/pricing" class="nav-link">Pricing</a></li>
            <li><a href="/contact" class="nav-link">Contact</a></li>
          </ul>
          <button class="mobile-menu-btn">☰</button>
          <div class="mobile-menu">
            <ul class="nav-menu">
              <li><a href="/" class="nav-link">Home</a></li>
              <li><a href="/services" class="nav-link">Services</a></li>
              <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
              <li><a href="/about" class="nav-link">About</a></li>
              <li><a href="/team" class="nav-link">Team</a></li>
              <li><a href="/pricing" class="nav-link">Pricing</a></li>
              <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `
}