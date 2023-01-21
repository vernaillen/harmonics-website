// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
    '@/assets/css/prose.css',
    'animate.css/animate.min.css',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/harmonics',
    },
  },
  googleFonts: {
    download: true,
    preconnect: true,
    display: 'swap',
    families: {
      Ubuntu: [400, 500, 700],
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-breaks',
        'remark-directive-rehype',
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank',
        },
      },
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
  plausible: {
    // apiHost: 'https://harmonics.be/plredir',
  },
})
