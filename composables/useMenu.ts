import type { MenuItem } from '~/types'

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
      path: '/news',
      titleKey: 'menu.news',
    },
    {
      path: '/about',
      titleKey: 'menu.about',
    },
    {
      path: '/contact',
      titleKey: 'menu.contact',
    },
  ]
}
