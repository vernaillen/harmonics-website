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
  <section class="lg:container mx-auto pt-[68px] pb-[100px] px-4 mt-[100px]">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
      <BlogPostList />
    </div>
  </section>
</template>
