import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: 'https://harmonics.be',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
