<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { useLightbox } from '@/stores/lightbox'

const lightbox = useLightbox()
function handleHide() {
  lightbox.hide()
}
</script>

<template>
  <VueEasyLightbox
    loop
    move-disabled
    :index="lightbox.index"
    :visible="lightbox.visible"
    :imgs="lightbox.images"
    @hide="handleHide"
  >
    <template #toolbar />
  </VueEasyLightbox>
</template>

<style scoped>
.vel-modal {
  background: rgba(0, 0, 0, 0.7);
}
</style>
