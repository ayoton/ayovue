<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import { useToast } from '../../index'

export interface ToastItem {
  type: string
  summary?: string
  detail?: string
  duration?: number
  group?: string
  $when?: number
}

const { removeToast } = useToast()

const emit = defineEmits(['close'])

const props = defineProps({
  toast: {
    type: Object as PropType<ToastItem>,
    default: () => ({})
  }
})

const classes = computed(() => {
  return {
    'a-toast': true
  }
})

function closeToast() {
  emit('close', props.toast)
}

function endAnimation() {
  removeToast(props.toast)
}
</script>

<template>
  <div :class="classes">
    <div class="a-toast-icon">
      <div class="a-icon-check" v-if="toast.type === 'success'"></div>
      <div class="a-icon-warning" v-if="toast.type === 'warning'"></div>
      <div class="a-icon-danger" v-if="toast.type === 'danger'"></div>
      <div class="a-icon-info" v-if="toast.type === 'info'"></div>
    </div>
    <div class="a-toast-content">
      <div class="a-toast-heading">
        {{ toast.summary }}
      </div>

      <div class="a-toast-body" @click.stop>
        <slot>
          {{ toast.detail }}
        </slot>
      </div>
    </div>
    <div class="a-toast-close" @click="closeToast">
      <div class="a-icon-close"></div>
    </div>

    <!-- <div
      id="progress"
      ref="progress"
      class="a-toast-progress"
      :style="{
        '--animation': `toastprogress ${toast.duration!! / 1000}s`
      }"
      @animationend="endAnimation"
    ></div> -->
  </div>
</template>

<style></style>
