<script setup lang="ts">
defineProps<{
  text: string
  src: string
  extraClass?: string
}>()
</script>

<template>
  <NuxtLink :href="src" target="_blank" class="hover:!border-0" :class="extraClass">
    <button class="harmonicsButton">
      {{ text }}
    </button>
  </NuxtLink>
</template>
