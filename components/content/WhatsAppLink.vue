<script setup lang="ts">
defineProps<{ nr: string }>()
</script>

<template>
  <NuxtLink :href="`https://wa.me/${nr}`" target="_blank">
    <Icon name="logos:whatsapp-icon" class="hover:text-gray-500" size="24" />
  </NuxtLink>
</template>
