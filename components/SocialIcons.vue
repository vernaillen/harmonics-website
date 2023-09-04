<script setup lang="ts">
const appConfig = useAppConfig()
const socials = appConfig.socials
</script>

<template>
  <div id="socials" class="overflow-hidden inline-flex">
    <NuxtLink
      v-for="social, index in socials"
      :key="index"
      :href="social?.url"
      :aria-label="social?.name ? social?.name : 'Social icon'"
      target="_blank"
      rel="me"
    >
      <UButton
        v-if="social?.icon"
        :aria-label="social.name"
        :icon="social?.icon"
        size="xs"
      />
    </NuxtLink>
  </div>
</template>
