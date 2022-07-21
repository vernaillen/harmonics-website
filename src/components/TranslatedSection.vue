<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <slot v-if="locale === 'en'" name="en" />
  <slot v-if="locale === 'nl'" name="nl" />
</template>
