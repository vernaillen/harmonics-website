<script setup lang="ts">
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
    (path !== '/' && currentRoute.startsWith(path))
    || (currentRoute === '/thanks' && path === '/contact')
  )
    classToAdd = 'router-link-active'
  return classToAdd
}
</script>

<template>
  <header
    class="header bg-transparent absolute top-0 left-0 z-20 w-full flex items-center"
  >
    <div class="container">
      <div class="flex justify-between relative">
        <div class="px-4 mr-10 mt-3 max-w-full">
          <router-link
            to="/"
            class="text-xl leading-relaxed inline-block mr-5 whitespace-nowrap header-logo"
          >
            <img
              alt="Harmonics logo"
              src="../assets/wave_sound-02-small.jpg"
              class="inline-flex rounded-full w-20 h-10"
            >
            Harmonics
          </router-link>
        </div>
        <div class="flex px-4 justify-between items-center w-full">
          <div>
            <button
              class="right-0 top-2 absolute cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              :class="navbarTogglerClass"
              @click="toggleNavbar()"
            >
              <FontAwesomeIcon :icon="['fas', 'bars']" />
            </button>

            <nav
              id="navbarCollapse"
              class="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none"
              :class="navbarCollapseClass"
            >
              <ul class="block lg:flex">
                <li class="relative group">
                  <router-link
                    to="/"
                    class="menu-scroll text-base text-black dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/')"
                  >
                    Home
                  </router-link>
                </li>
                <li class="relative group">
                  <router-link
                    to="/blog"
                    class="menu-scroll text-base text-black dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/blog')"
                  >
                    Blog
                  </router-link>
                </li>
                <li class="relative group">
                  <router-link
                    to="/about"
                    class="menu-scroll text-base text-black dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
                    :class="linkClass('/about')"
                  >
                    About
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
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
  nav ul li a.router-link-active {
    border-top: 3px solid #bfac22;
  }
}
@media (max-width: 959px) {
  nav ul li a.router-link-active {
    border-left: 3px solid #bfac22;
  }
}
</style>
