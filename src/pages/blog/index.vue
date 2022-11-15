<script setup lang="ts">
const { t } = useI18n()
const title = `Blog | ${t('website.title')}`
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
  <section class="lg:container mx-auto pt-[20px] pb-[100px] px-4 mt-30">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6 animated fadeIn">
      <BlogPostList />
    </div>
  </section>
  <footer-component />
</template>
