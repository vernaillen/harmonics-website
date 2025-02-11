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
        <NuxtLink :to="appConfig.mailchimpLink" target="_blank" :aria-label="t('mailinglist.name', 1, { locale: lang })">
          {{ t('mailinglist.name', 1, { locale: lang }) }}
        </NuxtLink>
      </h2>
      <div class="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div class="text-sm xl:col-span-2">
          {{ t('mailinglist.desc', 1, { locale: lang }) }}
        </div>
        <div>
          <UButton
            size="lg" :to="appConfig.mailchimpLink"
            target="_blank"
            class="min-w-[9rem]"
          >
            {{ t('mailinglist.subscribe', 1, { locale: lang }) }}

            <template #trailing>
              <span class="iconHoverEffect">
                <UIcon name="i-heroicons-chevron-right" class="icon moveright duration-500 transform transition-all" />
                <UIcon name="i-heroicons-arrow-right-20-solid" class="icon--hover duration-500 transform transition-all" />
              </span>
            </template>
          </UButton>
        </div>
      </div>
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
