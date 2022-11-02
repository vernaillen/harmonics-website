<script setup lang="ts">
const iconClass = 'hover:text-primary text-gray-500 h-5 mx-2'
</script>

<template>
  <div id="socials" class="min-w-38 pt-1 sm:pr-10 xl:pr-0 mr-[-10px]">
    <a
      href="https://www.youtube.com/@harmonicsbe" target="_blank" rel="noopener"
    >
      <FontAwesomeIcon :icon="['fab', 'youtube']" :class="iconClass" />
    </a>
    <a
      href="https://www.facebook.com/harmonics.be/" target="_blank" rel="noopener"
    >
      <FontAwesomeIcon :icon="['fab', 'facebook']" :class="iconClass" />
    </a>
    <a href="https://www.instagram.com/harmonics.be/" target="_blank" rel="noopener">
      <FontAwesomeIcon :icon="['fab', 'instagram']" :class="iconClass" />
    </a>
  </div>
</template>
