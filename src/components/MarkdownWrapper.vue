<script setup lang="ts">
defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
const { locale } = useI18n()
</script>

<template>
  <div class="container mx-auto px-4 pt-16 my-20">
    <div class="flex flex-wrap">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div class="prose m-auto">
          <h1 v-if="locale === 'en'">
            {{ frontmatter.title_en }}
          </h1>
          <h1 v-if="locale === 'nl'">
            {{ frontmatter.title_nl }}
          </h1>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
