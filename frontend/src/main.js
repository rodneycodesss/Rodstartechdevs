import './styles/variables.css'
import './styles/global.css'
import './styles/pages.css'
import './components/styles/navigation.css'
import { router } from './router.js'
import { setupTourListener } from './components/tour.js'

// Theme Controller Initialization
function initTheme() {
  const savedTheme = localStorage.getItem('rodstar_theme') || 'dark'
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme')
  } else {
    document.body.classList.remove('light-theme')
  }
  updateThemeToggleIcons(savedTheme)
}

function updateThemeToggleIcons(theme) {
  document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
    icon.textContent = theme === 'light' ? '🌙' : '☀️'
  })
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme()
  setupTourListener()
  
  // Defer router initialization to prevent long main-thread tasks
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      router()
    }, { timeout: 1000 })
  } else {
    setTimeout(() => {
      router()
    }, 100)
  }
})

// Global Event Delegation (Theme Toggle & Mobile Menu)
document.addEventListener('click', (e) => {
  // Theme Toggle Button Event
  const themeBtn = e.target.closest('.theme-toggle-btn')
  if (themeBtn) {
    e.preventDefault()
    const isLight = document.body.classList.toggle('light-theme')
    const newTheme = isLight ? 'light' : 'dark'
    localStorage.setItem('rodstar_theme', newTheme)
    updateThemeToggleIcons(newTheme)
    return
  }

  // Mobile menu toggle
  const btn = e.target.closest('.mobile-menu-btn')
  if (btn) {
    e.stopPropagation()
    const mobileMenu = document.querySelector('.mobile-menu')
    if (mobileMenu) mobileMenu.classList.toggle('active')
  }
  
  // Close menu when a link is clicked
  const navLink = e.target.closest('.mobile-menu .nav-link')
  if (navLink) {
    const mobileMenu = document.querySelector('.mobile-menu')
    if (mobileMenu) mobileMenu.classList.remove('active')
  }
})