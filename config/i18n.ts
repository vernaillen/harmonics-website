export const i18n = {
  detectBrowserLanguage: {
    useCookie: true,
    redirectOn: 'root',
  },
  locales: [
    { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
    { code: 'en', iso: 'en-US', file: 'en-US.json' },
  ],
  langDir: 'locales/',
  defaultLocale: 'nl',
  lazy: true,
  strategy: 'prefix_and_default',

  vueI18n: './config/vueI18n.ts',
}
