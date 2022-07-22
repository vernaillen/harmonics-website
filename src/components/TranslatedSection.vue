<script setup lang="ts">
import { useLocale } from '@/stores/lang'
</script>

<template>
  <slot v-if="useLocale().lang === 'en'" name="en" />
  <slot v-if="useLocale().lang === 'nl'" name="nl" />
</template>
