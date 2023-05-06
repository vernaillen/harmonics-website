import { i18n } from './config/i18n'
import { iubenda } from './config/iubenda'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    mollieApiKey: '', // can be overridden by NUXT_MOLLIE_API_KEY environment variable
    sendgridApiKey: '',
    iubendaPrivacyPolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/no-markup',
    iubendaCookiePolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/cookie-policy/no-markup',
    public: {
      googleAW: {
        id: 'AW-1009002362',
        initialConsent: true
      }
    }
  },

  extends: [
    '@vernaillen/nuxt-base-layer'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
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
    'nuxt-icon'
  ],

  vernaillenModule: {
    instagram: {
      enabled: true
    }
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
    '@/assets/css/prose.css',
    'animate.css/animate.min.css'
  ],

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/harmonics'
    }
  },

  googleFonts: {
    download: true,
    preconnect: true,
    display: 'swap',
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },

  plausible: {
    apiHost: 'https://harmonics.be/plio'
  },

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-breaks',
        'remark-directive-rehype'
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },

  i18n,
  iubenda,

  generate: {
    routes: ['/', '/thanks']
  },

  nitro: {
    /* prerender: {
      routes: ['/sitemap.xml'],
      ignore: ['.netlify'],
    }, */
  },

  devtools: {
    enabled: true
  }
})
