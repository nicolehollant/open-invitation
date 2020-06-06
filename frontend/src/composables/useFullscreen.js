import { onMounted, onBeforeUnmount, ref } from '@vue/composition-api'

export function useFullscreen(cb) {
  let frame = null
  const isFullscreen = ref(false)

  onMounted(() => {
    document.addEventListener('fullscreenchange', () => {
      frame = window.requestAnimationFrame(() => {
        if(typeof cb === 'function') cb()
        isFullscreen.value = document.fullscreen
      })
    })
  })

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(frame)
  })

  return { isFullscreen }
}