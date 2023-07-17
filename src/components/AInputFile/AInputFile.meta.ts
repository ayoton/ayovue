import type { AComponentMeta } from '../../utils/meta-types'

export const AInputFileMeta: AComponentMeta = {
  name: 'AInputFile',
  description: 'InputFile is used to upload files and show previews',
  props: {
    multiple: {
      type: Boolean,
      description: 'Specify if it supports multiple file uploads or not.',
      default: false
    }
  },
  slots: {
    // default: 'Lorem ipsum dolar',
    // header: 'Header slot',
    // footer: 'Footer slot'
  }
}
