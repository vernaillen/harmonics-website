<script setup lang="ts">
const url = 'https://open.spotify.com/embed/episode/4a37QVzTox2PQ9Rqh4YABO'
</script>

<template>
  <iframe
    :src="url"
    width="100%"
    height="152"
    frame-border="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    class="rounded-xl shadow-lg"
  />
</template>
