import type { MenuItem } from '~~/types/menuItem'

export const useMenu = (): MenuItem[] => {
  return [
    {
      path: '/',
      titleKey: 'menu.home',
    },
    {
      path: '/trancedance',
      titleKey: 'menu.trancedance',
    },
    {
      path: '/blog',
      titleKey: 'menu.blog',
    },
    {
      path: '/about',
      titleKey: 'menu.about',
    },
    {
      path: '/newsletter',
      titleKey: 'menu.newsletter',
    },
    {
      path: '/contact',
      titleKey: 'menu.contact',
    },
  ]
}
