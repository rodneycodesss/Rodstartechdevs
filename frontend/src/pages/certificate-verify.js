import { setupCertificateVerify } from '../components/certificateVerify.js'

export function setupCertificateVerifyPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const section = document.querySelector('#certificate-verify')
  if (section) {
    section.style.display = 'block'
    section.innerHTML = `<div id="certificate-verify-container"></div>`
    setupCertificateVerify()
  }
}
