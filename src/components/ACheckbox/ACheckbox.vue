<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'click', value: MouseEvent): void
  (e: 'change', value: Event): void
}>()

type ModelValue = boolean | any[]

const props = defineProps({
  modelValue: [Boolean, Array] as PropType<ModelValue>,
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function, Symbol]
  },
  size: {
    type: Number,
    default: 16
  },
  label: {
    type: String
  },
  variant: {
    type: String,
    default: 'primary'
  },
  outlined: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  disabled: Boolean
})

const cvalue = computed({
  get: () => {
    return props.modelValue
  },
  set: (v) => {
    emits('update:modelValue', v)
  }
})

const classes = computed(() => {
  return {
    solid: !props.outlined,
    rounded: props.rounded
  }
})
</script>
<template>
  <label
    :class="{ 'a-labeled-checkbox': true, [`a-${props.variant}`]: true }"
    :style="{ fontSize: size + 'px' }"
  >
    <input
      type="checkbox"
      v-model="cvalue"
      class="a-checkbox"
      :value="value"
      :class="classes"
      @click="$emit('click', $event)"
      @change="$emit('change', $event)"
      :disabled="disabled"
    />
    <span v-if="label">{{ label }}</span>
  </label>
</template>
