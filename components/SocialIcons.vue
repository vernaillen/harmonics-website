<script setup lang="ts">
const iconClass = 'hover:text-primary text-gray-500 ml-2'
</script>

<template>
  <div id="socials" class="min-w-[100px] pt-1 xl:pr-0 mr-[-10px]">
    <NuxtLink aria-label="Instagram" href="https://www.instagram.com/harmonics.be/" target="_blank" rel="me">
      <Icon name="ph:instagram-logo" :class="iconClass" size="22" />
    </NuxtLink>
    <NuxtLink aria-label="Facebook" href="https://www.facebook.com/harmonics.be/" target="_blank" rel="me">
      <Icon name="ph:facebook-logo" :class="iconClass" size="22" />
    </NuxtLink>
    <NuxtLink aria-label="WhatsApp" href="https://wa.me/+32473344656" target="_blank" rel="me">
      <Icon name="logos:whatsapp-icon" :class="iconClass" size="22" />
    </NuxtLink>
  </div>
</template>
