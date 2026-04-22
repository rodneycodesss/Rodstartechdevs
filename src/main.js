import './styles/variables.css'
import './styles/global.css'
import './styles/pages.css'
import './components/styles/navigation.css'
import { router } from './router.js'

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the router
  router()
})

// Mobile menu toggle
document.addEventListener('click', (e) => {
  if (e.target.matches('.mobile-menu-btn') || e.target.closest('.mobile-menu-btn')) {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('active')
  }
})