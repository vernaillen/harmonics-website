<script setup lang="ts">
const { page } = useContent()
const { t } = useI18n()
const lastUpdated = ref()
const { data } = useLazyFetch(
  `https://api.github.com/repos/vernaillen/harmonics-website/commits?path=content/${page._file}`, {
    query: { page: 1, per_page: 1 },
  },
)
watch(data, () => {
  if (data.value && data.value[0] && data.value[0].commit.author.date)
    return useFormattedDate(data.value[0].commit.author.date)
})
</script>

<template>
  <div class="mr-2 mb-8 mt-0">
    <div class="text-[0.6rem] text-gray-400 mr-2">
      <div v-if="page.date" class="block sm:inline-flex">
        {{ t('dates.published') }} {{ useFormattedDate(page.date) }}
      </div>
      <div v-if="page.date && lastUpdated" class="mx-1 hidden sm:inline-flex">
        -
      </div>
      <div v-if="lastUpdated" class="block sm:inline-flex">
        {{ t('dates.lastUpdated') }} {{ lastUpdated }}
      </div>
    </div>
  </div>
</template>
