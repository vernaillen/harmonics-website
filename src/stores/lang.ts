import { defineStore } from 'pinia'

export const useLangStore = defineStore('langStore', {
  state: () => ({
    lang: 'nl',
  }),
  actions: {
    changeLang(newLang: String) {
      this.lang = newLang
    },
  },
})
