<template>
  <div class="relative lg:pt-32 pb-32 h-screen">
    <section class="relative">
      <div class="lg:container mx-auto px-4 mt-10 mb-20 xl:mt-18 3xl:mt-32">
        <div class="flex flex-wrap">
          <div class="w-10/12 lg:w-4/12 ml-auto mr-auto lg:mr-0 px-4 mt-10">
            <div class="md:pr-12">
              <h1 class="text-4xl md:text-5xl xl:text-6xl font-semibold py-4">
                Harmonics
              </h1>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">Immersive soundbaths</p>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">Sound healing</p>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">Music production</p>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">Websites for energy healers</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-10/12 lg:w-4/12 ml-auto mr-auto lg:ml-0 px-4 mt-10">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-2xl mt-5"
              src="../assets/gongs.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="relative pb-32 mb-20 mt-20">
    <section class="relative">
      <div class="lg:container text-center mx-auto px-4 mt-20 mb-20">
        <h4 class="text-4xl leading-relaxed text-gray-500 pb-32 mb-20">
          Healing power of Sound & Music
        </h4>
      </div>
    </section>
  </div>

  <ClientOnly>
    <Plum />
  </ClientOnly>
</template>

<script setup lang="ts">
import Plum from "@/components/Plum.vue";
</script>
