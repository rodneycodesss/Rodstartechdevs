import { setupFreelancerLogin } from '../components/freelancerLogin.js'

export function setupFreelancerLoginPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#freelancer-login')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="freelancer-login-container"></div>`
    setupFreelancerLogin()
  }
}
