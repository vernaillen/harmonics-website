<script setup lang="ts">
const { t } = useI18n()

const localePath = useLocalePath()
const { data: posts } = await useLazyAsyncData('posts', () =>
  queryContent(localePath('/news'))
    .where({ news: true })
    .sort({ _file: -1 })
    .limit(1)
    .find())

definePageMeta({
  documentDriven: false,
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex-col">
        <section id="title" class="container mx-auto px-4 pt-[40px] mt-[30px]">
          <div class="flex flex-wrap">
            <div class="w-full px-4 sm:px-6 lg:px-8 mb-5">
              <div class="justify-center text-center">
                <h1 class="text-5xl xl:text-6xl font-medium text-primary mb-5 mt-7">
                  {{ t('home.title') }}
                </h1>
                <h2 class="text-xl sm:text-2xl leading-relaxed text-gray-500 my-5">
                  {{ t('home.tagline') }}
                </h2>
                <p class="pt-3 md:pt-5 text-gray-400">
                  {{ t('home.services') }}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="blogposts" class="container mx-auto pt-0 md:pt-12 pb-[100px] px-4">
          <div class="flex flex-wrap prose">
            <template v-for="post, index in posts" :key="index">
              <NewsItem :post="post" :big="true" class="w-full lg:w-2/3 xl:1/2 m-auto p-4" />
            </template>
          </div>
        </section>
      </div>
    </NuxtLayout>
  </div>
</template>
