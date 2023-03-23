import { i18n } from './config/i18n'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    mollieApiKey: '', // can be overridden by NUXT_MOLLIE_API_KEY environment variable
    sendgridApiKey: '',
    iubendaPrivacyPolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/no-markup',
    iubendaCookiePolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/cookie-policy/no-markup',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n-edge',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-gtag',
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
  gtag: {
    id: 'G-K4Q8LZV0QW',
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
  i18n,
  generate: {
    routes: ['/', '/thanks'],
  },
  nitro: {
    /* prerender: {
      routes: ['/sitemap.xml'],
      ignore: ['.netlify'],
    }, */
  },
})
