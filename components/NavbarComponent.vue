<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

const navbar = reactive({
  show: false,
})
function toggleNavbar() {
  navbar.show = !navbar.show
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return navbar.show ? '' : 'hidden'
})

const linkClass = (path: string) => {
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
    <div class="container">
      <div class="flex justify-between relative  text-center sm:text-left">
        <div class="px-2 md:px-4 mr-0 sm:mr-10 mt-2 w-[400px]">
          <NuxtLink
            aria-label="Harmonics home"
            :to="localePath('/')"
            class="text-3xl text-primary font-medium leading-relaxed inline-block whitespace-nowrap header-logo"
          >
            <img src="/images/wavesound.jpg" class="rounded-full w-20 h-10 inline-flex" alt="Harmonics wavesound logo">
            <span class="hidden sm:inline-flex">Harmonics</span>
          </NuxtLink>
        </div>
        <div class="flex px-0 log:px-4 justify-between items-center w-full">
          <div>
            <button
              id="navbarToggler"
              class="block absolute right-0 top-8 cursor-pointer translate-y-[-50%] xl:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              :class="navbarTogglerClass" aria-label="Mobile Menu"
              @click="toggleNavbar"
            >
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            </button>

            <nav
              id="navbarCollapse" ref="navbarCollapse"
              class="absolute py-5 xl:py-0 xl:px-4 xl2:px-6 bg-white dark:bg-dark xl:dark:bg-transparent xl:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full xl:max-w-full xl:w-full right-4 top-full xl:block xl:static xl:shadow-none transition"
              :class="navbarCollapseClass"
            >
              <ul class="block xl:flex">
                <li v-for="item, index in useMenu()" :key="index" class="relative group">
                  <NuxtLink
                    :aria-label="t(item.titleKey)"
                    :to="localePath(item.path)"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 active:text-primary py-2 xl:pt-4 xl:pb-6 xl:inline-flex px-7 xl:px-1 flex mr-7"
                    :class="linkClass(item.path)" @click="navbar.show = false"
                  >
                    {{ t(item.titleKey) }}
                  </NuxtLink>
                </li>
                <!--
                <li class="relative group">
                  <IkBenAanwezigKiosk class="py-2 xl:pt-4 xl:pb-6 xl:inline-flex px-7 xl:px-1 flex mr-7" />
                </li> -->
              </ul>
            </nav>
          </div>
        </div>
        <div class="px-4 py-2 mt-2 max-w-full hidden sm:block">
          <social-icons />
        </div>
        <div class="justify-end px-0 sm:px-3 py-2 mt-3 mr-14 sm:mr-10 xl:mr-0 max-w-full block">
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
  }
}
</style>
