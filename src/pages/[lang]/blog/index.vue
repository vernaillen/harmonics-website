<script setup lang="ts">
useHead({ title: 'Blog' })
</script>

<template>
  <section class="lg:container mx-auto pt-[20px] pb-[100px] px-4 mt-20 mb-10">
    <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
      <BlogPostList />
    </div>
  </section>
  <footer-component />
</template>
