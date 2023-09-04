<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const page = await queryContent(route.path).findOne()

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
defineOgImage({
  component: 'OGImageHome'
  /* component: 'OGImageContent',
  lang: locale,
  path: route.path */
})
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow">
        <HeaderImage
          :lang="locale"
          :page="page"
          class="w-full container mx-auto pb-6"
        />
        <div class="w-full container mx-auto py-4">
          <div class="prose prose-primary dark:prose-invert slide-enter-content">
            <NewsItems :path="localePath('/news')" :lang="locale" />
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
