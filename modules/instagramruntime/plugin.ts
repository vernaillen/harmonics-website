import { defineNuxtPlugin } from '#app'
import { iframeResize } from 'iframe-resizer';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('resize', {
    mounted (el, binding) {
      el.addEventListener('load', () => iframeResize(binding.value, el))
    },
    unmounted (el) {
      el.iFrameResizer.removeListeners();
    }
  })
})
