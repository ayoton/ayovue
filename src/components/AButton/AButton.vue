<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
defineEmits([])

const classes = computed(() => {
  return {
    'a-button': true,
    [`a-${props.variant}`]: true
  }
})
</script>
<template>
  <button :class="classes"><slot /></button>
</template>
