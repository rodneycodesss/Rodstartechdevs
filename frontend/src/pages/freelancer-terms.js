import { setupFreelancerTerms } from '../components/freelancerTerms.js'

export function setupFreelancerTermsPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#freelancer-terms')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="freelancer-terms-container"></div>`
    setupFreelancerTerms()
  }
}
