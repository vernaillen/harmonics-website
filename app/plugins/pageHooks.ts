const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()
const { isPageLoading, referrerIsHome } = usePageHooks()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isPageLoading.value = true
  })
  nuxtApp.hook('page:finish', () => {
    isMobileNavClosing.value = true
    setTimeout(() => {
      isMobileNavOpen.value = false
      isMobileNavClosing.value = false
    }, 100)
    isPageLoading.value = false
    referrerIsHome.value = false
  })
})
