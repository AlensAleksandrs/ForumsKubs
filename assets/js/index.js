// Elements required to support mobile
import { mobileMenu } from './mobile/toggle-nav.js'

// Animation handlers
import { heroLoad } from './animation/hero-load.js'
import { cardLoad } from './animation/card-load.js'

document.addEventListener('DOMContentLoaded', () => {
  mobileMenu()

  heroLoad()
  cardLoad()
})
