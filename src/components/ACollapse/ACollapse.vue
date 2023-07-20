<script lang="ts" setup>
import { ref } from 'vue'
import { booleanProp } from '../proptypes'

/***
 * Props: open, title, width, closeOnOutsideClick, hideHeader
 * Slots: header, footer
 */

const height = ref('auto')

defineProps({
  open: booleanProp
})

function beforeEnter(el: Element) {
  height.value = el.scrollHeight + 'px'
}
</script>

<template>
  <Transition name="collapse" @enter="beforeEnter">
    <div v-show="open" :style="{ '--height': height }">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped></style>
