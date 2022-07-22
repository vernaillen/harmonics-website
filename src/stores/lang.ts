import { defineStore } from 'pinia'
import { i18n } from '@/i18n'

export const useLocale = defineStore('localeStore', {
  state: () => ({
    lang: 'nl',
  }),
  actions: {
    setLanguage(newLang: string) {
      i18n.locale.value = newLang
      this.lang = newLang
    },
  },
})
