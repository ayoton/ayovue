<script lang="ts" setup>
import { unref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  onText: {
    type: String,
    default: ' '
  },
  offText: {
    type: String,
    default: ' '
  },
  onVariation: {
    type: String,
    default: 'primary'
  },
  offVariation: {
    type: String,
    default: 'secondary'
  },
  size: {
    type: Number,
    default: 16
  },
  disabled: Boolean
})
const emits = defineEmits(['update:modelValue'])
const update = () => {
  if (!props.disabled) {
    emits('update:modelValue', !unref(props.modelValue))
  }
}
</script>
<template>
  <div
    class="a-switch"
    tabindex="0"
    @click="update"
    :class="{
      [`a-${onVariation}`]: modelValue,
      [`a-${offVariation}`]: !modelValue,
      'a-switch-off': !modelValue
    }"
    :style="{ fontSize: size + 'px' }"
    role="switch"
    :aria-checked="modelValue"
    @keydown.space.prevent="update"
    @keydown.enter.prevent="update"
    :aria-disabled="disabled"
  >
    <div class="invisible-text">
      <slot name="on">{{ onText }}</slot>
    </div>
    <div class="invisible-text">
      <slot name="off">{{ offText }}</slot>
    </div>
    <div class="a-switch-label-wrapper">
      <div class="a-switch-label">
        <div class="a-switch-text">
          <slot name="on">{{ onText }}</slot>
        </div>
        <div class="a-switch-circle"><slot name="circle">&nbsp;</slot></div>
        <div class="a-switch-text">
          <slot name="off">{{ offText }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>
