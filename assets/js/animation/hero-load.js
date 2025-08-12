export function heroLoad({
  logoSelector = '#kubs-logo',
  linksSelector = '[data-social-link]',
  baseDelay = 150,
  step = 120,
} = {}) {
  const logo = document.querySelector(logoSelector)
  const links = Array.from(document.querySelectorAll(linksSelector))

  if (!logo && links.length === 0) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  requestAnimationFrame(() => {
    if (logo) {
      logo.classList.remove('opacity-0', 'translate-y-3')
      if (prefersReduced) logo.style.transition = 'none'
    }

    links.forEach((el, i) => {
      if (!prefersReduced) el.style.transitionDelay = `${baseDelay + i * step}ms`
      el.classList.remove('opacity-0', 'translate-y-1')
    })
  })
}
