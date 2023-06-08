function createRipple(this: HTMLButtonElement, e: MouseEvent) {
  if (this.getElementsByClassName('a-ripple').length > 0) {
    this.querySelector('.a-ripple')?.remove()
  }
  const circle = document.createElement('span')
  this.appendChild(circle)
  const d = Math.max(this.clientWidth, this.clientHeight)
  circle.style.width = circle.style.height = d + 'px'
  circle.style.left = e.offsetX - d / 2 + 'px'
  circle.style.top = e.offsetY - d / 2 + 'px'
  circle.classList.add('a-ripple')
  circle.addEventListener('animationend', () => {
    circle.remove()
  })
}
export const vRipple = {
  mounted(el: HTMLButtonElement) {
    el.addEventListener('click', createRipple)
  },
  beforeUnmount(el: HTMLButtonElement) {
    el.removeEventListener('click', createRipple)
  }
}
