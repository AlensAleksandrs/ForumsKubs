export function cardLoad({
  cardSelector = '.fade-slide',
  baseDelay = 80,
  step = 60,
  maxDelay = 240,
} = {}) {
  const cards = Array.from(document.querySelectorAll(cardSelector))
  if (!cards.length) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)

      visible.forEach((entry, i) => {
        const el = entry.target

        if (prefersReduced) {
          el.style.transition = 'none'
        } else {
          const delay = Math.min(baseDelay + i * step, maxDelay)
          el.style.transitionDelay = `${delay}ms`
        }

        el.classList.remove('opacity-0', 'translate-y-4')
        observer.unobserve(el)
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  cards.forEach((el) => observer.observe(el))
}
