<script setup lang="ts">
const lightbox = useLightbox()
function handleHide() {
  lightbox.visible.value = false
}
</script>

<template>
  <vue-easy-lightbox
    loop
    move-disabled
    :index="lightbox.index.value"
    :visible="lightbox.visible.value"
    :imgs="lightbox.images"
    @hide="handleHide"
  >
    <template #toolbar />
  </vue-easy-lightbox>
</template>

<style>
.vel-modal {
  @apply bg-primary-50 bg-opacity-90 dark:bg-[#000000] dark:bg-opacity-80 backdrop-blur-xl;
}
.vel-icon {
  @apply fill-[#000000] dark:fill-white;
}
</style>
