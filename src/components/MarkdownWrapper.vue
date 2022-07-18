<script setup lang="ts">
defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container mx-auto px-4 pt-16 my-20">
    <div class="flex flex-wrap">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <slot />
      </div>
    </div>
  </div>
</template>
