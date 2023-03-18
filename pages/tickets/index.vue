<script setup lang="ts">
definePageMeta({
  layout: 'tickets',
  middleware: ['auth'],
  documentDriven: false,
})
</script>

<template>
  <div>
    <NuxtLayout>
      <TicketsComponent />
    </NuxtLayout>
  </div>
</template>
