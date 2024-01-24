<script setup lang="ts">
defineProps<{ nr: string, size?: string }>()
</script>

<template>
  <UButton
    :size="size ? size : 'xs'"
    icon="i-logos-whatsapp-icon"
    to="https://chat.whatsapp.com/Jj1VjJkzKzg6vbMtHp58hu"
    target="_blank"
    aria-label="Harmonics community op WhatsApp"
    class="!mx-0"
  >
    Community
  </UButton>
</template>
