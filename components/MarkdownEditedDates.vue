<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { t } = useI18n()

defineProps<{
  lang: string | undefined
  post: ParsedContent
}>()
</script>

<template>
  <div v-if="post" class="mr-1">
    <div class="text-[0.7rem] text-trance-400 dark:text-primary-200 mx-2">
      <div v-if="post.date" class="block sm:inline-flex">
        <UIcon name="i-mdi-calendar" variant="ghost" class="h-3 w-3 mr-1 mt-[2px]" />
        <NuxtTime
          :datetime="post.date"
          :locale="lang"
          day="numeric"
          month="short"
          year="numeric"
          class="sm:hidden"
        />
        <NuxtTime
          :datetime="post.date"
          :locale="lang"
          day="numeric"
          month="long"
          year="numeric"
          class="hidden sm:inline-flex"
        />
      </div>
      <div v-if="post.date && post.updatedDate" class="mx-1 sm:inline-flex">
        -
      </div>
      <div v-if="post.updatedDate" class="block sm:inline-flex">
        {{ t('dates.lastUpdated', 1, { locale: lang }) }}&nbsp;
        <NuxtTime
          :datetime="post.updatedDate"
          :locale="lang"
          day="numeric"
          month="long"
          year="numeric"
        />
      </div>
    </div>
  </div>
</template>
