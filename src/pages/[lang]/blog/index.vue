<script setup lang="ts">
const { t } = useI18n()
const title = `${t('website.title')} | Blog`
useHead({
  title,
  meta: [
    {
      property: 'og:title',
      content: title,
    },
  ],
})
</script>

<template>
  <section class="lg:container mx-auto pt-[20px] pb-[100px] px-4 mt-20">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
      <BlogPostList />
    </div>
  </section>
  <footer-component />
</template>
