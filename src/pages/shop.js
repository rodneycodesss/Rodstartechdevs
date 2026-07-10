import { setupShop } from '../components/shop.js'

export function setupShopPage() {
  document.querySelectorAll('main > section').forEach((section) => {
    section.style.display = 'none'
  })
  const shop = document.querySelector('#shop')
  shop.style.display = 'block'

  setupShop()
}
