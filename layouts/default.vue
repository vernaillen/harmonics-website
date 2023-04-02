<script setup lang="ts">
import { useMobileNav } from '@/stores/mobileNav'
const mobileNav = useMobileNav()
</script>

<template>
  <div v-if="!mobileNav.visible" class="flex flex-col min-h-screen">
    <main class="flex-grow min-h-screen">
      <slot />
    </main>
    <footer-component />
    <easy-lightbox />
  </div>
</template>
