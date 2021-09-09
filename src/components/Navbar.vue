<template>
  <nav
    class="top-0 absolute sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <img src="../assets/logo.png" class="inline-flex rounded-full w-10 h-10 "/>
        <a
          class=" font-bold leading-relaxed inline-block mr-4 px-3 py-2 whitespace-nowrap"
          href="/"
          >Harmonics</a
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <a href="/about" class="lg:hover:text-gray-900 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm font-bold">
                About
            </a>
          </li>
          <li class="flex items-center">
            <a href="/landing" class="lg:hover:text-gray-900 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-sm font-bold">
                Landing
            </a>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/harmonics.be/" target="_blank"
              ><i
                class="lg:text-gray-900 text-gray-500 fab fa-facebook text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Facebook</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.instagram.com/harmonics.be/" target="_blank"
              ><i
                class="lg:text-gray-900 text-gray-500 fab fa-instagram text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Instagram</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>