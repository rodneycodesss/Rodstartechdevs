import { setupFreelancerDashboard } from '../components/freelancerDashboard.js'

export function setupFreelancerDashboardPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#freelancer-dashboard')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="freelancer-dashboard-container"></div>`
    setupFreelancerDashboard()
  }
}
