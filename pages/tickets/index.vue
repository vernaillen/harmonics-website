<script setup lang="ts">
definePageMeta({
  layout: 'tickets',
  middleware: ['auth'],
  documentDriven: false,
})
</script>

<template>
  <div>
    <TicketsComponent />
  </div>
</template>
