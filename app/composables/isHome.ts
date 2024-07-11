export const isHome = (currentPath: string) => {
  const { referrerIsHome } = usePageHooks()
  return referrerIsHome.value || currentPath === '/' || currentPath === '/en'
}
