const showRipple = (e: any) => {
  const elPos = window.getComputedStyle(e.target as Element).position
  const ripplePos = elPos === 'relative' ? 'absolute' : 'relative'
  const ripple = document.createElement('span')
  console.log('ripplePos', ripplePos)
  ripple.classList.add('a-ripple')
  ripple.style.position = ripplePos
  e.target.appendChild(ripple)
  const x = e.clientX - e.target!.offsetLeft
  const y = e.clientY - e.target.offsetTop
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  ripple.addEventListener('animationend', () => {
    ripple.remove()
  })
}
export const vRipple = {
  mounted(el: HTMLButtonElement) {
    el.addEventListener('click', showRipple)
  },
  beforeUnmount(el: HTMLButtonElement) {
    el.removeEventListener('click', showRipple)
  }
}
