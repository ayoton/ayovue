<script lang="ts" setup>
import { ref, watch, useSlots } from 'vue'
import { stringProp, booleanProp } from '../proptypes'

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

const props = defineProps({
  modelValue: booleanProp,
  title: stringProp,
  width: {
    type: String,
    default: '800px'
  },
  closeOnOutsideClick: booleanProp,
  hideHeader: booleanProp
})

const dialogEl = ref<HTMLDialogElement | null>(null)

function handleOutsideClick(e: MouseEvent) {
  if (props.closeOnOutsideClick) {
    const rect: any = dialogEl.value?.getBoundingClientRect()
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    if (!isInDialog) {
      close()
    }
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      dialogEl.value?.showModal()
    } else {
      close()
    }
  }
)

function close() {
  if (props.modelValue) {
    emit('update:modelValue', false)
  }
}

function open() {
  emit('update:modelValue', true)
}

defineExpose({ close, open })
</script>

<template>
  <Transition name="dialog" @after-leave="dialogEl?.close()">
    <dialog
      class="a-dialog"
      ref="dialogEl"
      v-show="modelValue"
      @click.stop="handleOutsideClick"
      :style="{ width: width || '500px' }"
      @cancel.prevent="close"
    >
      <slot name="header" :close="close">
        <div class="a-dialog-header" v-if="!hideHeader">
          <div class="a-dialog-title">
            {{ title }}
          </div>
          <div class="a-dialog-close">
            <div class="a-icon-close a-action-btn" @click="close()"></div>
          </div>
        </div>
      </slot>
      <div class="a-dialog-body">
        <slot></slot>
      </div>
      <div class="a-dialog-footer" v-if="slots['footer']">
        <slot name="footer" :close="close"> </slot>
      </div>
    </dialog>
  </Transition>
</template>

<style></style>
