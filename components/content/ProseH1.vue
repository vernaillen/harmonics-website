<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <div class="flex flex-wrap">
    <h1 :id="id" class="animate__animated animate__pulse">
      <slot />
    </h1>
  </div>
</template>
