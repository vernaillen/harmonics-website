<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
    default: 'proseIframe'
  },
})
</script>

<template>
  <iframe
    :src="src"
    :class="class"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

