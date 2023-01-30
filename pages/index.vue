<script setup lang="ts">
const { t } = useI18n()

const localePath = useLocalePath()
const { data: posts } = await useLazyAsyncData('posts', () => queryContent(localePath('/news')).sort({ _file: -1 }).limit(1).find())

definePageMeta({
  middleware: ['i18n'],
})
</script>

<template>
  <div class="flex-col">
    <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5 md:px-4">
          <NuxtImg
            alt="Gongs" format="webp" class="max-w-full rounded-lg shadow-lg shadow-gray-400" src="/images/gongs.jpg"
            sizes="sm:500px lg:800px"
          />
        </div>
        <div class="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 mb-5">
          <div class="flex flex-wrap justify-center text-center lg:justify-start lg:text-left">
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-medium text-primary mb-5 mt-7 lg:mt-0">
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
    </div>
    <section id="blogposts" class="container mx-auto pt-20 pb-[100px] px-4">
      <div class="flex flex-wrap prose">
        <template v-for="post, index in posts" :key="index">
          <NewsItem :post="post" :big="true" class="w-full lg:w-1/2 m-auto p-4" />
        </template>
      </div>
    </section>
  </div>
</template>
