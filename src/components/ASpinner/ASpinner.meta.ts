import type { AComponentMeta } from '../../utils/meta-types'
export const ASpinnerMeta: AComponentMeta = {
  name: 'ASpinner',
  description: 'ASpinner is a loading component',
  props: {
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
  slots: {}
}
