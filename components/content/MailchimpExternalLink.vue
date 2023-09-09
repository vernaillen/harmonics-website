<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
</script>

<template>
  <NuxtLink v-if="appConfig.mailchimpLink" :href="appConfig.mailchimpLink" target="_blank" :aria-label="t('mailinglist.name')">
    {{ t('mailinglist.name') }}
  </NuxtLink>
</template>
