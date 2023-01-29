import type { VueI18n } from 'vue-i18n'

export default defineNuxtPlugin(async (nuxt) => {
  const i18n = nuxt.vueApp.config.globalProperties.$i18n as VueI18n
  const { setLocale, locales } = i18n
  console.log(`i18n.locale: ${i18n.locale}`)

  watch([i18n.locale, isHydrated], () => {
    /* if (isHydrated.value && lang !== i18n.locale)
      setLocale(lang) */
    // console.log(`watch locale: ${locale}`)
    console.log(`watch i18n.locale: ${i18n.locale}`)
    console.log(`watch isHydrated: ${isHydrated.value}`)
  }, { immediate: true })
})
