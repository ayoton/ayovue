import { onMounted, reactive } from 'vue'

export interface ToastItem {
  type: string
  summary?: string
  detail?: string
  duration?: number
  group?: string
  $when?: number
}

const toasts = reactive(new Set<ToastItem>())

// toasts.add({
//   type: "success",
//   detail: "Done successfully",
//   summary: "Success",
//   duration: 88888,
//   group: "",
//   $when: 1234578
// });

export const useToast = () => {
  function showToast(toastItem: ToastItem) {
    const toast_item = { ...toastItem, $when: Date.now() + Math.random() }
    toasts.add(toast_item)

    // setTimeout(() => {
    //   removeToast(toast_item);
    // }, toastItem.duration || 2222);
  }

  function removeToast(toast: ToastItem) {
    toasts.delete(toast)
  }

  // expose managed state as return value
  return { toasts, showToast, removeToast }
}
