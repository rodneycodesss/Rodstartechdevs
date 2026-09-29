import { setupFreelancerLanding } from '../components/freelancerLanding.js'

export function setupFreelancersPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#freelancers')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="freelancer-landing-container"></div>`
    setupFreelancerLanding()
  }
}
