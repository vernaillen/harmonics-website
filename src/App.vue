<script setup lang="ts">
useHead({
  title: 'Harmonics.be',
  meta: [
    {
      name: 'description',
      content: 'Healing power of Sound & Music - by Wouter Vernaillen',
    },
  ],
  noscript: [
    {
      children: 'Javascript is required',
    },
  ],
})
</script>

<template>
  <div>
    <navbar-component />
    <main>
      <router-view />
    </main>
  </div>
  <easy-lightbox />
</template>
