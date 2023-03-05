<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  post: ParsedContent
}>()
const { t } = useI18n()

let createdDate = props.post.date
if (!createdDate)
  createdDate = props.post.createdDate
</script>

<template>
  <div class="mr-2 mb-8 mt-0">
    <div class="text-[0.6rem] text-gray-400 mr-2">
      <div v-if="createdDate && !post.hideCreatedDate" class="block sm:inline-flex">
        {{ t('dates.published') }} {{ useFormattedDate(createdDate) }}
      </div>
      <div v-if="createdDate && !post.hideCreatedDate && post.updatedDate" class="mx-1 hidden sm:inline-flex">
        -
      </div>
      <div v-if="post.updatedDate" class="block sm:inline-flex">
        {{ t('dates.lastUpdated') }} {{ useFormattedDate(post.updatedDate) }}
      </div>
    </div>
  </div>
</template>
