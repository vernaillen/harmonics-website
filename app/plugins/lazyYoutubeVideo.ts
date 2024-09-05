/* eslint-disable @typescript-eslint/no-unused-expressions */
/* compiled from the vue3 branch of https://github.com/andreww2012/vue-lazy-youtube-video
Thanks Andrew Vasilchuk & Andrew Kazakov!
*/
import { defineComponent, ref, computed, onUnmounted, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, mergeProps, Fragment, createCommentVNode, renderSlot } from 'vue'

const DEFAULT_ALT_ATTRIBUTE = 'Video thumbnail'
const DEFAULT_BUTTON_LABEL = 'Play video'
const DEFAULT_ASPECT_RATIO = '16:9'
const PREVIEW_IMAGE_SIZES = [
  'default',
  'mqdefault',
  'sddefault',
  'hqdefault',
  'maxresdefault'
]
const DEFAULT_PREVIEW_IMAGE_SIZE = PREVIEW_IMAGE_SIZES[4]
const DEFAULT_IFRAME_ATTRIBUTES = {
  allowfullscreen: true,
  frameborder: 0,
  allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
}
const YOUTUBE_REGEX = /^https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/(.+?)(?:\?.*)?$/
const PLAYER_SCRIPT_SRC = 'https://www.youtube.com/player_api'
const PLAYER_CHECK_MS = 32
const isAspectRatio = value => /^\d+:\d+$/.test(value)
const toListenersWithOn = listeners => Object.fromEntries(Object.entries(listeners).map(([key, value]) => [
  `on${key[0].toUpperCase()}${key.slice(1)}`,
  value
]))
const _hoisted_1 = ['src']
const _hoisted_2 = ['srcset']
const _hoisted_3 = ['src', 'alt']
const _hoisted_4 = ['aria-label']
const _hoisted_5 = {
  key: 1,
  viewBox: '0 0 68 48',
  width: '100%',
  height: '100%'
}
const _hoisted_6 = /* @__PURE__ */ createElementVNode('path', {
  class: 'y-video__button-shape',
  d: 'M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z'
}, null, -1)
const _hoisted_7 = /* @__PURE__ */ createElementVNode('path', {
  class: 'y-video__button-icon',
  d: 'M45 24L27 14v20'
}, null, -1)
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
]
const __default__ = {
  name: 'VueLazyYoutubeVideo'
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    src: {
      type: String,
      required: true,
      validator: value => YOUTUBE_REGEX.test(value)
    },
    alt: { type: String, required: false, default: DEFAULT_ALT_ATTRIBUTE },
    buttonLabel: { type: String, required: false, default: DEFAULT_BUTTON_LABEL },
    aspectRatio: {
      type: String,
      required: false,
      default: DEFAULT_ASPECT_RATIO,
      validator: isAspectRatio
    },
    previewImageSize: {
      type: String,
      required: false,
      default: DEFAULT_PREVIEW_IMAGE_SIZE,
      validator: value => PREVIEW_IMAGE_SIZES.includes(value)
    },
    thumbnail: { type: Object, required: false },
    iframeAttributes: {
      type: Object,
      required: false
    },
    webp: { type: Boolean, required: false, default: true },
    autoplay: { type: Boolean, required: false, default: false },
    thumbnailListeners: {
      type: Object,
      required: false
    },
    enablejsapi: { type: Boolean, required: false, default: false },
    playerOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    injectPlayerScript: { type: Boolean, required: false, default: false },
    parameters: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ['load:iframe', 'init:player'],
  setup(__props, { expose, emit }) {
    const props = __props
    const activated = ref(props.autoplay)
    const playerInstance = ref(null)
    const warn = (message) => {
      console.warn(`[vue-lazy-youtube-video]: ${message}`)
    }
    const id = computed(() => {
      const { src } = props
      const executionResult = YOUTUBE_REGEX.exec(src)
      if (executionResult !== null) {
        return executionResult[1]
      }
      else {
        warn(`Failed to extract video id from ${src}`)
        return ''
      }
    })
    const srcAttribute = computed(() => {
      const { src } = props
      const url = new URL(src)
      const { searchParams } = url
      searchParams.set('autoplay', '1')
      if (props.enablejsapi) {
        searchParams.set('enablejsapi', '1')
      }
      for (const [key, value] of Object.entries(props.parameters)) {
        searchParams.set(key, value)
      }
      return `${url.origin}${url.pathname}?${searchParams.toString()}`
    })
    const getPaddingBottomValue = (a, b) => `${b / a * 100}%`
    const getPaddingBottom = () => {
      let { aspectRatio } = props
      const warningMessage = `Invalid value ${aspectRatio} supplied to \`aspectRatio\` property, instead fallback value ${DEFAULT_ASPECT_RATIO} is used `
      if (typeof aspectRatio !== 'string' || (typeof aspectRatio === 'string' && isAspectRatio(aspectRatio) === false)) {
        aspectRatio = DEFAULT_ASPECT_RATIO
        warn(warningMessage)
      }
      const [a, b] = aspectRatio.split(':').map(Number)
      return getPaddingBottomValue(a, b)
    }
    const styleObj = computed(() => {
      return {
        paddingBottom: getPaddingBottom()
      }
    })
    const iframe = ref(null)
    const initPlayerInstance = () => {
      if (!iframe.value) {
        throw new Error(
          '[vue-lazy-youtube-video]: YT.Player can not be instantiated without iframe element'
        )
      }
      const instance = new YT.Player(iframe.value, props.playerOptions)
      playerInstance.value = instance
      emit('init:player', { instance })
      return instance
    }
    const playerCheckInterval = ref(null)
    onUnmounted(() => {
      if (playerCheckInterval.value) {
        clearInterval(playerCheckInterval.value)
      }
    })
    const checkPlayer = () => {
      if (YT == null ? void 0 : YT.Player) {
        if (playerCheckInterval.value) {
          clearInterval(playerCheckInterval.value)
        }
        initPlayerInstance()
        return true
      }
      return false
    }
    const doInjectPlayerScript = () => {
      const script = document.createElement('script')
      script.setAttribute('src', PLAYER_SCRIPT_SRC)
      script.onload = () => {
        playerCheckInterval.value = window.setInterval(() => {
          checkPlayer()
        }, PLAYER_CHECK_MS)
      }
      document.head.appendChild(script)
    }
    const iframeAttrs = computed(() => ({
      ...DEFAULT_IFRAME_ATTRIBUTES,
      ...props.iframeAttributes
    }))
    const onIframeLoad = () => {
      emit('load:iframe', { iframe: iframe.value })
      if (props.enablejsapi) {
        try {
          window.YT.Player
          initPlayerInstance()
        }
        catch (e) {
          if (props.injectPlayerScript) {
            doInjectPlayerScript()
          }
          else {
            console.error(
              '[vue-lazy-youtube-video]: window.YT.Player is not defined. Make sure you either included the IFrame Player API or passed `injectPlayerScript` prop'
            )
            throw e
          }
        }
      }
    }
    const getPlayerInstance = () => playerInstance.value
    expose({
      getPlayerInstance
    })
    return (_ctx, _cache) => {
      let _a, _b
      return openBlock(), createElementBlock('div', {
        class: 'y-video',
        onClick: _cache[1] || (_cache[1] = () => activated.value = true)
      }, [
        createElementVNode('div', {
          class: 'y-video__inner',
          style: normalizeStyle(unref(styleObj))
        }, [
          activated.value
            ? (openBlock(), createElementBlock('iframe', mergeProps({
                key: 0,
                ref_key: 'iframe',
                ref: iframe,
                class: 'y-video__media'
              }, unref(iframeAttrs), {
                src: unref(srcAttribute),
                onLoad: _cache[0] || (_cache[0] = () => onIframeLoad())
              }), null, 16, _hoisted_1))
            : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createElementVNode('picture', null, [
                  __props.webp
                    ? (openBlock(), createElementBlock('source', {
                        key: 0,
                        srcset: ((_a = __props.thumbnail) == null ? void 0 : _a.webp) || `https://i.ytimg.com/vi_webp/${unref(id)}/${__props.previewImageSize}.webp`,
                        type: 'image/webp'
                      }, null, 8, _hoisted_2))
                    : createCommentVNode('', true),
                  createElementVNode('img', mergeProps({
                    class: 'y-video__media y-video__media--type--img',
                    src: ((_b = __props.thumbnail) == null ? void 0 : _b.jpg) || `https://i.ytimg.com/vi/${unref(id)}/${__props.previewImageSize}.jpg`,
                    alt: __props.alt
                  }, unref(toListenersWithOn)(__props.thumbnailListeners || {})), null, 16, _hoisted_3)
                ]),
                _ctx.$slots.button
                  ? renderSlot(_ctx.$slots, 'button', { key: 0 })
                  : (openBlock(), createElementBlock('button', {
                      'key': 1,
                      'class': 'y-video__button',
                      'type': 'button',
                      'aria-label': __props.buttonLabel
                    }, [
                      _ctx.$slots.icon ? renderSlot(_ctx.$slots, 'icon', { key: 0 }) : (openBlock(), createElementBlock('svg', _hoisted_5, _hoisted_8))
                    ], 8, _hoisted_4))
              ], 64))
        ], 4)
      ])
    }
  }
})
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LazyYoutubeVideo', _sfc_main)
})
