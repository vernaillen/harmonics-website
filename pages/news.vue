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

definePageMeta({
  middleware: ['i18n'],
})
</script>

<template>
  <div class="flex-col">
    <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5 md:px-4 prose">
          <div
            v-for="post, index in posts" :key="index"
          >
            <NewsItem v-if="index === 0" :post="post" :big="true" />
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4 lg:px-8 mb-5 prose">
          <MailchimpComponent />
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 prose">
        <template v-for="post, index in posts" :key="index">
          <div v-if="index !== 0" class="w-full lg:w-1/2 2xl:w-1/3 px-2 md:px-4">
            <NewsItem :post="post" :big="false" class="p-4" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
