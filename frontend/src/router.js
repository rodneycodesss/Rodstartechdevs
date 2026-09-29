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
import { setupFreelancersPage } from './pages/freelancers.js'
import { setupFreelancerApplyPage } from './pages/freelancer-apply.js'
import { setupFreelancerLoginPage } from './pages/freelancer-login.js'
import { setupFreelancerDashboardPage } from './pages/freelancer-dashboard.js'
import { setupAdminFreelancersPage } from './pages/admin-freelancers.js'
import { setupCertificateVerifyPage } from './pages/certificate-verify.js'
import { setupFreelancerTermsPage } from './pages/freelancer-terms.js'

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
  '/terms/freelancer': setupFreelancerTermsPage,
  '/shop': setupShopPage,
  '/development': setupDevelopmentPage,
  '/blog': setupBlogPage,
  '/ai-hub': setupAiHubPage,
  '/support': setupSupportPage,
  '/ai/freelancers': setupFreelancersPage,
  '/ai/freelancers/apply': setupFreelancerApplyPage,
  '/freelancer/login': setupFreelancerLoginPage,
  '/freelancer/dashboard': setupFreelancerDashboardPage,
  '/freelancer/opportunities': setupFreelancerDashboardPage,
  '/admin/freelancers': setupAdminFreelancersPage,
  '/verify/certificate': setupCertificateVerifyPage,
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
  const hash = window.location.hash.slice(1) || '/'
  let path = hash.startsWith('/') ? hash : '/' + hash

  // Handle parameterized routes e.g. /verify/certificate/:id
  let route = routes[path]
  if (!route && path.startsWith('/verify/certificate/')) {
    route = setupCertificateVerifyPage
  }
  if (!route) {
    route = setupNotFoundPage
  }
  
  const app = document.querySelector('#app')
  const isNotFound = route === setupNotFoundPage
  
  if (isNotFound) {
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
          <section id="freelancers"></section>
          <section id="freelancer-apply"></section>
          <section id="freelancer-login"></section>
          <section id="freelancer-dashboard"></section>
          <section id="admin-freelancers"></section>
          <section id="certificate-verify"></section>
          <section id="freelancer-terms"></section>
        </main>
        <footer id="footer"></footer>
      </div>
    `
  }
  
  setupNavigation()
  setupFooter()
  
  route()
  
  window.scrollTo(0, 0)
  
  updateActiveNavLink(path)
  updateDocumentTitle(path)
}

function updateActiveNavLink(path) {
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.remove('active'))
  document.querySelectorAll('.nav-dropdown').forEach((dd) => dd.classList.remove('is-active-route'))

  const dropdowns = document.querySelectorAll('.nav-dropdown')
  const rodstarAiGroup = new Set(['/ai/freelancers', '/ai/freelancers/apply', '/freelancer/login', '/freelancer/dashboard', '/admin/freelancers', '/ai-hub', '/blog'])
  const solutionsGroup = new Set(['/services', '/shop', '/development'])

  if (rodstarAiGroup.has(path) && dropdowns[0]) {
    dropdowns[0].classList.add('is-active-route')
    dropdowns[0].querySelector('.nav-dropdown-toggle')?.classList.add('active')
  }

  if (solutionsGroup.has(path) && dropdowns[1]) {
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
  '/terms/freelancer': 'Freelancer Network Terms & Conditions | Rodstar AI',
  '/shop': 'Shop | Rodstar Tech Devs',
  '/blog': 'The Neural Ledger | Rodstar Tech Devs',
  '/ai-hub': 'Rodstar AI Hub | Autonomous Enterprise Intelligence',
  '/support': 'Support & Partner | Rodstar Tech Devs',
  '/ai/freelancers': 'Rodstar AI Freelancer Network | Training & Remote Opportunities',
  '/ai/freelancers/apply': 'Apply to Join | Rodstar AI Freelancer Network',
  '/freelancer/login': 'Portal Login | Rodstar AI Freelancer Network',
  '/freelancer/dashboard': 'Freelancer Dashboard | Rodstar AI',
  '/freelancer/opportunities': 'Verified Remote Opportunities | Rodstar AI',
  '/admin/freelancers': 'Admin Freelancer Operations | Rodstar AI',
  '/verify/certificate': 'Verify Credential | Rodstar AI',
}

function updateDocumentTitle(path) {
  if (path.startsWith('/verify/certificate')) {
    document.title = 'Verify Credential | Rodstar AI'
    return
  }
  if (!KNOWN_PATHNAMES.has(path)) {
    document.title = 'Page Not Found | Rodstar Tech Devs'
    return
  }
  document.title = PAGE_TITLES[path] || PAGE_TITLES['/']
}

window.addEventListener('hashchange', router)