<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <iframe
    :src="src"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="proseIframe"
  />
</template>

