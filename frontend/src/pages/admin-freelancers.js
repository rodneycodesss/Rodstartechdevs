import { setupAdminFreelancers } from '../components/adminFreelancers.js'

export function setupAdminFreelancersPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#admin-freelancers')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="admin-freelancers-container"></div>`
    setupAdminFreelancers()
  }
}
