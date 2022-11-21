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
  <section class="lg:container mx-auto pt-[80px] mt-[68px] pb-[100px] px-4">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2">
      <BlogPostList />
    </div>
  </section>
</template>
