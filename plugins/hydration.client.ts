import type { VueI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hookOnce('app:suspense:resolve', () => {
    isHydrated.value = true
  })
  const i18n = nuxtApp.vueApp.config.globalProperties.$i18n as VueI18n
  nuxtApp.hook('page:finish', () => {
    i18n.finalizePendingLocaleChange()
  })
})
