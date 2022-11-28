<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('website.title'),
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
  <div class="flex flex-col min-h-screen">
    <LazyHydrate when-idle>
      <navbar-component />
    </LazyHydrate>
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <LazyHydrate when-idle>
      <footer-component />
      <easy-lightbox />
    </LazyHydrate>
  </div>
</template>
