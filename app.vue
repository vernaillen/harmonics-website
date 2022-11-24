<script setup lang="ts">
const onHydrated = () => {
  console.log('content hydrated !')
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <navbar-component />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <LazyHydrate :on-interaction="['click', 'touchstart']" @hydrated="onHydrated">
      <footer-component />
      <easy-lightbox />
    </LazyHydrate>
  </div>
</template>
