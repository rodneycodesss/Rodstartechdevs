import { setupAiHub } from '../components/ai-hub.js'

export function setupAiHubPage() {
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  
  const aiHubSection = document.querySelector('#ai-hub')
  if (aiHubSection) {
    aiHubSection.style.display = 'block'
  }
  
  setupAiHub()
}
