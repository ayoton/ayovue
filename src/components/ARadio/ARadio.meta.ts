import type { AComponentMeta } from '../../utils/meta-types'
import { variantType } from '../../utils/meta-types'

export const ARadioMeta: AComponentMeta = {
  name: 'ARadio',
  description: 'Defines a radio box with a label',
  props: {
    name: {
      type: String,
      description: 'Define a name for Radio Element',
      required: true
    },
    modelValue: {
      type: [String, Boolean, Number, Array, Object],
      description: 'Active Value of the Radio Component Group',
      required: true,
      nonpg: true
    },
    label: {
      type: String,
      description: 'Define a label'
    },
    variant: {
      type: variantType,
      description: 'Defines the color variant of the Radio.',
      default: 'primary'
    },
    value: {
      type: [String, Number, Date, Object, Array],
      description: 'Value for the current Radio component',
      required: true,
      nonpg: true
    },
    size: {
      type: Number,
      description: 'Radio size',
      default: 16
    },
    disabled: {
      type: Boolean,
      description: 'Make the radio disable',
      default: false
    }
  }
}
