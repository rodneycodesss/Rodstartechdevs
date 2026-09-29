import { setupTeam } from '../components/team.js'

export function setupTeamPage() {
  // Hide all sections except team
  document.querySelectorAll('main > section').forEach(section => {
    section.style.display = 'none'
  })
  document.querySelector('#team').style.display = 'block'
  
  setupTeam()
} 