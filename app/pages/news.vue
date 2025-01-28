<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('pages')
    .path(route.path)
    .first()
)

useSeoMeta({
  title: t('news.title'),
  ogTitle: t('news.title'),
  description: t('news.description'),
  ogDescription: t('news.description')
})
// defineOgImageComponent('OGImageMain')
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
