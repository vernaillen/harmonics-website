<script setup lang="ts">
import type { Post } from '../composables/types'

const { t } = useI18n()

useRouter()
const route = useRoute()
const previousPost: Post | null = getPreviousPost(route.path)
const nextPost: Post | null = getNextPost(route.path)
</script>

<template>
  <div class="container mx-auto p-4 mt-10 mb-20">
    <div class="flex flex-wrap">
      <div
        class="w-full md:w-1/2 text-end order-1 md:order-2 justify-end font-medium text-base text-body-color leading-relaxed"
      >
        <NuxtLink v-if="nextPost" :to="nextPost.path">
          {{ t('blog.next') }}:<br>
          <span class="text-primary">{{ nextPost.title }}</span>
        </NuxtLink>
      </div>
      <div
        class="w-full md:w-1/2  order-2 md:order-1 justify-start font-medium text-base text-body-color leading-relaxed"
      >
        <NuxtLink v-if="previousPost" :to="previousPost.path">
          {{ t('blog.previous') }}:<br>
          <span class="text-primary">{{ previousPost.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
