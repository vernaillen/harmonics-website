<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-primary">
      {{ t('mailinglist.title') }}
    </h1>
    <p>{{ t('mailinglist.subtitle') }}</p>
    <p>
      <a href="http://eepurl.com/h9DVsf" target="_blank">
        <Icon name="twemoji:open-mailbox-with-raised-flag" class="mailbox text-6xl fill-primary" />
      </a>
    </p>
    <p>
      <a href="http://eepurl.com/h9DVsf" target="_blank">
        <button class="text-base font-medium text-white bg-primary mt-5 py-2 px-6 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out">
          {{ t('mailinglist.subscribe') }}
        </button>
      </a>
    </p>
    <p class="text-sm">
      {{ t('mailinglist.opensmailchimp') }}
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
