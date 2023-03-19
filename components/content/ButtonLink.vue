<script setup lang="ts">
defineProps<{
  text: string
  src: string
  extraClass?: string
}>()
</script>

<template>
  <NuxtLink :href="src" target="_blank" class="hover:!border-0" :class="extraClass">
    <button class="text-base font-medium text-white bg-primary py-1 px-3 m-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md">
      {{ text }}
    </button>
  </NuxtLink>
</template>
