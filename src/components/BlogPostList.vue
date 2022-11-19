<script setup lang="ts">
import dayjs from 'dayjs'
import blog from '@/classes/blog'

defineProps({
  nrOfPosts: {
    type: Number,
    default: 1000,
    required: false,
  },
})

const { t } = useI18n()

function formatDate(d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}
const animateDurationClass = (index: number) => {
  return `animate-duration-${index * 1000}, animate-delay-${index * 100}`
}
</script>

<template>
  <div v-for="post, index in blog.getPosts(nrOfPosts)" :key="post.path" class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4 animated fadeIn" :class="animateDurationClass(index)">
    <div class="relative bg-white dark:bg-dark shadow- rounded-md shadow-light-300 overflow-hidden mb-10">
      <div class="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <router-link v-if="post.thumbnail" :to="post.path">
          <img :src="post.thumbnail" class="rounded-md mb-4" :alt="`thumbnail ${post.title}`">
        </router-link>
        <router-link v-if="post.thumb_video_webm || post.thumb_video_mp4" :to="post.path">
          <client-only>
            <video autoplay width="320" class="rounded-md mb-4">
              <source v-if="post.thumb_video_webm" :src="post.thumb_video_webm" type="video/webm">
              <source v-if="post.thumb_video_mp4" :src="post.thumb_video_mp4" type="video/m4v">
              Sorry, your browser doesn't support embedded videos.
            </video>
          </client-only>
        </router-link>
        <h3>
          <router-link
            :to="post.path"
            class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
          >
            {{ post.title }}
          </router-link>
        </h3>

        <p
          class="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
        >
          {{ post.desc }}
          <br>
          <router-link :to="post.path">
            <button
              class="text-base font-medium text-white bg-primary mt-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-outÒ"
            >
              {{ t('blog.readmore') }}
            </button>
          </router-link>
        </p>

        <div class="flex">
          <div
            class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
          >
            <div class="w-full">
              <p class="text-xs text-body-color">
                {{ formatDate(post.date) }}
              </p>
            </div>
          </div>
          <div class="inline-block">
            <p class="text-xs text-body-color">
              {{ t('blog.by') }} {{ post.author }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
