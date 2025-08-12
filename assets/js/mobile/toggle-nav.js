export function mobileMenu() {
  const trigger = document.getElementById('mobile-nav-toggle')
  const overlay = document.getElementById('mobile-nav-overlay')
  let state = false

  const open = () => {
    overlay.classList.remove('hidden')
    requestAnimationFrame(() => {
      overlay.classList.remove('translate-x-full')
    })
    document.body.classList.add('overflow-hidden')
    state = true
  }

  const close = () => {
    overlay.classList.add('translate-x-full')
    overlay.addEventListener(
      'transitionend',
      () => {
        overlay.classList.add('hidden')
      },
      { once: true },
    )
    document.body.classList.remove('overflow-hidden')
    state = false
  }

  const toggle = () => (state ? close() : open())

  trigger.addEventListener('click', toggle)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })
}
