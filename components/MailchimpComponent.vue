<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="animate__animated animate__pulse">
      {{ t('mailinglist.title') }}
    </h1>
    <p>{{ t('mailinglist.subtitle') }}</p>
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
#mc_embed_signup .mc-field-group {
  padding-top: 10px;
  padding-bottom: 10px;
}
#mc_embed_signup .mc-field-group input {
  display: block;
  width: 100%;
  padding: 2px 0;
  text-indent: 2%;
  border: 1px solid #ABB0B2;
  border-radius: 3px;
}
#mc_embed_signup img {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
