<script setup lang="ts">
definePageMeta({
  layout: 'tickets',
  middleware: ['auth'],
  documentDriven: false
})
</script>

<template>
  <div>
    <NuxtLayout>
      Hier overzicht tonen van gemaakte reservaties
    </NuxtLayout>
  </div>
</template>
