import type { AComponentMeta } from '../../utils/meta-types'
import { variantType } from '../../utils/meta-types'

export const ASwitchMeta: AComponentMeta = {
  name: 'ASwitch',
  description: 'Create a Switch component',
  props: {
    modelValue: {
      type: Boolean,
      description: 'Bind value',
      nonpg: true
    },
    disabled: {
      type: Boolean,
      description: 'Desable switch'
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
      type: variantType,
      default: 'primary',
      description: 'Switch variation while value is true'
    },
    offVariation: {
      type: variantType,
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
