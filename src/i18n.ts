import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('../locales/*.yml', { eager: true }))
    .map(([key, value]) => {
      return [key.slice(11, -4), value.default]
    }),
)

export const i18nInstance = createI18n({
  legacy: false,
  locale: 'nl',
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
})
export const i18n = i18nInstance.global
