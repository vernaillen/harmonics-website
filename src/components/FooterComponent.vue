<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLocale } from '@/stores/lang'
const date: number = new Date().getFullYear()

const { t } = useI18n()

function easeInOutQuad(
  currentTime: number,
  start: number,
  change: number,
  duration: number,
) {
  currentTime /= duration / 2
  if (currentTime < 1)
    return (change / 2) * currentTime * currentTime + start
  currentTime--
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
}

function scrollToTop() {
  const to = 0
  const duration = 500
  const element = document.documentElement
  const start = element.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0

  const animateScroll = () => {
    currentTime += increment

    const val = easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration)
      setTimeout(animateScroll, increment)
  }
  animateScroll()
}

onMounted(() => {
  window.onscroll = function () {
    const ud_header = document.querySelector('.header') as HTMLElement
    if (ud_header) {
      if (window.scrollY > 0) {
        ud_header.classList.add('sticky')
        ud_header.classList.add('shadow')
      }
      else {
        ud_header.classList.remove('sticky')
        ud_header.classList.remove('shadow')
      }

      const backToTop = document.querySelector('.back-to-top') as HTMLElement
      if (
        document.body.scrollTop > 50
        || document.documentElement.scrollTop > 50
      )
        backToTop.style.display = 'flex'
      else
        backToTop.style.display = 'none'
    }
  }
})
</script>

<template>
  <footer class="relative pt-8 pb-6 animated fadeIn animate-delay-1000">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        version="1.1" viewBox="0 0 2560 100" x="0" y="0"
      >
        <polygon class="text-gray-300 fill-current" points="2560,0 2560,2 0,99 0,100" />
      </svg>
    </div>
    <div class="container mx-auto px-4 mt-10">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 mb-10">
          <div class="inline-block px-4 py-1 mt-3 max-w-full">
            <LanguageSwitcher />
          </div>
          <div class="inline-block px-4 py-1 mr-5 mt-3 max-w-full">
            <social-icons />
          </div>

          <div class="w-full flex-row items-top mb-6 mt-20">
            <div class="w-full px-4 ml-auto">
              <span class="block text-primary text-md font-semibold my-5">Menu</span>
              <router-link
                :to="`/${useLocale().lang}`"
                class=" text-black hover:opacity-50 font-semibold inline-block pb-10 pr-6 text-sm"
              >
                {{ t('menu.home') }}
              </router-link>
              <router-link
                :to="`/${useLocale().lang}/blog`"
                class="text-black hover:opacity-50 font-semibold inline-block pb-10 pr-6 text-sm"
              >
                {{ t('menu.blog') }}
              </router-link>
              <router-link
                :to="`/${useLocale().lang}/about`"
                class="text-black hover:opacity-50 font-semibold inline-block pb-10 pr-6 text-sm"
              >
                {{ t('menu.about') }}
              </router-link>
              <router-link
                :to="`/${useLocale().lang}/contact`"
                class="text-black hover:opacity-50 font-semibold inline-block pb-10 pr-6 text-sm"
              >
                {{ t('menu.contact') }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <mailchimp-component />
        </div>
      </div>
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-400 font-semibold py-1">
            {{ t('footer.copyright') }} {{ date }} Vernaillen Consulting / Harmonics BV
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a
    href="javascript:void(0)"
    class="hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out back-to-top shadow-md"
    @click="scrollToTop()"
  >
    <span class="w-3 h-3 border-t border-l border-white transform rotate-45 mt-[6px]" />
  </a>
</template>
