import { setupPortfolio } from '../components/portfolio.js'

export function setupPortfolioPage() {
  // Hide all sections except portfolio
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#portfolio').style.display = 'block'
  
  setupPortfolio()
} 