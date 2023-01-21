<script setup lang="ts">
const { t } = useI18n()
const title = `${t('news.title')} | ${t('website.title')}`
useHead({
  title,
  meta: [
    {
      property: 'og:title',
      content: title,
    },
  ],
})
const localePath = useLocalePath()
const { data: posts } = await useLazyAsyncData('posts', () => queryContent(localePath('/news')).sort({ _file: -1 }).find())

const animateDurationClass = (index: number) => {
  return `animate-duration-${index * 1000}, animate-delay-${index * 100}`
}
</script>

<template>
  <div :class="isHydrated ? '' : 'opacity-60'" class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 mb-5 md:px-4 prose">
        <div
          v-for="post, index in posts" :key="index"
        >
          <NewsItem v-if="index === 0" :post="post" :big="true" class="px-4" />
        </div>
      </div>
      <div class="w-full md:w-1/2 px-4 sm:px-6 lg:px-8 mb-5 prose">
        <MailchimpComponent />
      </div>
    </div>
  </div>
  <div :class="isHydrated ? '' : 'opacity-60'" class="container mx-auto px-4">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 prose">
      <template v-for="post, index in posts" :key="index">
        <div v-if="index !== 0" class="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4" :class="animateDurationClass(index)">
          <NewsItem :post="post" :big="false" class="p-4 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8" />
        </div>
      </template>
    </div>
  </div>
</template>
