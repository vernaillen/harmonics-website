<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Props {
  post: ParsedContent
  big: boolean
}
const props = defineProps<Props>()
const { t } = useI18n()
const imgWidth = props.big ? '' : 624
const imgHeight = props.big ? '' : 326
const thumbSizes = computed(() => {
  return props.big ? 'sm:100vw md:580px lg:800px xl:1000px' : ''
})
</script>

<template>
  <div class="relative bg-white dark:bg-dark rounded-md overflow-hidden">
    <NuxtLink v-if="post.thumbnail" :to="post._path" :aria-label="post.title">
      <nuxt-img
        :sizes="thumbSizes"
        format="webp"
        :width="imgWidth"
        :height="imgHeight"
        :loading="big ? 'eager' : 'lazy'"
        :src="post.thumbnail"
        class="!mt-0 rounded-md shadow-md shadow-gray-400"
        :alt="`thumbnail ${post.title}`"
      />
    </NuxtLink>
    <NuxtLink v-if="post.thumb_video_webm || post.thumb_video_mp4" :to="post._path" :aria-label="post.title">
      <client-only>
        <video autoplay :width="imgWidth" class="!mt-0 rounded-md shadow-md shadow-gray-400 newsImg">
          <source v-if="post.thumb_video_webm" :src="post.thumb_video_webm" type="video/webm">
          <source v-if="post.thumb_video_mp4" :src="post.thumb_video_mp4" type="video/m4v">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </client-only>
    </NuxtLink>
    <h1>
      <NuxtLink
        :aria-label="post.title"
        :to="post._path"
        class="font-bold text-primary dark:text-white text-2xl block mb-4 hover:bg-opacity-80"
      >
        {{ post.title }}
      </NuxtLink>
    </h1>
    <MarkdownEditedDates v-if="!post.hideCreatedAndUpdatedDates" :post="post" />
    <p class="text-base text-body-color font-medium pb-6 mb-6 ">
      {{ post.desc }}
      <br>
      <NuxtLink :to="post._path" :aria-label="post.title">
        <button class="harmonicsButton">
          {{ t('news.readmore') }}
        </button>
      </NuxtLink>
    </p>
  </div>
</template>
