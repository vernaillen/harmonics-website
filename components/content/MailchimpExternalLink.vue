<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
</script>

<template>
  <NuxtLink :href="appConfig.mailchimpLink.href" target="_blank">
    {{ t('mailinglist.name') }}
  </NuxtLink>
</template>
