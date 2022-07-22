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
  <div class="container mx-auto px-4 pt-16 my-20">
    <div class="flex flex-wrap">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <div class="flex flex-wrap">
            <h1 v-if="useLocale().lang === 'en'" class="animated pulse">
              {{ frontmatter.title_en }}
            </h1>
            <h1 v-if="useLocale().lang === 'nl'" class="animated pulse">
              {{ frontmatter.title_nl }}
            </h1>
          </div>
          <slot />
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
  <footer-component />
</template>
