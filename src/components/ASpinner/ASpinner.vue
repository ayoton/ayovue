<script lang="ts" setup>
import { sizeProp, variantProp } from '../proptypes'

const props = defineProps({
  size: sizeProp,
  variant: variantProp
})

const emit = defineEmits([])
</script>
<template>
  <div :class="`a-loading a-spinner a-${variant}`" :style="{ fontSize: `${size || 16}px` }"></div>
</template>
