export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()
  if (
    !user.value
    && (to.path.startsWith('/admin') || to.path.startsWith('/ticket'))
  )
    return navigateTo('/login?redirectTo=/admin')
})
