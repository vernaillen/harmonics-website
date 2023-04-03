import type { MenuItem } from '~/types'

export function useMenu(): MenuItem[] {
  return [
    {
      path: '/',
      titleKey: 'menu.home',
    },
    {
      path: '/news',
      titleKey: 'menu.news',
    },
    {
      path: '/trancedance',
      titleKey: 'menu.trancedance',
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
