import { setupContact } from '../components/contact.js'

export function setupContactPage() {
  // Hide all sections except contact
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#contact').style.display = 'block'
  
  setupContact()
} 