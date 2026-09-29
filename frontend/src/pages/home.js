import { setupHero } from '../components/hero.js'

export function setupHomePage() {
  // Hide all sections except hero
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#hero').style.display = 'block'
  
  setupHero()
} 