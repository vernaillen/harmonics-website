<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'

const localePath = useLocalePath()
const date: number = new Date().getFullYear()

const { t } = useI18n()

function scrollToTop() {
  scrollToElement('__nuxt')
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
  <footer class="relative pt-4 pb-4">
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
    <div class="container mx-auto px-4 mt-5">
      <div class="flex flex-wrap ">
        <div class="w-full lg:w-6/12 px-4 text-center lg:text-left mb-10">
          <div class="inline-block px-4 py-1 max-w-full">
            <LanguageSwitcher />
          </div>
          <div class="inline-block px-4 py-1 mr-5 max-w-full">
            <social-icons />
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 mb-0 lg:mb-10">
          <div class="w-full flex-row items-top mb-6 text-center lg:text-right">
            <div class="px-4 py-1 ml-auto">
              <NuxtLink
                v-for="item, index in useMenu()" :key="index" :aria-label="t(item.titleKey)" :to="localePath(item.path)"
                class=" text-black hover:opacity-50 inline-block pb-6 pr-6 text-sm"
              >
                {{ t(item.titleKey) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full px-4 mx-auto text-center">
          <div class="flex flex-wrap text-xs text-gray-400 py-1 justify-center">
            <span class="w-full sm:w-auto">
              <span class="hidden">{{ t('footer.fetchingBuildinfo') }}</span>
              <NuxtLink href="https://github.com/vernaillen/harmonics-website/" target="_blank" class="hover:text-primary">
                <Icon name="mdi:github" size="20" class="pb-1" />
              </NuxtLink>
            </span>
            <span class="w-full sm:w-auto">
              {{ t('footer.developed_with') }}
              <NuxtLink href="https://nuxt.com/" target="_blank">
                <SvgIcon file="nuxt-icon-green.svg" width="16" height="16" />
              </NuxtLink>
              {{ t('news.by') }} <NuxtLink href="https://vernaillen.dev" class="hover:text-primary" target="_blank">Wouter Vernaillen</NuxtLink>
            </span>
          </div>
          <div class="text-sm text-gray-400 py-1">
            <span class="w-full md:w-auto">
              {{ t('footer.copyright') }} {{ date }} Harmonics BV / Vernaillen Consulting BVBA - BE0503971022
            </span>
            <span class="hidden md:inline-block mr-1"> / </span>
            <span class="w-full md:w-auto">
              <NuxtLink :to="localePath('/privacybeleid')" class="hover:text-primary inline-block ">
                {{ t('footer.privacypolicy') }}
              </NuxtLink>
              -
              <NuxtLink :to="localePath('/cookiebeleid')" class="hover:text-primary inline-block">
                {{ t('footer.cookiepolicy') }}
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <button
    class="back-to-top hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-6 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 shadow-md animate__animated animate__slideInUp"
    @click="scrollToTop()"
  >
    <span class="w-3 h-3 border-t border-l border-white transform rotate-45 mt-[6px]" />
  </button>
</template>
