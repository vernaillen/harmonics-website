const { referrerIsHome } = usePageHooks()

export default defineNuxtRouteMiddleware((_to, from) => {
  referrerIsHome.value = from.path === '/' || from.path === '/en'
})
