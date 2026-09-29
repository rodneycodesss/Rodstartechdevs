import { setupFreelancerApply } from '../components/freelancerApply.js'

export function setupFreelancerApplyPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#freelancer-apply')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="freelancer-apply-container"></div>`
    setupFreelancerApply()
  }
}
