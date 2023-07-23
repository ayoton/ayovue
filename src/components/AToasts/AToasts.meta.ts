import type { AComponentMeta } from '../../utils/meta-types'

export const AToastsMeta: AComponentMeta = {
  name: 'AToasts',
  description: 'Toast is used to display messages in an overlay.',

  props: {
    position: {
      type: String,
      description: 'To specify the position',
      default: ''
    },

    group: {
      type: String,
      description: 'To group the toast',
      default: 'default'
    }
  }
}
