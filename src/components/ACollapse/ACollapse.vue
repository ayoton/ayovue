<script lang="ts" setup>
import { ref } from 'vue'
import { booleanProp } from '../proptypes'

/***
 * Props: modelValue, title, width, closeOnOutsideClick, hideHeader
 * Slots: header, footer
 */

const height = ref('auto')

const emit = defineEmits(['update:modelValue'])
// const slots = useSlots();

const props = defineProps({
  modelValue: booleanProp
})

function beforeEnter(el: Element) {
  // console.log(el.scrollHeight);
  height.value = el.scrollHeight + 'px'
}

// const dialogEl = ref<HTMLDialogElement | null>(null);
</script>

<template>
  <Transition name="collapse" @enter="beforeEnter">
    <div v-show="modelValue" :style="{ '--height': height }">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped></style>
