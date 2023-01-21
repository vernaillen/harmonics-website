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
  <NuxtLoadingIndicator :height="4" color="repeating-linear-gradient(to right,#231f20 100%,#BFAC22 100%)" />
  <div class="flex flex-col min-h-screen">
    <navbar-component />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <footer-component />
    <easy-lightbox />
  </div>
</template>
