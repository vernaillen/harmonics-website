<script setup lang="ts">
import iframeResize from 'iframe-resizer/js/iframeResizer'

import { onMounted, ref } from 'vue'

const iframeRef = ref()

onMounted(() => {
  const iframeEl: HTMLIFrameElement = iframeRef.value
  iframeEl.addEventListener('load', () => iframeResize({}, iframeEl))
})
</script>

<template>
  <iframe
    ref="iframeRef"
    src="/instagram"
    width="100%"
  />
</template>
