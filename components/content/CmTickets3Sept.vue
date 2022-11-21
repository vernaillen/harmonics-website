<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a href="https://store.ticketing.cm.com/harmonics" target="_blank" rel="noopener">
    <button
      class="text-base font-medium text-white bg-primary mt-1 py-2 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
    >
      <Icon name="ph:ticket" class="mr-2" />
      {{ t('tickets') }}
    </button>
  </a>
</template>
