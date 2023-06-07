<script lang="ts" setup>
import { computed } from 'vue'
import { variantProp, sizeProp, booleanProp } from '../proptypes/'

const props = defineProps({
  variant: variantProp,
  size: sizeProp,
  loading: booleanProp,
  outlined: booleanProp,
  raised: booleanProp,
  rounded: booleanProp,
  flat: booleanProp,
  text: booleanProp,
  icon: booleanProp,
  block: booleanProp,
  loaderClass: {
    type: String,
    default: 'a-loading'
  }
})

const classes = computed(() => {
  return {
    'a-button': true,
    [`a-${props.variant}`]: true,
    [props.loaderClass]: props.loading,
    'a-outlined': props.outlined,
    'a-raised': props.raised,
    'a-rounded': props.rounded,
    'a-flat': props.flat,
    'a-text': props.text,
    'a-icon': props.icon,
    'a-block': props.block
  }
})
</script>

<template>
  <button :class="classes" :style="{ 'font-size': `${size}px` }" type="button">
    <slot />
  </button>
</template>
