export const vTooltip = {
  mounted: (el: HTMLElement, binding: any) => {
    // console.log(binding);
    const styleTag = document.querySelector('#ayostyle')
    if (!styleTag) {
      const css = `.ayotooltip {
        background: red;
        padding: 7px 17px;
        width: fit-content;
        max-width: 200px;
        border-radius: 6px;
        background-color: #404040;
        opacity: 0;
        transition: opacity 1s;
        color: #f3f3f3;
        line-height: 1.2;
        position: fixed;
        z-index: 999999;
      }
      .ayotooltip::after {
        content: "";
        position: absolute;
        left: calc(50% - 5px);
        top: -5px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #404040;
        z-index: 99999999;
      }
      .ayotooltip__left::after {
        left: auto;
        right: -10px;
        top: calc(50% - 5px);
        border-left: 5px solid #404040;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
      .ayotooltip__right::after {
        right: auto;
        left: -10px;
        top: calc(50% - 5px);
        border-right: 5px solid #404040;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
      .ayotooltip__top::after {
        top: auto;
        bottom: -10px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #404040;
        border-bottom: 5px solid transparent;
      }
    `

      const head = document.head || document.getElementsByTagName('head')[0]
      const style = document.createElement('style')
      style.id = 'ayostyle'
      head.appendChild(style)
      style.appendChild(document.createTextNode(css))
    }

    const ttBox = document.createElement('div')
    ttBox.innerHTML = binding.value || 'Tooltip'
    ttBox.classList.add('ayotooltip')
    if (binding.modifiers.left) {
      ttBox.classList.add('ayotooltip__left')
    }
    if (binding.modifiers.right) {
      ttBox.classList.add('ayotooltip__right')
    }
    if (binding.modifiers.top) {
      ttBox.classList.add('ayotooltip__top')
    }

    const f_TurnOn = (evt: MouseEvent) => {
      document.body.appendChild(ttBox)
      ttBox.style.opacity = '0'
      setTimeout(() => {
        ttBox.style.opacity = '0.9'
      }, 1)

      const position = calculatePosition(el)
      ttBox.style.left = position.left
      ttBox.style.top = position.top
    }

    const calculatePosition = (el: HTMLElement) => {
      const boundBox = el.getBoundingClientRect()

      let calculatedStyleLeft = '0px'
      if (binding.modifiers.left) {
        calculatedStyleLeft = boundBox.left - ttBox.offsetWidth - 10 + 'px'
      } else if (binding.modifiers.right) {
        calculatedStyleLeft = boundBox.left + el.offsetWidth + 10 + 'px'
      } else {
        const elCenterX = boundBox.left + el.offsetWidth / 2
        const ttBoxCenterX = boundBox.left + ttBox.offsetWidth / 2
        const xDiff = ttBoxCenterX - elCenterX
        calculatedStyleLeft = boundBox.left - xDiff + 'px'
      }

      // console.log(binding);
      let calculatedStyleTop = '0px'
      if (binding.modifiers.top) {
        calculatedStyleTop = boundBox.top - ttBox.offsetHeight - 10 + 'px'
      } else if (binding.modifiers.right || binding.modifiers.left) {
        calculatedStyleTop = boundBox.top - ttBox.offsetHeight / 2 + el.offsetHeight / 2 + 'px'
      } else {
        calculatedStyleTop = boundBox.top + el.offsetHeight + 10 + 'px'
      }

      return { left: calculatedStyleLeft, top: calculatedStyleTop }
    }

    const f_TurnOff = () => {
      // return;
      const tooltips = document.querySelectorAll('.ayotooltip')

      tooltips.forEach((tooltip) => {
        tooltip.remove()
      })
    }

    el.addEventListener('mouseover', f_TurnOn, false)
    el.addEventListener('mouseout', f_TurnOff, false)
  },
  beforeMount(el: HTMLElement) {},
  unmounted(el: HTMLElement) {},
  updated(el: HTMLElement) {}
}
