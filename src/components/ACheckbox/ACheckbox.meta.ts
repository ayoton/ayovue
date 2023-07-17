import type { AComponentMeta } from '../../utils/meta-types'
import { variantType } from '../../utils/meta-types'

export const ACheckboxMeta: AComponentMeta = {
  name: 'ACheckbox',
  description: 'Define a checkbox with a lable',
  props: {
    modelValue: { type: [Boolean, Array], description: 'modelValue to bind using v-model' },
    value: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      description: 'Value for the checkbox'
    },
    size: {
      type: Number,
      description: 'Define size of the checkbox',
      default: 16
    },
    label: {
      type: String,
      description: 'Define lable for the checkbox'
    },
    variant: {
      type: variantType,
      description: 'Define color variant',
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      description: 'Enable outlined variant',
      default: false
    },
    rounded: {
      type: Boolean,
      description: 'Enable rounded variant',
      default: false
    },
    disabled: { type: Boolean, description: 'Make disable' }
  }
}
