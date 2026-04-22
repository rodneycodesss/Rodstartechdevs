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
  const btn = e.target.closest('.mobile-menu-btn')
  if (btn) {
    e.stopPropagation()
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('active')
  }
  
  // Close menu when a link is clicked
  const navLink = e.target.closest('.mobile-menu .nav-link')
  if (navLink) {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.remove('active')
  }
})