import type { AComponentMeta } from '../../utils/meta-types'

export const ADialogMeta: AComponentMeta = {
  name: 'ADialog',
  description: 'ADialog component creates a popup dialogs or modals on a web page to display content in an overlay window',
  props: {
    closeOnOutsideClick: {
      type: Boolean,
      description: 'Specify if the dialog will be closed on outside click.',
      default: false
    },

    hideHeader: {
      type: Boolean,
      description: 'Specify if the header will be hidden or not.',
      default: false
    },

    width: {
      type: String,
      description: 'width of the dialog container',
      default: '800px'
    },

    title: {
      type: String,
      description: 'Title of the dialog header',
      default: 'Dialog title'
    }
  },
  slots: {
    default: 'Lorem ipsum dolar',
    header: 'Header slot',
    footer: 'Footer slot'
  }
}
