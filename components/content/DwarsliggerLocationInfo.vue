<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a href="https://www.dwarsligger33.com/" target="_blank">{{ t ('dwarsligger.name') }}</a><br>
  {{ t ('dwarsligger.addressLine1') }}<br>
  {{ t ('dwarsligger.addressLine2') }}<br>
  <a href="https://goo.gl/maps/MnNE7r2AvZPsRXsK9" target="_blank"><Icon name="logos:google-maps" /> google maps</a><br>
  <span class="text-gray-500 text-sm">({{ t ('dwarsligger.gpsInfo') }})</span>
</template>
