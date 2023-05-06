export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  if (to.path.startsWith('/tickets') && to.path.endsWith('/authenticating')) {
    const origPath = to.path.substring(0, to.path.indexOf('/authenticating'))
    return navigateTo(`/login?redirectTo=${origPath}&refresh=true`)
  }

  if ((!user.value || !user.value.email) && to.path.startsWith('/tickets')) { return navigateTo(`/login?redirectTo=${to.path}`) }
})
