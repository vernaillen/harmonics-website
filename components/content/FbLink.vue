<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <NuxtLink :href="src" target="_blank">
    <Icon name="prime:facebook" class="hover:text-gray-500 text-[#1877F2]" size="24" />
  </NuxtLink>
</template>
