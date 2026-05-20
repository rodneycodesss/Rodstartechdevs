export function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  const isLight = savedTheme === 'light'
  if (isLight) {
    document.body.classList.add('light-theme')
  } else {
    document.body.classList.remove('light-theme')
  }
  updateThemeIcons(isLight)
}

export function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme')
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
  updateThemeIcons(isLight)
}

export function updateThemeIcons(isLight) {
  document.querySelectorAll('.theme-toggle-icon').forEach(el => {
    el.textContent = isLight ? '🌙' : '☀️'
    el.style.transform = isLight ? 'rotate(360deg)' : 'rotate(0deg)'
  })
}

// Setup event delegation for clicks on theme buttons
document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('.theme-toggle-btn')
  if (toggleBtn) {
    toggleTheme()
  }
})
