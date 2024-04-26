<script setup lang="ts">
defineProps<{ user: string, size?: string }>()
</script>

<template>
  <UButton
    :size="size ? size : 'xs'"
    icon="i-logos-telegram"
    :to="`https://t.me/${user}`"
    target="_blank"
    aria-label="contact me on Telegram"
    class="!mx-0"
  />
</template>
