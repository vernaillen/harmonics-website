import type { VueI18n } from 'vue-i18n'

export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.vueApp.config.globalProperties.$i18n as VueI18n
  i18n.finalizePendingLocaleChange()
})
