<script setup lang="ts">
const { isMobileNavOpen } = useMobileNav()
const route = useRoute()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale
  },
  meta: [
    {
      name: 'description',
      content: 'Healing power of Sound, Music & Dance'
    }
  ],
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/58405e358c3b387807fb206f187b0aa4-webfont.woff2'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/montserrat-light-webfont.woff2'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/montserrat-regular-webfont.woff2'
    }
  ]
})

const routePath = ref('')
onMounted(() => {
  routePath.value = route.path
  window.addEventListener('resize', () => { isMobileNavOpen.value = false })
})
function scrollToTop () {
  scrollToElement('pageTop')
}
</script>

<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div class="bg-white dark:bg-dark transition-colors duration-[1.5s] ease-in-out">
    <HeaderComponent />
    <div class="pt-[76px] min-h-screen">
      <NuxtPage />
    </div>
    <FooterComponent v-show="!isMobileNavOpen && usePageHooks().isPageLoading" />
    <button
      class="back-to-top hidden items-center justify-center bg-primary-500 text-white w-8 h-8
        rounded-xl hover:rounded-2xl transform transition-all duration-300
        fixed bottom-8 right-6 left-auto z-[9999]
        hover:shadow-signUp hover:bg-opacity-80 shadow-md "
      @click="scrollToTop()"
    >
      <span class="w-3 h-3 border-t border-l border-white transform rotate-45 mt-[6px]" />
    </button>
  </div>
  <EasyLightbox />
  <PolitePopup />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}

.imgHoverEffect {
  position: relative;
  overflow: hidden;
}
.imgHoverEffect img {
  margin: 0;
  max-width: 100%;
  height: auto;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.imgHoverEffect:hover img {
  -moz-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

@keyframes slide-enter {
  0% {
    opacity: 0;
    filter: blur(0.2rem);
  }
  to {
    opacity: 100;
  }
}

@media (prefers-reduced-motion:no-preference) {
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) [slide-enter],
  :not(.no-sliding) .slide-enter-content :not(.no-sliding) .slide-enter {
    --enter-stage: 0;
    --enter-step: 60ms;
    --enter-initial: 0ms;
    animation: slide-enter 0.2s both 0.2s;
    animation-delay: calc(var(--enter-initial) + var(--enter-stage) * var(--enter-step));
    animation-delay: 60ms;
  }
}

a .iconHoverEffect {
    position: relative;
    display: flex;
    width: 14px;
    height: 8px;
    align-items: center;
    justify-content: flex-start;
}
a .iconHoverEffect .icon {
    position: absolute;
    transform: translateX(0);
    transition: 'color 1s cubic-bezier(.65, 0, .28, 1), transform 1s cubic-bezier(.65, 0, .28, 1)'
}
a:hover .iconHoverEffect .icon {
    color: transparent;
    transform: translate(7px);
    transition: 'color 1s cubic-bezier(.65, 0, .28, 1), transform 1s cubic-bezier(.65, 0, .28, 1)'
}
a .iconHoverEffect .icon--hover {
    position: absolute;
    transform: scaleX(0);
    transform-origin: center center;
    transition: 'color 1s cubic-bezier(.65, 0, .28, 1), transform 1s cubic-bezier(.65, 0, .28, 1)'
}
a:hover .iconHoverEffect .icon--hover {
    transform: scaleX(1);
    transition: 'color 1s cubic-bezier(.65, 0, .28, 1), transform 1s cubic-bezier(.65, 0, .28, 1)'
}
</style>
