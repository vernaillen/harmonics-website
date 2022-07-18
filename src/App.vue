<script setup lang="ts">
useHead({
  title: 'Harmonics.be',
  meta: [
    {
      name: 'description',
      content: 'Healing power of Sound & Music - by Wouter Vernaillen',
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
    <footer-component />
  </div>
</template>
