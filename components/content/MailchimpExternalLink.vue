<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
</script>

<template>
  <a :href="appConfig.mailchimpLink" target="_blank">
    {{ t('mailinglist.name') }}
  </a>
</template>
