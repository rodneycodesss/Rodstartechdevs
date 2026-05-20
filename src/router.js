import { setupHomePage } from './pages/home.js'
import { setupAboutPage } from './pages/about.js'
import { setupPricingPage } from './pages/pricing.js'
import { setupPortfolioPage } from './pages/portfolio.js'
import { setupTeamPage } from './pages/team.js'
import { setupContactPage } from './pages/contact.js'
import { setupNotFoundPage } from './pages/notFound.js'
import { setupPrivacyPage } from './pages/privacy.js'
import { setupTermsPage } from './pages/terms.js'
import { setupShopPage } from './pages/shop.js'
import { setupDevelopmentPage } from './pages/development.js'
import { setupNavigation } from './components/navigation.js'
import { setupFooter } from './components/footer.js'
import { initTheme } from './theme.js'

const routes = {
  '/': setupHomePage,
  '/about': setupAboutPage,
  '/services': setupDevelopmentPage, // Map services page route directly to development page
  '/pricing': setupPricingPage,
  '/portfolio': setupPortfolioPage,
  '/team': setupTeamPage,
  '/contact': setupContactPage,
  '/privacy': setupPrivacyPage,
  '/terms': setupTermsPage,
  '/shop': setupShopPage,
  '/development': setupDevelopmentPage,
}

const KNOWN_PATHNAMES = new Set(Object.keys(routes))

/**
 * Static hosts (Netlify, Vercel, Apache) can serve index.html for /shop, /development, etc.
 * This app uses hash routes; sync pretty pathnames into the hash once so router() sees them.
 */
function syncPathnameToHashForStaticHosts() {
  const hashBody = window.location.hash.replace(/^#/, '')
  if (hashBody && hashBody !== '/') return

  let pathname = window.location.pathname || '/'
  pathname = pathname.replace(/\/index\.html$/i, '') || '/'
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length) || '/'
  }
  if (!pathname.startsWith('/')) pathname = `/${pathname}`

  if (pathname === '/' || !KNOWN_PATHNAMES.has(pathname)) return

  const normalizedBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const pathPrefix = normalizedBase === '' ? '/' : `${normalizedBase}/`
  window.history.replaceState(null, '', `${window.location.origin}${pathPrefix}#${pathname}`)
}

export function router() {
  syncPathnameToHashForStaticHosts()
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
          <section id="privacy"></section>
          <section id="terms"></section>
          <section id="development"></section>
          <section id="shop"></section>
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
  
  // Snap viewport to absolute top on route swap natively
  window.scrollTo(0, 0)
  
  // Update active navigation link
  updateActiveNavLink(path)
  updateDocumentTitle(path)
}

function updateActiveNavLink(path) {
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.remove('active'))
  document.querySelectorAll('.nav-dropdown').forEach((dd) => dd.classList.remove('is-active-route'))

  const servicesGroup = new Set(['/services', '/shop', '/development'])
  if (servicesGroup.has(path)) {
    document.querySelector('.nav-dropdown')?.classList.add('is-active-route')
    document.querySelector('.nav-dropdown-toggle')?.classList.add('active')
  }

  const currentLink = document.querySelector(`.nav-link[href="${path}"]`)
  if (currentLink) {
    currentLink.classList.add('active')
  }
}

const PAGE_TITLES = {
  '/': 'Rodstar Tech Devs - Professional Software Development',
  '/about': 'About Us | Rodstar Tech Devs',
  '/services': 'Services | Rodstar Tech Devs',
  '/development': 'Software Development | Rodstar Tech Devs',
  '/pricing': 'Pricing | Rodstar Tech Devs',
  '/portfolio': 'Portfolio | Rodstar Tech Devs',
  '/team': 'Team | Rodstar Tech Devs',
  '/contact': 'Contact | Rodstar Tech Devs',
  '/privacy': 'Privacy Policy | Rodstar Tech Devs',
  '/terms': 'Terms of Service | Rodstar Tech Devs',
  '/shop': 'Shop | Rodstar Tech Devs',
}

function updateDocumentTitle(path) {
  if (!KNOWN_PATHNAMES.has(path)) {
    document.title = 'Page Not Found | Rodstar Tech Devs'
    return
  }
  document.title = PAGE_TITLES[path] || PAGE_TITLES['/']
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