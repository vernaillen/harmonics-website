import nuxtPkg from 'nuxt/package.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@nuxt/ui-pro'
  ],

  modules: [
    // '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',
    'nuxt-time',
    [
      '@twicpics/components/nuxt3',
      {
        domain: 'https://vernaillen.twic.pics',
        prefix: 'harmonics.be',
        anticipation: 0.5,
        step: 100
      }
    ]
  ],

  // debug: true,
  plugins: [
    '~/plugins/pageHooks.ts',
    '~/plugins/lazyYoutubeVideo.ts',
    '~/plugins/hydration.client.ts',
    '~/plugins/scrollEvents.client.ts'
  ],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },

  css: [
    '@twicpics/components/style.css',
    '~/assets/css/main.css',
    '~/assets/css/lazyYoutubeVideo.css'
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  site: {
    url: 'https://harmonics.be',
    name: 'Harmonics.be',
    description: 'Healing Power of Sound, Music and Dance'
  },

  colorMode: {
    preference: 'light',
    classSuffix: ''
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-breaks'
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },

  ui: {
    icons: ['circle-flags', 'heroicons', 'logos', 'mdi', 'noto', 'ph', 'simple-icons']
  },

  runtimeConfig: {
    public: {
      nuxtVersion: nuxtPkg.version
    },
    iubendaPrivacyPolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/no-markup',
    iubendaCookiePolicyURL: 'https://www.iubenda.com/api/privacy-policy/41044780/cookie-policy/no-markup'
  },

  routeRules: {
    '/trancedance': { redirect: '/trancemovement' },
    '/en/trancedance': { redirect: '/en/trancemovement' },
  },

  /* cookieControl: {
    cookieNameIsConsentGiven: 'cookieConsentGiven',
    cookieNameCookiesEnabledIds: 'allCookiesAccepted',
    isCssEnabled: true,
    colors: false,
    locales: ['en', 'nl'],
    localeTexts: {
      nl: {
        declineAll: 'Afwijzen'
      }
    }
  }, */
  sourcemap: false,

  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-01-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml']
    }
  },

  typescript: {
    strict: true
  },

  eslint: {
    config: {
      stylistic: true,
    },
    checker: {
      lintOnStart: true,
      fix: true,
    },
  },

  fonts: {
    families: [
      { name: 'mic32', src: '/fonts/58405e358c3b387807fb206f187b0aa4-webfont.woff2' },
      { name: 'montserrat', weights: [300, 400, 500, 600] }
    ]
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: false
    },
    locales: [
      { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
      { code: 'en', iso: 'en-US', file: 'en-US.json' }
    ],
    lazy: false,
    defaultLocale: 'nl',
    strategy: 'prefix_except_default'
  },

  image: {
    provider: 'twicpics',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dys7j44q8/image/upload/harmonics/'
    },
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/harmonics.be'
    }
  },

  ogImage: {
    fonts: [
      // will load this font from Google fonts
      'Montserrat:500',
      'Montserrat:600',
      'Montserrat:700'
    ]
  },

  plausible: {
    apiHost: 'https://harmonics.be/plio'
  },

  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true
    }
  },

  uiPro: {
    routerOptions: false
  },
})
