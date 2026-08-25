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
import { setupServicesPage } from './pages/services.js'
import { setupBlogPage } from './pages/blog.js'
import { setupAiHubPage } from './pages/ai-hub.js'
import { setupSupportPage } from './pages/support.js'
import { setupNavigation } from './components/navigation.js'
import { setupFooter } from './components/footer.js'
import { initTheme } from './theme.js'

const routes = {
  '/': setupHomePage,
  '/about': setupAboutPage,
  '/services': setupServicesPage,
  '/pricing': setupPricingPage,
  '/portfolio': setupPortfolioPage,
  '/team': setupTeamPage,
  '/contact': setupContactPage,
  '/privacy': setupPrivacyPage,
  '/terms': setupTermsPage,
  '/shop': setupShopPage,
  '/development': setupDevelopmentPage,
  '/blog': setupBlogPage,
  '/ai-hub': setupAiHubPage,
  '/support': setupSupportPage,
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
        <!-- Global All-Round AI Background Video Layer -->
        <video class="global-video-bg" autoplay loop muted playsinline>
          <source src="https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4" type="video/mp4">
        </video>
        <div class="global-video-overlay"></div>

        <nav id="navigation"></nav>
        <main>
          <section id="notFound"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `
  } else {
    // Standard page layout with continuous AI background video layer
    app.innerHTML = `
      <div class="app">
        <!-- Global All-Round AI Background Video Layer -->
        <video class="global-video-bg" autoplay loop muted playsinline>
          <source src="https://cdn.pixabay.com/video/2019/04/16/22888-331623910_large.mp4" type="video/mp4">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-43285-large.mp4" type="video/mp4">
        </video>
        <div class="global-video-overlay"></div>

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
          <section id="blog"></section>
          <section id="ai-hub"></section>
          <section id="support"></section>
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

  const dropdowns = document.querySelectorAll('.nav-dropdown')
  const solutionsGroup = new Set(['/services', '/shop', '/development', '/ai-hub'])
  const companyGroup = new Set(['/about', '/team', '/portfolio', '/blog', '/support'])

  if (solutionsGroup.has(path) && dropdowns[0]) {
    dropdowns[0].classList.add('is-active-route')
    dropdowns[0].querySelector('.nav-dropdown-toggle')?.classList.add('active')
  }

  if (companyGroup.has(path) && dropdowns[1]) {
    dropdowns[1].classList.add('is-active-route')
    dropdowns[1].querySelector('.nav-dropdown-toggle')?.classList.add('active')
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
  '/blog': 'The Neural Ledger | Rodstar Tech Devs',
  '/ai-hub': 'Rodstar AI Hub | Autonomous Enterprise Intelligence',
  '/support': 'Support & Partner | Rodstar Tech Devs',
}

function updateDocumentTitle(path) {
  if (!KNOWN_PATHNAMES.has(path)) {
    document.title = 'Page Not Found | Rodstar Tech Devs'
    return
  }
  document.title = PAGE_TITLES[path] || PAGE_TITLES['/']
}

// Handle browser back/forward buttons
window.addEventListener('hashchange', router)