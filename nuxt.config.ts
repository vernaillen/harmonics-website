// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
    '@/assets/css/prose.css',
    '@/assets/css/mailchimp-embedcode-classic-071822.css',
    'animate.css/animate.min.css',
  ],
  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Ubuntu: [400, 500, 700],
    },
  },
  content: {
    documentDriven: true,
    generate: {
      routes: ['/', '/about', '/contact', '/thanks'],
    },
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'nl',
    langDir: 'locales/',
    locales: [
      { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
  },
})
