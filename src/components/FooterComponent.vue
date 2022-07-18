<template>
  <footer class="relative pt-8 pb-6 mt-20">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560,0 2560,2 0,99 0,100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4 mt-10">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 mb-10">
          <h4 class="text-3xl text-gray-600 font-semibold">
            Let's keep in touch!
          </h4>
          <h5 class="text-lg text-gray-500 mt-5 mb-2 text-gray-700">
            Find us on any of these platforms.
          </h5>
          <div class="mt-6">
            <a
              href="https://www.facebook.com/harmonics.be/"
              target="_blank"
              rel="”noopener”"
            >
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon
                  :icon="['fab', 'facebook']"
                  class="hover:text-gray-800 text-gray-500 text-lg"
                />
              </button>
            </a>
            <a
              href="https://www.instagram.com/harmonics.be/"
              target="_blank"
              rel="”noopener”"
            >
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FontAwesomeIcon
                  :icon="['fab', 'instagram']"
                  class="hover:text-gray-800 text-gray-500 text-lg"
                />
              </button>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span class="block text-gray-400 text-sm font-semibold my-5"
                >Menu</span
              >
              <ul class="list-unstyled">
                <li>
                  <router-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/about"
                    >About</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/blog"
                    >Blog</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-400 font-semibold py-1">
            Copyright © {{ date }} Vernaillen Consulting / Harmonics BV
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const date: number = new Date().getFullYear();
</script>
