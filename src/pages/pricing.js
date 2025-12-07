import { setupPricing } from '../components/pricing.js'

export function setupPricingPage() {
  // Hide all sections except pricing
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#pricing').style.display = 'block'
  
  setupPricing()
} 