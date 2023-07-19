import type { AComponentMeta } from '../../utils/meta-types'

export const ASwitchMeta: AComponentMeta = {
  name: 'ASwitch',
  description: 'Create a Switch component',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      description: 'Bind value'
    },
    onText: {
      type: String,
      default: ' ',
      description: 'Text to show while value is true'
    },
    offText: {
      type: String,
      default: ' ',
      description: 'Text to show while value is false'
    },
    onVariation: {
      type: String,
      default: 'primary',
      description: 'Switch variation while value is true'
    },
    offVariation: {
      type: String,
      default: 'secondary',
      description: 'Switch variation while value is false'
    },
    size: {
      type: Number,
      default: 16,
      description: 'Switch Size'
    }
  }
}
