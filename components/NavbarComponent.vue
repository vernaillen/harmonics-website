<script setup lang="ts">
import { useMobileNav } from '@/stores/mobileNav'

const localePath = useLocalePath()
const { t } = useI18n()
const mobileNav = useMobileNav()

const navbarTogglerClass = computed(() => {
  return mobileNav.visible ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return mobileNav.visible ? '' : 'hidden'
})

function linkClass(path: string) {
  const currentRoute = useRoute().path
  let classToAdd = ''
  if (
    (path === '/' && currentRoute === localePath('/'))
      || (path !== '/' && currentRoute.startsWith(localePath(path)))
      || (currentRoute === localePath('/thanks') && path === '/contact')
  )
    classToAdd = 'link-active'
  return classToAdd
}
</script>

<template>
  <header
    class="header bg-white bg-opacity-95 absolute top-0 left-0 z-20 w-full h-[68px] flex"
  >
    <div class="container relative">
      <div class="xl:flex relative text-left">
        <div class="px-2 md:px-4 ml-0 mt-2 max-w-full z-30">
          <div class="w-full flex justify-center z-30">
            <NuxtLink
              aria-label="harmonics home"
              :to="localePath('/')"
              class="text-3xl text-primary font-semibold leading-relaxed inline-block whitespace-nowrap header-logo z-30"
            >
              <img src="/images/wavesound.jpg" width="80" height="40" class="rounded-full min-w-[80px] w-[80px] h-[40px] inline-flex" alt="Harmonics wavesound logo">
              <span class="hidden xl:inline-flex">harmonics</span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex px-0 lg:px-4">
          <div>
            <button
              id="navbarToggler"
              class="block absolute left-2 top-7 cursor-pointer translate-y-[-50%] xl:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg z-30"
              :class="navbarTogglerClass" aria-label="Mobile Menu"
              @click="mobileNav.toggle()"
            >
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            </button>

            <nav
              id="navbarMobile"
              class="fixed w-screen h-screen left-0 right-0 top-0 bottom-0 justify-start
                bg-white dark:bg-black z-20
                xl:hidden transition-all"
              :class="navbarCollapseClass"
              aria-label="mobile-nav"
            >
              <div class="fixed w-screen h-screen flex justify-center pt-28 pb-5 sm:pt-36">
                <div class="px-0 w-full sm:w-1/2 md:w-1/3 mx-8">
                  <ul class="block xl:flex">
                    <li v-for="item, index in useMenu()" :key="index" class="relative group my-0">
                      <NuxtLink
                        :aria-label="t(item.titleKey)"
                        :to="localePath(item.path)"
                        class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 active:text-primary
                        py-2 px-7 flex text-center items-center justify-center"
                        :class="linkClass(item.path)"
                      >
                        <Icon v-if="index === 0" name="mdi:home" size="22" color="gray" class="mr-2" />
                        <span v-else>{{ t(item.titleKey) }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                  <SocialIcons id="socialsOnMobile" class="!mr-2 mt-10 text-center xl:hidden" />
                </div>
              </div>
            </nav>

            <nav
              id="navbarDesktop"
              class="hidden xl:block static py-0 px-4 xl2:px-6 dark:bg-transparent bg-transparent rounded-lg w-full max-w-full right-4 top-full shadow-none transition"
              :class="navbarCollapseClass"
              aria-label="desktop-nav"
            >
              <ul class="block xl:flex">
                <li v-for="item, index in useMenu()" :key="index" class="relative group">
                  <NuxtLink
                    :aria-label="t(item.titleKey)"
                    :to="localePath(item.path)"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 active:text-primary pt-4 pb-6 px-3 mx-1 inline-flex"
                    :class="linkClass(item.path)"
                  >
                    <Icon v-if="index === 0" name="mdi:home" size="22" color="gray" />
                    <span v-else>{{ t(item.titleKey) }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="absolute top-0 right-20 px-4 py-2 mt-2 max-w-full hidden xl:block z-30">
          <SocialIcons />
        </div>
        <div class="absolute top-0 right-0 px-0 sm:px-3 py-2 mt-2 xl:mt-3 mr-0 max-w-full z-30">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-logo,
.sticky .header-logo {
  padding-top: 0;
  padding-bottom: 0;
}

@media (min-width: 960px) {
  .header-logo svg {
    width: 130px;
  }
}

button#navbarToggler:hover,
button#navbarToggler:active,
button#navbarToggler:focus {
  background: inherit;
  background-color: inherit !important;
  box-shadow: inherit !important;
}

nav ul li a {
  border-top: 3px solid transparent;
}
@media (min-width: 1140px) {
  nav ul li a.link-active {
    border-top: 3px solid #bfac22;
  }
}
@media (max-width: 1139px) {
  nav ul li a.link-active {
    border-left: 3px solid #bfac22;
    border-right: 3px solid #bfac22;
    --tw-text-opacity: 0.6;
  }
}

@media screen and (max-height: 450px) {
  #navbarMobile>div {
    padding-top: 65px;
  }
  #navbarMobile>div>div {
    width: 220px;
  }
  #navbarMobile ul li,
  #navbarMobile ul li a {
    line-height: 16px;
  }
  #navbarMobile a {
    font-size: 15px;
  }
}
</style>
