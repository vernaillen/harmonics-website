<script setup lang="ts">
import { useLocale } from '@/stores/lang'
defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container mx-auto px-4 pt-16 mt-20 mb-40">
    <div class="flex flex-wrap">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <h1 v-if="useLocale().lang === 'en'">
            {{ frontmatter.title_en }}
          </h1>
          <h1 v-if="useLocale().lang === 'nl'">
            {{ frontmatter.title_nl }}
          </h1>
          <slot />
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
</template>
