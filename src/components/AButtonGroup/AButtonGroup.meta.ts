import { defineComponent, h, Fragment } from 'vue'
import type { AComponentMeta } from '../../utils/meta-types'
import AButton from '../AButton'

export const AButtonGroupMeta: AComponentMeta = {
  name: 'AButtonGroup',
  description: 'Create a Button group',
  props: {
    raised: {
      type: Boolean,
      description: 'Add a shadow to indicate elevation.',
      default: false
    },
    rounded: {
      type: Boolean,
      description: 'Add a circular border radius to the button group.',
      default: false
    },

    flat: {
      type: Boolean,
      description: 'Remove border radius',
      default: false
    },
    size: {
      type: [Number, String],
      description: 'Defines the size of the button.',
      default: 16
    }
  },
  slots: {
    default: defineComponent({
      name: 'ABtnGroupSlot',
      render() {
        return h(Fragment, [
          h(AButton, { variant: 'secondary' }, 'Button 1'),
          h(AButton, { variant: 'info' }, 'Button 2'),
          h(AButton, { variant: 'warning' }, 'Button 3'),
          h(AButton, { variant: 'info' }, 'Button 4')
        ])
      }
    })
  }
}
