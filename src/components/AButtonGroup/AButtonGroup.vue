<script lang="ts" setup>
import { sizeProp, booleanProp } from '../proptypes/'

defineProps({
  size: sizeProp,
  raised: booleanProp,
  rounded: booleanProp,
  flat: booleanProp
})
</script>
<template>
  <div
    :class="{
      'a-button-group': true,
      'a-raised': raised,
      'a-rounded': rounded,
      'a-flat': flat
    }"
    :style="{ fontSize: size + 'px' }"
  >
    <slot></slot>
  </div>
</template>
