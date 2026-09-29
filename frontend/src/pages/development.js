import { setupDevelopment } from '../components/development.js'

export function setupDevelopmentPage() {
  document.querySelectorAll('main > section').forEach((section) => {
    section.style.display = 'none'
  })
  document.querySelector('#development').style.display = 'block'

  setupDevelopment()
}
