<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <div class="flex flex-wrap">
    <h1 :id="id">
      <slot />
    </h1>
  </div>
</template>
