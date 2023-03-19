<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <NuxtLink href="https://www.dwarsligger33.com/" target="_blank">
    {{ t ('dwarsligger.name') }}
  </NuxtLink><br>
  {{ t ('dwarsligger.addressLine1') }}<br>
  {{ t ('dwarsligger.addressLine2') }}<br>
  <NuxtLink href="https://goo.gl/maps/MnNE7r2AvZPsRXsK9" target="_blank">
    <Icon name="logos:google-maps" /> google maps
  </NuxtLink><br>
  <span class="text-gray-500 text-sm">({{ t ('dwarsligger.gpsInfo') }})</span>
</template>
