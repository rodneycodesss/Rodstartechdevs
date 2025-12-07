import { setupAbout } from '../components/about.js'

export function setupAboutPage() {
  // Hide all sections except about
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#about').style.display = 'block'
  
  setupAbout()
} 