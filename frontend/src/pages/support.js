import { setupSupport } from '../components/support.js'

export function setupSupportPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const supportSection = document.querySelector('#support')
  if (supportSection) {
    supportSection.style.display = 'block'
  }
  
  setupSupport()
}
