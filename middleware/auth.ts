export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  console.log('auth.ts:')
  console.log(to)
  if (to.path.startsWith('/tickets') && to.path.endsWith('/authenticating')) {
    const origPath = to.path.substring(0, to.path.indexOf('/authenticating'))
    console.log(`auth.ts: detected callback, redirecting to ${origPath}`)
    return navigateTo(`/login?redirectTo=${origPath}&refresh=true`)
  }

  if (!user.value && to.path.startsWith('/tickets'))
    return navigateTo(`/login?redirectTo=${to.path}`)
})
