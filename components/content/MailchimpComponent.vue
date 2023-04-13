<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
</script>

<template>
  <div v-if="appConfig.mailchimpLink.href">
    <h4 class="text-xl font-bold !text-primary !mt-0">
      {{ t('mailinglist.title') }}
    </h4>
    <p class="text-sm">
      {{ t('mailinglist.subtitle') }}
    </p>
    <p>
      <NuxtLink :href="appConfig.mailchimpLink.href" target="_blank">
        <Icon name="twemoji:open-mailbox-with-raised-flag" class="mailbox text-5xl fill-primary" />
      </NuxtLink>
    </p>
    <p>
      <NuxtLink :href="appConfig.mailchimpLink.href" target="_blank">
        <button class="text-base font-medium text-white bg-primary mt-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out">
          {{ t('mailinglist.subscribe') }}
        </button>
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.875rem;
}
</style>

<style>
.mailbox path:nth-child(1),
.mailbox path:nth-child(7) {
  fill: #BFAC22;
}
.mailbox path:nth-child(7) {
  opacity: 0;
}
.mailbox path:nth-child(2) {
  opacity: 0.7;
}
</style>
