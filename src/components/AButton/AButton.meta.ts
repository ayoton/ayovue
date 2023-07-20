import type { AComponentMeta } from '../../utils/meta-types'

export const AButtonMeta: AComponentMeta = {
  name: 'AButton',
  description: 'Button is an extension to standard input element with icons and theming.',
  props: {
    outlined: {
      type: Boolean,
      description: 'Add a border class without a background initially.',
      default: false
    },
    raised: {
      type: Boolean,
      description: 'Add a shadow to indicate elevation.',
      default: false
    },
    rounded: {
      type: Boolean,
      description: 'Add a circular border radius to the button.',
      default: false
    },

    flat: {
      type: Boolean,
      description: 'Remove border radius',
      default: false
    },
    text: {
      type: Boolean,
      description: 'Show button as text without a background and border',
      default: false
    },
    icon: {
      type: Boolean,
      description: 'Show icon type button',
      default: false
    },
    loading: {
      type: Boolean,
      description: 'Whether the button is in loading state.',
      default: false
    },
    block: {
      type: Boolean,
      description: 'Show button with 100% width',
      default: false
    },
    disabled: {
      type: Boolean,
      description: 'To disable the button',
      default: false
    },
    loaderClass: {
      type: String,
      description: 'Set the class name of loder element',
      default: 'a-loading'
    },
    variant: {
      type: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      description: 'Defines the color variant of the button.',
      default: 'primary'
    },
    size: {
      type: [Number, String],
      description: 'Defines the size of the button.',
      default: 16
    }
  },
  slots: {
    default: 'Click me'
  }
}
