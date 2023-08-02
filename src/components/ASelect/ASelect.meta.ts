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
      description: 'Property name or getter function to use as the value of an option.',
      default: 'value'
    },

    labelField: {
      type: [String, Function],
      description: 'Property name or getter function to use as the label of an option.',
      default: 'name'
    },
    showSearchField: {
      type: [Boolean, Function],
      description: 'Show a search input field'
    },
    floatingLabel: {
      type: String,
      description: 'Define a floating label for the component'
    },
    placeholder: {
      type: String,
      description: 'Define a placeholder for the component'
    },
    clearable: {
      type: Boolean,
      description: 'Show a clearable icon when value is available'
    },
    variant: {
      type: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      description: 'Defines the color variant of the button.',
      default: 'primary'
    },
    size: {
      type: [Number, String],
      description: 'Defines the size of the button.',
      default: 16
    },
    isDisabled: {
      type: [Boolean, Function],
      description: 'To disable the select field',
      default: false
    },
    width: {
      type: String,
      description: 'To set a custome width for the select field',
      default: 'auto'
    },
    autofocus: {
      type: Boolean,
      description: 'To focus the select field automatically',
      default: false
    },
    scrollHeight: {
      type: Number,
      description: 'To set a height of options list in pixel',
      default: '188'
    },
    grouped: {
      type: Boolean,
      description: 'To show a grouped select field',
      default: false
    },
    groupedLabelField: {
      type: String,
      description: 'Property name for showing group title',
      default: 'name'
    },

    groupedOptionsField: {
      type: String,
      description: 'Property name for getting options for each group',
      default: 'options'
    },
    loading: {
      type: Boolean,
      description: 'To show a spinner icon inside select field',
      default: false
    }

    // groupByField: {},
    // uniqueKey: {
    //   type: [String, Function],
    //   description: 'Property name or getter function to use as the unique key of an option.'
    // },
    // multi: {
    //   type: Boolean,
    //   description: 'Enable to select multiple values'
    // }
  }
}
