import type { AComponentMeta } from '../../utils/meta-types'
export const ACollapseMeta: AComponentMeta = {
  name: 'ACollapse',
  description:
    'Easily toggle visibility of almost any content on your pages in a vertically collapsing container. Includes support for making accordions. Visibility can be easily toggled with our',
  props: {
    open: {
      type: Boolean,
      description: 'To show or hide a section',
      default: false
    }
  },
  slots: {
    default: ''
  }
}
