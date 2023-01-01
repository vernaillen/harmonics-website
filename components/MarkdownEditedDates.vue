<script setup lang="ts">
const props = defineProps<{
  pageDate: string
  pageFile: string
}>()
const { t } = useI18n()
const route = useRoute()
const { data } = await useFetch(
  `https://api.github.com/repos/vernaillen/harmonics-website/commits?path=content/${props.pageFile}`, {
    query: { page: 1, per_page: 1 },
  })
const lastUpdated = computed(() => {
  if (data.value && data.value[0] && data.value[0].commit.author.date)
    return useFormattedDate(data.value[0].commit.author.date)

  return ''
})
</script>

<template>
  <div class="mr-2 mb-8 mt-0">
    <div class="text-[0.6rem] text-gray-400 mr-2">
      <div v-if="pageDate" class="block sm:inline-flex">
        {{ t('dates.published') }} {{ useFormattedDate(pageDate) }}
      </div>
      <div v-if="pageDate && lastUpdated" class="mx-1 hidden sm:inline-flex">
        -
      </div>
      <div v-if="lastUpdated" class="block sm:inline-flex">
        {{ t('dates.lastUpdated') }} {{ lastUpdated }}
      </div>
    </div>
  </div>
</template>
