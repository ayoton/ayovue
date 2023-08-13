import type { AComponentMeta } from '../../utils/meta-types'
export const ASelectMeta: AComponentMeta = {
  name: 'ASelect',
  description: 'Select component allow you to create advance and customizable Select Dropdown',
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      description: 'Value of the select component'
    },
    options: { type: Array, description: 'An array of available options' },
    valueField: {
      type: [String, Function],
      description: 'Property name or getter function to use as the value of an option.'
    },
    uniqueKey: {
      type: [String, Function],
      description: 'Property name or getter function to use as the unique key of an option.'
    },
    labelField: {
      type: [String, Function],
      description: 'Property name or getter function to use as the label of an option.'
    },
    filter: {
      type: Boolean,
      description: 'Show a filter input field'
    },
    placeholder: {
      type: String,
      description: 'Define a placeholder for the component'
    },
    clearable: {
      type: Boolean,
      description: 'Show a clearable icon when value is available'
    },
    multi: {
      type: Boolean,
      description: 'Enable to select multiple values'
    }
  }
}
