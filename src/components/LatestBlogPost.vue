<script setup lang="ts">
import { getLatestPost } from '@/classes/blog'
import type { Post } from '@/types'

const { t } = useI18n()

const post: Post | null = getLatestPost()
</script>

<template>
  <div v-if="post">
    <router-link v-if="post.image" :to="post.path">
      <img :src="post.image" class="rounded-md mb-4">
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
    <h3 class="animated pulse">
      <router-link
        :to="post.path"
        class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
      >
        {{ post.title }}
      </router-link>
    </h3>

    <p class="text-base text-body-color font-medium pb-6 mb-6">
      {{ post.desc }}
      <br>
      <router-link :to="post.path">
        <button
          class="text-base font-medium text-white bg-primary mt-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-outÒ"
        >
          {{ t('blog.findoutmore') }}
        </button>
      </router-link>
    </p>
  </div>
</template>
