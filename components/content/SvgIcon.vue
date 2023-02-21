<script setup lang="ts">
defineProps < {
  file: string
  extraClass?: string
} > ()
</script>

<template>
  <img :src="`/icons/${file}`" class="inline-block h-4 px-2 mt-[-3px]" :class="extraClass">
</template>
