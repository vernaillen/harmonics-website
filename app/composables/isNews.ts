export const isNews = (currentPath: string) => {
  return currentPath.startsWith('/news') || currentPath.startsWith('/en/news')
}
