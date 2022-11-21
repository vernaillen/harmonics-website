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
    class="header bg-white bg-opacity-95 absolute top-0 left-0 z-20 w-full h-[68px] flex animated slideInDown animate-delay-2000"
  >
    <div class="container">
      <div class="flex justify-between relative">
        <div class="px-2 md:px-4 mr-5 mt-2 max-w-full">
          <NuxtLink
            :to="localePath('/')"
            class="text-3xl text-primary font-medium leading-relaxed inline-block mr-5 whitespace-nowrap header-logo"
          >
            <img
              v-if="false"
              alt="Harmonics logo" src="../assets/wave_sound-02-small.jpg"
              class="inline-flex rounded-full w-12 h-6 md:w-20 md:h-10"
            >
            Harmonics
          </NuxtLink>
        </div>
        <div class="flex px-0 md:px-4 justify-between items-center w-full">
          <div>
            <button
              id="navbarToggler"
              class="block absolute right-0 top-8 cursor-pointer translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              :class="navbarTogglerClass" @click="toggleNavbar"
            >
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            </button>

            <nav
              id="navbarCollapse" ref="navbarCollapse"
              class="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none transition"
              :class="navbarCollapseClass"
            >
              <ul class="block lg:flex">
                <li class="relative group">
                  <NuxtLink
                    :to="localePath('/')"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 active:text-primary py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/')" @click="navbar.show = false"
                  >
                    {{ t('menu.home') }}
                  </NuxtLink>
                </li>
                <li class="relative group">
                  <NuxtLink
                    :to="localePath('/blog')"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/blog')" @click="navbar.show = false"
                  >
                    {{ t('menu.blog') }}
                  </NuxtLink>
                </li>
                <li class="relative group">
                  <NuxtLink
                    :to="localePath('/about')"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/about')" @click="navbar.show = false"
                  >
                    {{ t('menu.about') }}
                  </NuxtLink>
                </li>
                <li class="relative group">
                  <NuxtLink
                    :to="localePath('/contact')"
                    class="menu-scroll text-base text-gray-600 dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/contact')" @click="navbar.show = false"
                  >
                    {{ t('menu.contact') }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="px-3 py-2 mt-3 max-w-full hidden sm:block">
          <LanguageSwitcher />
        </div>
        <div class="justify-end px-4 py-2 mr-5 mt-2 max-w-full hidden sm:block">
          <social-icons />
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
@media (min-width: 960px) {
  nav ul li a.link-active {
    border-top: 3px solid #bfac22;
  }
}
@media (max-width: 959px) {
  nav ul li a.link-active {
    border-left: 3px solid #bfac22;
  }
}
</style>
