import { setupPrivacy } from '../components/privacy.js'

export function setupPrivacyPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#privacy').style.display = 'block'
  
  // Apply immediate scroll to top on route swap
  window.scrollTo(0, 0)
  
  setupPrivacy()
}
