import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import 'virtual:windi-devtools'
import 'virtual:windi.css'
import '@/css/markdown.css'
import '@/css/main.css'
import '@/css/prose.css'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faBars,
  faChildReaching,
  faDrum,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from '@/App.vue'
import { i18nInstance } from '@/i18n'
import routes from '~pages'
import MarkdownWrapper from '@/components/MarkdownWrapper.vue'
library.add(
  faArrowRight,
  faBars,
  faChildReaching,
  faDrum,
  faMusic,
  faFacebook,
  faInstagram,
)

function formatDate(d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatDate: typeof formatDate
  }
}
dayjs.extend(LocalizedFormat)

const pinia = createPinia()

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(i18nInstance)
  app.use(pinia)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
  app.component('MarkdownWrapper', MarkdownWrapper)
  app.config.globalProperties.$formatDate = formatDate
})
