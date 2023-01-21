<script setup lang="ts">
const { t } = useI18n()

const localePath = useLocalePath()
const { data: posts } = await useLazyAsyncData('posts', () => queryContent(localePath('/news')).sort({ _file: -1 }).limit(1).find())

definePageMeta({
  middleware: ['i18n'],
})
</script>

<template>
  <div :class="isHydrated ? '' : 'opacity-60'" class="flex-col">
    <section id="title" class="lg:container mx-auto px-6">
      <div class="flex flex-wrap lg:h-screen items-center">
        <div class="w-full sm:w-10/12 lg:w-6/12 ml-auto mr-auto mt-[150px] lg:mr-0 lg:px-8 lg:mt-0">
          <NuxtImg alt="Gongs" format="webp" class="max-w-full rounded-lg shadow-lg shadow-gray-400" src="/images/gongs.jpg" sizes="sm:500px lg:800px" />
        </div>
        <div class="w-full sm:w-10/12 lg:w-6/12 ml-auto mr-auto mt-[50px] lg:ml-0 lg:px-8 lg:mt-0">
          <div class="flex flex-wrap">
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-medium text-primary py-4 animate__animated animate__pulse">
              {{ t('home.title') }}
            </h1>
            <h2 class="text-2xl leading-relaxed text-gray-500 my-5">
              {{ t('home.tagline') }}
            </h2>
            <p class="pt-5 text-lg text-gray-400">
              {{ t('home.services') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="blogposts" class="lg:container mx-auto pt-[20px] pb-[100px] px-4">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6 prose">
        <template v-for="post, index in posts" :key="index">
          <NewsItem :post="post" :big="true" class="w-full lg:w-1/2 m-auto p-4 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8" />
        </template>
      </div>
    </section>
  </div>
</template>
