<script setup lang="ts">
defineProps<{ nr: string, size?: string }>()
</script>

<template>
  <UButton
    :size="size ? size : 'xs'"
    icon="i-logos-whatsapp-icon"
    :to="`https://wa.me/${nr}`"
    target="_blank"
    aria-label="contact me on WhatsApp"
    class="!mx-0"
  />
</template>
