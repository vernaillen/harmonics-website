<script setup lang="ts">
const { locale, t } = useI18n()
useHead({
  title: t('website.title'),
  htmlAttrs: {
    lang: locale,
  },
  meta: [
    { name: 'description', content: t('website.description') },
    {
      property: 'og:title',
      content: t('website.title'),
    },
    {
      property: 'og:image',
      content: '/harmonics.png',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(191 172 34/20%) 0%,rgb(191 172 34/100%) 60%,rgb(75 85 99/40%) 100%)" />
  <NuxtPage />
  <PolitePopup />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>
