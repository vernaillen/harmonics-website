import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import 'virtual:windi-devtools'
import 'virtual:windi.css'
import 'animate.css/animate.compat.css'
import '@/css/markdown.css'
import '@/css/main.css'
import '@/css/prose.css'
import '@/css/mailchimp-embedcode-classic-071822.css'
import { createPinia } from 'pinia'
import VueEasyLightbox from 'vue-easy-lightbox'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faBars,
  faChildReaching,
  faDrum,
  faMusic,
  faTicket,
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
  faTicket,
  faFacebook,
  faInstagram,
)

dayjs.extend(LocalizedFormat)

const pinia = createPinia()

const scrollBehavior = (
  _to: unknown,
  _from: unknown,
  _savedPosition: unknown,
) => {
  return { top: 0 }
}

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app }) => {
  app.use(i18nInstance)
  app.use(pinia)
  app.use(VueEasyLightbox)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
  app.component('MarkdownWrapper', MarkdownWrapper)
})
