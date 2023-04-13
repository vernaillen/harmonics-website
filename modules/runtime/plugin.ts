import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { useHead } from '@unhead/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig().public.iubenda

  const i18nSettings = useRuntimeConfig().public.iubenda.i18n
  let localeCookiePolicyId = null

  if (nuxtApp.$i18n && i18nSettings) {
    const { locale } = nuxtApp.$i18n.locale
    if (i18nSettings[locale]) {
      localeCookiePolicyId = i18nSettings[locale].cookiePolicyId
    }
  } else {
    console.debug('i18n not detected')
  }

  const linksStyle = options.links.style
  const whiteLabel = options.links.whiteLabel
  const embed = options.links.embed
  const cookiePolicyId = localeCookiePolicyId || options.config.cookiePolicyId
  const baseUrl = 'https://www.iubenda.com'
  const apiUrl = `${baseUrl}/api`
  const privacyPolicyUrl = `${baseUrl}/privacy-policy/${cookiePolicyId}`
  const cookiePolicyUrl = `${privacyPolicyUrl}/cookie-policy`
  const privacyPolicyApiUrl = `${apiUrl}/privacy-policy/${cookiePolicyId}`
  const cookiePolicyApiUrl = `${privacyPolicyApiUrl}/cookie-policy`

  const linksClass = `iubenda-${linksStyle} ${
    whiteLabel ? 'no-brand' : ''
  } iubenda-noiframe ${embed ? 'iubenda-embed' : ''}`

  function getPrivacyPolicyLinkHtml(label = 'Privacy Policy', attributes = {}) {
    const { classes } = attributes
    return `<a
        href="${privacyPolicyUrl}"
        class="${linksClass} ${classes}"
        title="${label}">${label}</a>`
  }

  function getCookiePolicyLinkHtml(label = 'Cookie Policy', attributes = {}) {
    const { classes } = attributes
    return `<a
        href="${cookiePolicyUrl}"
        class="${linksClass} ${classes}"
        title="${label}">${label}</a>`
  }

  const iub = {
    privacyPolicyUrl,
    cookiePolicyUrl,
    privacyPolicyApiUrl,
    cookiePolicyApiUrl,
    getPrivacyPolicyLinkHtml,
    getCookiePolicyLinkHtml,
  }
  nuxtApp.provide('iubenda', iub)

  useHead({
    script: options.head.script
  })
})
