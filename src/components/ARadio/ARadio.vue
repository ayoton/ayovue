<script lang="ts" setup>
import type { InputHTMLAttributes, PropType } from 'vue'
import { computed } from 'vue'

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'click', value: MouseEvent): void
  (e: 'change', value: Event): void
}>()

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  variant: {
    type: String,
    default: 'primary'
  },
  value: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 16
  },
  disabled: Boolean,
  pt: {
    type: Object as PropType<InputHTMLAttributes>,
    default: () => ({})
  }
})
const cvalue = computed({
  get: () => {
    return props.modelValue
  },
  set: (v) => {
    emits('update:modelValue', v)
  }
})
</script>

<template>
  <label :class="['a-radio', ['a-' + variant]]" :style="{ fontSize: size + 'px' }">
    <input
      type="radio"
      :name="name"
      :value="value"
      v-model="cvalue"
      :disabled="disabled"
      v-bind="pt"
    />
    <span>{{ label }}</span>
  </label>
</template>
