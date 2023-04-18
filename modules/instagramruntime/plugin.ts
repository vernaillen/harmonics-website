import { iframeResize } from 'iframe-resizer'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('resize', {
    mounted(el, binding) {
      el.addEventListener('load', () => iframeResize(binding.value, el))
    },
    unmounted(el) {
      el.iFrameResizer.removeListeners()
    },
  })
})
