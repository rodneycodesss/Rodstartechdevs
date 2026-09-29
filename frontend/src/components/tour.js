/**
 * Driver.js inspired interactive spotlight platform tour manager
 */
export const TOUR_STEPS = [
  {
    element: '#navigation',
    title: '1. Brand & Navigation Bar',
    description: 'Explore Rodstar Tech Devs navigation. Fast access to AI services, software development, team hub, hardware shop, and instant AI tour.'
  },
  {
    element: '#typewriter-motto',
    title: '2. Next-Gen Engineering Vision',
    description: 'We build enterprise software, high-availability web hosting, corporate emails, and bespoke AI platforms designed for scale.'
  },
  {
    element: '#hero-ai-console',
    title: '3. Interactive AI Console',
    description: 'Test live AI architectural blueprints, system health, and calculate instant deployment latency right inside our live terminal widget.'
  },
  {
    element: '.ceo-say-section',
    title: '4. Executive CEO Statement',
    description: 'Hear from Rodney Gilbert (Founder & CEO) on our engineering philosophy: technology should eliminate friction and amplify growth.'
  },
  {
    element: '.testimonials-section',
    title: '5. Verified Client Satisfaction',
    description: 'Read reviews from enterprise partners including Applegate Christian School, Alma Guest House, The Isle Cottages, Moussad Realty, NusuFi, ElimuNexus, and HakiAfya AI.'
  }
]

let currentStep = 0
let tourOverlay = null
let tooltipCard = null
let currentHighlightedEl = null

export function startPlatformTour() {
  currentStep = 0
  createTourElements()
  showStep(currentStep)
}

function createTourElements() {
  let existingOverlay = document.querySelector('.driver-popover-overlay')
  let existingCard = document.querySelector('.driver-tooltip-card')

  if (existingOverlay && existingCard) {
    tourOverlay = existingOverlay
    tooltipCard = existingCard
    tourOverlay.classList.add('active')
    tooltipCard.style.display = 'block'
    return
  }

  tourOverlay = document.createElement('div')
  tourOverlay.className = 'driver-popover-overlay active'

  tooltipCard = document.createElement('div')
  tooltipCard.className = 'driver-tooltip-card'
  tooltipCard.style.display = 'block'

  document.body.appendChild(tourOverlay)
  document.body.appendChild(tooltipCard)

  tourOverlay.addEventListener('click', (e) => {
    if (e.target === tourOverlay) {
      endTour()
    }
  })
}

function showStep(index) {
  if (index >= TOUR_STEPS.length || index < 0) {
    endTour()
    return
  }

  const step = TOUR_STEPS[index]
  const targetEl = document.querySelector(step.element)

  if (currentHighlightedEl) {
    currentHighlightedEl.classList.remove('spotlight-active-element')
  }

  if (targetEl) {
    // Scroll element smoothly into center view
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    targetEl.classList.add('spotlight-active-element')
    currentHighlightedEl = targetEl

    // Wait for smooth scroll animation to finish before computing exact rect
    setTimeout(() => {
      if (!document.body.contains(targetEl)) return
      
      const rect = targetEl.getBoundingClientRect()
      const tooltipWidth = Math.min(360, window.innerWidth - 32)
      
      let top = rect.bottom + 16
      let left = rect.left + (rect.width / 2) - (tooltipWidth / 2)

      // Keep within viewport boundaries
      if (top + 220 > window.innerHeight) {
        top = Math.max(16, rect.top - 230)
      }
      if (left < 16) left = 16
      if (left + tooltipWidth > window.innerWidth - 16) {
        left = window.innerWidth - tooltipWidth - 16
      }

      tooltipCard.style.top = `${Math.max(20, top)}px`
      tooltipCard.style.left = `${left}px`
      tooltipCard.style.width = `${tooltipWidth}px`
      tooltipCard.style.display = 'block'

      tooltipCard.innerHTML = `
        <div class="driver-tooltip-header">
          <span class="driver-tooltip-title">${step.title}</span>
          <span class="driver-step-badge">${index + 1}/${TOUR_STEPS.length}</span>
        </div>
        <div class="driver-tooltip-body">${step.description}</div>
        <div class="driver-tooltip-actions">
          <button class="driver-btn-skip">Close</button>
          <button class="driver-btn-next">${index === TOUR_STEPS.length - 1 ? 'Finish Tour ✓' : 'Next Step →'}</button>
        </div>
      `

      tooltipCard.querySelector('.driver-btn-skip').addEventListener('click', endTour)
      tooltipCard.querySelector('.driver-btn-next').addEventListener('click', () => {
        currentStep++
        showStep(currentStep)
      })
    }, 450)
  } else {
    // If element not found, proceed to next
    currentStep++
    showStep(currentStep)
  }
}

export function endTour() {
  if (tourOverlay) tourOverlay.classList.remove('active')
  if (tooltipCard) tooltipCard.style.display = 'none'
  if (currentHighlightedEl) {
    currentHighlightedEl.classList.remove('spotlight-active-element')
    currentHighlightedEl = null
  }
}

export function setupTourListener() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-action="start-tour"]')
    if (trigger) {
      e.preventDefault()
      startPlatformTour()
    }
  })
}
