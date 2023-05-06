import { defineStore } from 'pinia'

export const usePolitePopupStore = defineStore('politePopup', {
  state: () => ({
    visible: false
  }),
  actions: {
    hide () {
      this.visible = false
    },
    show () {
      this.visible = true
    },
    toggle () {
      this.visible = !this.visible
    }
  }
})
