import type { AComponentMeta } from '../../utils/meta-types'

export const AInputMeta: AComponentMeta = {
  name: 'AInput',
  description: 'INput is an input component',
  props: {
    disabled: {
      type: Boolean,
      description: 'To disable the input',
      default: false
    },
    variant: {
      type: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', ''],
      description: 'Defines the color variant of the button.',
      default: 'primary'
    },
    size: {
      type: [Number, String],
      description: 'Defines the size of the button.',
      default: 16
    },

    placeholder: {
      type: String,
      description: 'Plceholder.',
      default: ''
    }
  },
  slots: {
    default: 'Click me'
  }
}
