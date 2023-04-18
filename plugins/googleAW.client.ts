import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

function gtag(..._args: any[]) {
  // eslint-disable-next-line prefer-rest-params
  (window as any).dataLayer.push(arguments)
}

export default defineNuxtPlugin(() => {
  const {
    googleAW: { id, initialConsent },
  } = useRuntimeConfig().public

  if (!id)
    return

  // @ts-expect-error: `dataLayer` is not defined
  window.dataLayer = window.dataLayer || []

  gtag('js', new Date())
  gtag('config', id)

  if (!initialConsent)
    return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
        async: true,
      },
    ],
  })
})
