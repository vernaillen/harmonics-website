<script setup lang="ts">
const iconClass = 'hover:text-primary text-gray-500 ml-2'
</script>

<template>
  <div id="socials" class="min-w-[100px] pt-1 sm:mr-0 xl:pr-0 mr-[-10px]">
    <a aria-label="Instagram" href="https://www.instagram.com/harmonics.be/" target="_blank" rel="noopener">
      <Icon name="ph:instagram-logo-light" :class="iconClass" size="22" />
    </a>
    <a aria-label="Facebook" href="https://www.facebook.com/harmonics.be/" target="_blank" rel="noopener">
      <Icon name="ph:facebook-logo-light" :class="iconClass" size="22" />
    </a>
    <a aria-label="YouTube" href="https://www.youtube.com/@harmonicsbe" target="_blank" rel="noopener">
      <Icon name="ph:youtube-logo-light" :class="iconClass" size="22" />
    </a>
  </div>
</template>
