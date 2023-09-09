<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="mb-10">
    <NuxtLink href="https://www.dwarsligger33.com/" target="_blank" :aria-label="t('dwarsligger.name')">
      {{ t ('dwarsligger.name') }}
    </NuxtLink><br>
    {{ t ('dwarsligger.addressLine1') }}<br>
    {{ t ('dwarsligger.addressLine2') }}<br>
    <NuxtLink href="https://goo.gl/maps/MnNE7r2AvZPsRXsK9" target="_blank" aria-label="google maps">
      <UIcon name="i-mdi-google-maps" /> google maps
    </NuxtLink><br>
    <span class="text-trance-400 dark:text-primary-100 text-sm">({{ t ('dwarsligger.gpsInfo') }})</span>
  </div>
</template>
