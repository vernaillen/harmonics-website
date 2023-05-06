<script setup lang="ts">
const { t } = useI18n()
const title = `${t('news.title')} | ${t('website.title')}`
useHead({
  title,
  meta: [
    {
      property: 'og:title',
      content: title
    }
  ]
})
const localePath = useLocalePath()
const { data: posts } = await useLazyAsyncData('posts', () =>
  queryContent(localePath('/news'))
    .where({ news: true })
    .sort({ _file: -1 })
    .find())

definePageMeta({
  documentDriven: false
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="flex-col">
        <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
          <div class="grid grid-cols-4">
            <div class="col-span-4 md:col-span-3 mb-5 px-4 sm:px-6 lg:px-8 prose">
              <div
                v-for="post, index in posts"
                :key="index"
              >
                <NewsItem v-if="index === 0" :post="post" :big="true" />
              </div>
            </div>
            <aside class="hidden md:col-span-1 md:flex md:flex-col">
              <div id="newsletter" class="sticky top-36 right-10 block md:w-1/4 px-4 sm:px-6 lg:px-8 mb-5 prose">
                <MailchimpComponent />
              </div>
            </aside>
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap md:w-3/4 justify-start py-4 prose">
            <template v-for="post, index in posts" :key="index">
              <div v-if="index !== 0" class="w-full lg:w-1/2 2xl:w-1/3 px-2 md:px-4">
                <NewsItem :post="post" :big="false" class="p-4" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
