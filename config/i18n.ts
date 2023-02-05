import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import type { DateTimeFormats, NumberFormats, PluralizationRule, PluralizationRules } from '@intlify/core-base'

import type { LocaleObject } from '#i18n'

interface LocaleObjectData extends LocaleObject {
  numberFormats?: NumberFormats
  dateTimeFormats?: DateTimeFormats
  pluralRule?: PluralizationRule
}

const locales: LocaleObjectData[] = [

  { code: 'nl', name: 'Nederlands', iso: 'en-BE', file: 'nl-BE.json' },
  { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json' },
]

const buildLocales = () => {
  const useLocales = Object.values(locales).reduce((acc, data) => {
    acc.push(data)
    return acc
  }, <LocaleObjectData[]>[])

  return useLocales.sort((a, b) => a.code.localeCompare(b.code))
}

const currentLocales = buildLocales()

const datetimeFormats = Object.values(currentLocales).reduce((acc, data) => {
  const dateTimeFormats = data.dateTimeFormats
  if (dateTimeFormats) {
    acc[data.code] = { ...dateTimeFormats }
    delete data.dateTimeFormats
  }
  else {
    acc[data.code] = {
      shortDate: {
        dateStyle: 'short',
      },
      short: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
      long: {
        dateStyle: 'long',
        timeStyle: 'medium',
      },
    }
  }

  return acc
}, <DateTimeFormats>{})

const numberFormats = Object.values(currentLocales).reduce((acc, data) => {
  const numberFormats = data.numberFormats
  if (numberFormats) {
    acc[data.code] = { ...numberFormats }
    delete data.numberFormats
  }
  else {
    acc[data.code] = {
      percentage: {
        style: 'percent',
        maximumFractionDigits: 1,
      },
      smallCounting: {
        style: 'decimal',
        maximumFractionDigits: 0,
      },
      kiloCounting: {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 1,
      },
      millionCounting: {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 2,
      },
    }
  }

  return acc
}, <NumberFormats>{})

const pluralRules = Object.values(currentLocales).reduce((acc, data) => {
  const pluralRule = data.pluralRule
  if (pluralRule) {
    acc[data.code] = pluralRule
    delete data.pluralRule
  }

  return acc
}, <PluralizationRules>{})

export const i18n: NuxtI18nOptions = {
  // skipSettingLocaleOnNavigate: true,
  locales: [
    { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
    { code: 'en', iso: 'en-US', file: 'en-US.json' },
  ],
  lazy: true,
  strategy: 'prefix_and_default',
  detectBrowserLanguage: {
    useCookie: true,
    redirectOn: 'root',
  },
  langDir: 'locales/',
  defaultLocale: 'nl',
  vueI18n: {
    availableLocales: currentLocales.map(l => l.code),
    fallbackLocale: 'en-US',
    fallbackWarn: false,
    missingWarn: false,
    datetimeFormats,
    numberFormats,
    pluralRules,
  },
}
