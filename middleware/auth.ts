export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  if (to.path.startsWith('/admin/redirect'))
    return navigateTo('/login?redirectTo=/admin&refresh=true')
  if (
    !user.value
    && (to.path.startsWith('/admin') || to.path.startsWith('/ticket'))
  )
    return navigateTo('/login?redirectTo=/admin')
})
