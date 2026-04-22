import { setupTerms } from '../components/terms.js'

export function setupTermsPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#terms').style.display = 'block'
  
  // Apply immediate scroll to top on route swap
  window.scrollTo(0, 0)
  
  setupTerms()
}
