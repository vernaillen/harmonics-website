<script setup lang="ts">
const { isMobileNavOpen, isMobileNavClosing } = useMobileNav()
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const { t } = useI18n()

const navbarTogglerClass = computed(() => {
  return isMobileNavOpen.value ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  if (isMobileNavOpen.value && isMobileNavClosing.value) {
    return 'opacity-10 blur-lg'
  }
  else if (isMobileNavOpen.value) {
    return ''
  }
  else {
    return 'hidden'
  }
})
const { data: pages, refresh } = await useAsyncData('navigation-' + locale.value, () =>
  queryCollection('pages')
    .where('navigation', '=', true)
    .order('id', 'ASC')
    .all()
)
watch(() => locale.value, () => {
  refresh()
})

function checkCurrentRoute(clickedPath: string | undefined) {
  if (clickedPath === route.path) {
    isMobileNavOpen.value = false
  }
  // else do nothing (mobileNav will be automatically hidden on page:finish)
}
onMounted(() => {
  window.addEventListener('resize', () => isMobileNavOpen.value = false)
})
</script>

<template>
  <header
    :class="useCategoryBGColor('')"
    class="header fixed h-[68px] sm:h-[72px] bg-opacity-0 w-full flex z-40 transition-colors duration-300"
  >
    <div class="w-full container mx-auto">
      <div class="grid grid-cols-3">
        <div class="text-left py-4 px-0">
          <button
            id="navbarToggler"
            :class="navbarTogglerClass"
            class="p-1 block cursor-pointer z-50"
            aria-label="Mobile Menu"
            @click="isMobileNavOpen = !isMobileNavOpen"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
            <span class="relative :w-[30px] h-[2px] my-[6px] block bg-trance dark:bg-primary-200 transition" />
          </button>
        </div>
        <div class="col-span-2 text-right py-5 mx-0 px-0 align-top relative">
          <LanguageSwitcher small />
          <ColorModeSwitcher class="-mr-2 md:mr-0" />
          <WhatsAppCommunity
            class="shadow-md fixed rotate-90 top-48 -right-11 rounded-t-none
          md:static md:rotate-0 md:rounded-xl"
          />
        </div>
      </div>
    </div>
  </header>
  <nav
    id="navbar"
    class="bg-white dark:bg-dark fixed top-0 left-0 right-0 bottom-0 h-full z-30 transition-all transform duration-300"
    :class="navbarCollapseClass"
  >
    <div class="w-full h-full justify-center flex pt-20 sm:pt-20 mb-12 overflow-scroll">
      <div class="px-8 text-center">
        <div class="prose text-4xl sm:text-5xl font-mic32">
          <NuxtLink
            :to="localePath('/')"
            aria-label="Harmonics logo, click to go back to home"
            class="text-trance-500 dark:text-trance-200 border-transparent"
            @click="checkCurrentRoute(localePath('/'))"
          >
            {{ t('website.title') }}
          </NuxtLink>
        </div>
        <ul>
          <template
            v-for="link of pages"
            :key="link.path"
          >
            <li
              v-if="link.nav"
              class="font-mic32 prose text-center p-0 my-3 sm:my-6 lg:my-8"
            >
              <div :class="link.meta.category ? 'category-' + link.meta.category : ''">
                <NuxtLink
                  :to="link.path"
                  :class="getNavItemColors(link.category)"
                  class="text-2xl sm:text-3xl text-center border-transparent"
                  :aria-label="t('nav.gotopage') + link.title"
                  @click="checkCurrentRoute(link.path)"
                >
                  <UIcon v-if="link.navIcon" :name="link.navIcon" class="p-0" />
                  <span v-else>{{ link.title }}</span>
                </NuxtLink>
              </div>
            </li>
          </template>
        </ul>
        <LanguageSwitcher class="mt-2" />
      </div>
    </div>
  </nav>
</template>

<style>
.navbarTogglerActive > span:nth-child(1) {
  @apply transform rotate-45 top-[7px];
}
.navbarTogglerActive > span:nth-child(2) {
  @apply opacity-0;
}
.navbarTogglerActive > span:nth-child(3) {
  @apply top-[-8px] transform rotate-[135deg];
}
</style>
