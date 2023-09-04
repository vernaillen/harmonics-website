<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
defineProps({
  lang: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div v-if="appConfig.mailchimpLink" class="mb-8">
    <UCard>
      <h2 class="mt-0 text-primary-500 dark:text-primary-200">
        <NuxtLink :to="appConfig.mailchimpLink" target="_blank">
          {{ t('mailinglist.name', 1, { locale: lang }) }}
        </NuxtLink>
      </h2>
      <p class="text-sm">
        {{ t('mailinglist.desc', 1, { locale: lang }) }}
      </p>
      <UButton size="lg" :to="appConfig.mailchimpLink" target="_blank">
        {{ t('mailinglist.subscribe', 1, { locale: lang }) }}

        <template #trailing>
          <span class="iconHoverEffect">
            <UIcon name="i-heroicons-chevron-right" class="icon" />
            <UIcon name="i-heroicons-arrow-right-20-solid" class="icon--hover" />
          </span>
        </template>
      </UButton>
    </UCard>
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
