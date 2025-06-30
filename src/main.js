import './style.css'
import { setupNavigation } from './components/navigation.js'
import { setupHero } from './components/hero.js'
import { setupAbout } from './components/about.js'
import { setupServices } from './components/services.js'
import { setupPortfolio } from './components/portfolio.js'
import { setupTeam } from './components/team.js'
import { setupContact } from './components/contact.js'
import { setupFooter } from './components/footer.js'

document.querySelector('#app').innerHTML = `
  <div class="app">
    <nav id="navigation"></nav>
    <main>
      <section id="hero"></section>
      <section id="about"></section>
      <section id="services"></section>
      <section id="portfolio"></section>
      <section id="team"></section>
      <section id="contact"></section>
    </main>
    <footer id="footer"></footer>
  </div>
`

// Initialize all components
setupNavigation()
setupHero()
setupAbout()
setupServices()
setupPortfolio()
setupTeam()
setupContact()
setupFooter()

// Smooth scrolling for navigation links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

// Mobile menu toggle
document.addEventListener('click', (e) => {
  if (e.target.matches('.mobile-menu-btn') || e.target.closest('.mobile-menu-btn')) {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('active')
  }
})