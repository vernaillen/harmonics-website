<script setup lang="ts">
import type { NewsItem } from '~~/types/newsItem'

export interface Props {
  post: NewsItem
  big: boolean
}
const props = defineProps<Props>()
const { t } = useI18n()
const imgWidth = props.big ? '' : 432
const imgHeight = props.big ? '' : 200
</script>

<template>
  <div class="relative bg-white dark:bg-dark rounded-md overflow-hidden">
    <NuxtLink v-if="post.thumbnail" :to="post._path" :aria-label="post.title">
      <nuxt-img :width="imgWidth" :height="imgHeight" loading="lazy" :src="post.thumbnail" class="rounded-md shadow-md shadow-gray-400 newsImg" :alt="`thumbnail ${post.title}`" />
    </NuxtLink>
    <NuxtLink v-if="post.thumb_video_webm || post.thumb_video_mp4" :to="post._path" :aria-label="post.title">
      <client-only>
        <video autoplay :width="imgWidth" class="rounded-md shadow-md shadow-gray-400 newsImg">
          <source v-if="post.thumb_video_webm" :src="post.thumb_video_webm" type="video/webm">
          <source v-if="post.thumb_video_mp4" :src="post.thumb_video_mp4" type="video/m4v">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </client-only>
    </NuxtLink>
    <h1>
      <NuxtLink
        :aria-label="post.title" :to="post._path"
        class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
      >
        {{ post.title }}
      </NuxtLink>
    </h1>
    <div class="mr-1 mb-6 mt-0">
      <div class="text-[0.6rem] text-gray-400 mr-2">
        <div class="w-full">
          {{ t('dates.published') }} {{ useFormattedDate(post.date) }}
        </div>
      </div>
    </div>
    <p class="text-base text-body-color font-medium pb-6 mb-6 ">
      {{ post.desc }}
      <br>
      <NuxtLink :to="post._path" :aria-label="post.title">
        <button
          class="text-base font-medium text-white bg-primary mt-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-out"
        >
          {{ t('news.readmore') }}
        </button>
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
img.newsImg {
  margin-top: 0;
}
</style>
