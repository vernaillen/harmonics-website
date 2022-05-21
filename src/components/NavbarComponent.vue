<template>
  <nav
    class="top-0 absolute sticky z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div class="w-full relative flex lg:w-auto lg:static lg:block">
        <img
          alt="Harmonics logo"
          src="../assets/wave_sound-02-small.jpg"
          class="inline-flex rounded-full w-20 h-10"
        />
        <a
          class="text-lg font-bold leading-relaxed inline-block mr-4 px-3 py-2 whitespace-nowrap"
          href="/"
        >
          Harmonics</a
        >
        <button
          class="right-0 top-2 absolute cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          <FontAwesomeIcon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        :class="{ hidden: !navbar.show, block: navbar.show }"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/harmonics.be/"
              target="_blank"
              rel="”noopener”"
            >
              <FontAwesomeIcon
                :icon="['fab', 'facebook']"
                class="hover:text-gray-800 text-gray-500 text-lg"
              />
              <span class="lg:hidden inline-block ml-2">Facebook</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.instagram.com/harmonics.be/"
              target="_blank"
              rel="”noopener”"
            >
              <FontAwesomeIcon
                :icon="['fab', 'instagram']"
                class="hover:text-gray-800 text-gray-500 text-lg"
              />
              <span class="lg:hidden inline-block ml-2">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const navbar = reactive({
  show: false,
});
function toggleNavbar() {
  navbar.show = !navbar.show;
}
</script>
