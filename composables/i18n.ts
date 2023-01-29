import type { UseTimeAgoOptions } from '@vueuse/core'

export function useTimeAgoOptions(short = false): UseTimeAgoOptions<false> {
  const { d, t, n: fnf, locale } = useI18n()
  const prefix = short ? 'short_' : ''

  const fn = (n: number, past: boolean, key: string) => {
    return t(`time_ago_options.${prefix}${key}_${past ? 'past' : 'future'}`, n, {
      named: {
        v: fnf(n, 'smallCounting', locale.value),
      },
    })
  }

  return {
    rounding: 'floor',
    showSecond: !short,
    updateInterval: short ? 60000 : 1000,
    messages: {
      justNow: t('time_ago_options.just_now'),
      // just return the value
      past: n => n,
      // just return the value
      future: n => n,
      second: (n, p) => fn(n, p, 'second'),
      minute: (n, p) => fn(n, p, 'minute'),
      hour: (n, p) => fn(n, p, 'hour'),
      day: (n, p) => fn(n, p, 'day'),
      week: (n, p) => fn(n, p, 'week'),
      month: (n, p) => fn(n, p, 'month'),
      year: (n, p) => fn(n, p, 'year'),
      invalid: '',
    },
    fullDateFormatter(date) {
      return d(date, short ? 'short' : 'long')
    },
  }
}
