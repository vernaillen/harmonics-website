<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="relative pt-14 lg:pt-20 pb-20">
    <section class="relative">
      <div class="lg:container mx-auto px-4 mt-10 mb-20 xl:mt-24 3xl:mt-40">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 ml-auto mr-auto lg:mr-0 px-4 mt-10">
            <div class="md:pr-12">
              <h1 class="text-4xl md:text-5xl xl:text-6xl font-semibold py-4 animated pulse">
                Harmonics
              </h1>
              <ul class="list-none mt-6">
                <li class="py-2 animated fadeIn animate-delay-100">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="prose">
                        <router-link to="/blog/watisecstaticdance">
                          {{ t('home.ecstaticdance') }}
                        </router-link>
                      </p>
                    </div>
                  </div>
                </li>
                <li class="py-2 animated fadeIn animate-delay-200">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">
                        {{ t('home.immersivesoundbaths') }}
                      </p>
                    </div>
                  </div>
                </li>
                <li class="py-2 animated fadeIn animate-delay-300">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-s font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 ml-2 mr-3"
                      >
                        <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
                      </span>
                    </div>
                    <div>
                      <p class="text-gray-600">
                        {{ t('home.musicproduction') }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full sm:w-10/12 md:w-8/12 lg:w-5/12 ml-auto mr-auto lg:ml-0 px-4 mt-10">
            <img alt="..." class="max-w-full rounded-lg shadow-2xl mt-5" src="../../assets/gongs.jpg">
          </div>
        </div>
      </div>
      <div class="lg:container mx-auto px-4 mt-30 mb-20 xl:mt-40 3xl:mt-50">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-10/12 lg:w-6/12 mx-auto px-4 mt-10">
            <latest-blog-post />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="relative pb-32 mb-20 mt-30">
    <section class="relative">
      <div class="lg:container text-center mx-auto px-4 mt-20 mb-20">
        <h4 class="text-4xl leading-relaxed text-gray-500 pb-32 mb-20">
          {{ t('home.tagline') }}
        </h4>
      </div>
    </section>
  </div>
  <footer-component />
</template>
