import { setupServices } from '../components/services.js'

export function setupServicesPage() {
  // Hide all sections except services
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#services').style.display = 'block'
  
  setupServices()
} 