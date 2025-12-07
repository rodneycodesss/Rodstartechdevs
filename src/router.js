import { setupHomePage } from './pages/home.js'
import { setupAboutPage } from './pages/about.js'
import { setupServicesPage } from './pages/services.js'
import { setupPricingPage } from './pages/pricing.js'
import { setupPortfolioPage } from './pages/portfolio.js'
import { setupTeamPage } from './pages/team.js'
import { setupContactPage } from './pages/contact.js'
import { setupNotFoundPage } from './pages/notFound.js'
import { setupNavigation } from './components/navigation.js'
import { setupFooter } from './components/footer.js'

const routes = {
  '/': setupHomePage,
  '/about': setupAboutPage,
  '/services': setupServicesPage,
  '/pricing': setupPricingPage,
  '/portfolio': setupPortfolioPage,
  '/team': setupTeamPage,
  '/contact': setupContactPage
}

export function router() {
  // Use hash-based routing for production compatibility
  const hash = window.location.hash.slice(1) || '/'
  const path = hash.startsWith('/') ? hash : '/' + hash
  
  const route = routes[path] || setupNotFoundPage
  
  // Setup the HTML structure first
  const app = document.querySelector('#app')
  
  // Check if this is a 404 route
  const isNotFound = !routes[path]
  
  if (isNotFound) {
    // 404 page has its own layout
    app.innerHTML = `
      <div class="app">
        <nav id="navigation"></nav>
        <main>
          <section id="notFound"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `
  } else {
    // Standard page layout
    app.innerHTML = `
      <div class="app">
        <nav id="navigation"></nav>
        <main>
          <section id="hero"></section>
          <section id="about"></section>
          <section id="services"></section>
          <section id="pricing"></section>
          <section id="portfolio"></section>
          <section id="team"></section>
          <section id="contact"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `
  }
  
  // Setup navigation and footer
  setupNavigation()
  setupFooter()
  
  // Setup the specific page content
  route()
  
  // Update active navigation link
  updateActiveNavLink(path)
}

function updateActiveNavLink(path) {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
  })
  
  // Add active class to current page link
  const currentLink = document.querySelector(`[href="${path}"]`)
  if (currentLink) {
    currentLink.classList.add('active')
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  router()
})

// Handle hash change for navigation
window.addEventListener('hashchange', () => {
  router()
})

// Handle navigation clicks
document.addEventListener('click', (e) => {
  if (e.target.matches('.nav-link') || e.target.closest('.nav-link')) {
    e.preventDefault()
    const link = e.target.matches('.nav-link') ? e.target : e.target.closest('.nav-link')
    const href = link.getAttribute('href')
    
    if (href.startsWith('/')) {
      // Use hash-based navigation for production
      window.location.hash = href
    }
  }
}) 