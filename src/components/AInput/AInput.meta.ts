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

    // isDisabled: {
    //   type: Boolean,
    //   description: 'To disable the input',
    //   default: false
    // },
    clearable: {
      type: Boolean,
      description: 'To clear the input',
      default: false
    },

    variant: {
      type: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', ''],
      description: 'Defines the color variant of the button.',
      default: 'primary'
    },
    type: {
      type: [
        '',
        'text',
        'number',
        'email',
        'password',
        'search',
        'url',
        'tel',
        'date',
        'time',
        'range',
        'color'
      ],
      description: 'Defines the input type.',
      default: 'text'
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
    },
    floatingLabel: {
      type: String,
      description: 'Floating Label',
      default: ''
    }
  },
  slots: {
    default: 'Click me'
  }
}
