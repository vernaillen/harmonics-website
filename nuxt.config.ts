import { i18n } from './config/i18n'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    mollieApiKey: '', // can be overridden by NUXT_MOLLIE_API_KEY environment variable
    mollieRedirectBase: 'https://mollie--harmonics-website.netlify.app',
    sendgridApiKey: '',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    '~/modules/build-env',
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
    '@/assets/css/prose.css',
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
  i18n,
  plausible: {
    // apiHost: 'https://harmonics.be/plredir',
  },
  generate: {
    routes: ['/', '/thanks'],
  },
  nitro: {
    prerender: {
      ignore: ['.netlify', '/emails/paymentReceived'],
    },
  },
})
