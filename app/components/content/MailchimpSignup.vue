<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <MailchimpComponent :lang="locale" />
</template>
