<script setup lang="ts">
import iframeResize from 'iframe-resizer/js/iframeResizer'
import { ref } from 'vue'

const iframeRef = ref()
const spinner = ref()
onMounted(() => {
  const iframeEl: HTMLIFrameElement = iframeRef.value
  iframeEl.addEventListener('load', () => iframeResize({}, iframeEl))
})
</script>

<template>
  <div id="iframeLoadingSpinner" ref="spinner" class="m-auto w-full text-center relative">
    <div class="absolute w-full mt-4">
      <Icon
        name="uil:spinner-alt"
        class="animate-spin"
        size="24"
      />
    </div>
  </div>
  <iframe
    ref="iframeRef"
    src="/instagram"
    width="100%"
    loaded="spinner.value.style = 'display: none'"
  />
</template>
