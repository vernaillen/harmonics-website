export function scrollToElement (id: string) {
  const toEl = document.getElementById(id)
  if (toEl) {
    const to = toEl.offsetTop
    const duration = 500
    const element = document.documentElement
    const start = element.scrollTop
    const change = to - start - 100
    const increment = 20
    let currentTime = 0

    const animateScroll = () => {
      currentTime += increment

      const val = easeInOutQuad(currentTime, start, change, duration)

      element.scrollTop = val

      if (currentTime < duration) { setTimeout(animateScroll, increment) }
    }
    animateScroll()
  }
}

function easeInOutQuad (
  currentTime: number,
  start: number,
  change: number,
  duration: number
) {
  currentTime /= duration / 2
  if (currentTime < 1) { return (change / 2) * currentTime * currentTime + start }
  currentTime--
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
}
