<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  cssClass: {
    type: String,
    required: false,
    default: 'proseIframe',
  },
})
</script>

<template>
  <iframe
    :src="src"
    :class="cssClass"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>
