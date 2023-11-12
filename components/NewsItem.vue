<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
const { locale, t } = useI18n()
export interface Props {
  post: ParsedContent
}
const props = defineProps<Props>()
const imgWidth = 624
const imgHeight = 326

onMounted(() => {
  if (document.getElementById('video' + props.post._id)) {
    setTimeout(() => {
      const video = document.getElementById('video' + props.post._id)
      video?.classList.remove('opacity-0')
      video?.classList.add('opacity-90')
    }, 100)
  }
})
</script>

<template>
  <div v-if="post._path" :class="post.category ? 'category-' + post.category : ''">
    <UCard>
      <template #header>
        <div
          v-if="post.thumbnail || post.thumb_video"
          class="h-[144px] sm:h-[257px] md:h-[167px] lg:h-[147px] xl:h-[179px] 2xl:h-[210px]"
        >
          <NuxtLink
            v-if="post.thumbnail"
            :to="post._path"
            :aria-label="post.title"
            class="imgHoverEffect"
          >
            <VImage
              :width="imgWidth"
              :height="imgHeight"
              loading="lazy"
              :src="post.thumbnail"
              :alt="`thumbnail ${post.title}`"
              img-class="!my-0 relative object-cover "
            />
          </NuxtLink>
          <NuxtLink v-if="post.thumb_video" :to="post._path" :aria-label="post.title">
            <TwicVideo
              v-if="post.thumb_video"
              :id="'video' + post._id"
              ratio="3:2"
              mode="cover"
              :src="'/harmonics.be' + post.thumb_video"
              class="opacity-0"
              style="transition: opacity 2s;"
            />
          </NuxtLink>
        </div>
      </template>
      <h2 href="#" class="mt-0 mb-2 dark:text-primary-200">
        <NuxtLink
          :to="post._path"
          :aria-label="post.title"
          :class="useCategoryLinkHover(post.category)"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>
      <template #fallback>
        <div class="text-[0.6rem] text-primary-500 dark:text-primary-200">
          <UIcon name="i-ph-spinner" class="animate-spin" />
        </div>
      </template>
      <div class="mr-1 mt-0">
        <div class="text-[0.7rem] text-primary-500 dark:text-primary-200 mr-2">
          <div v-if="post.date" class="block sm:inline-flex">
            <UIcon name="i-mdi-calendar" variant="ghost" class="h-3 w-3 mr-1 mt-[4px]" /> {{ t('dates.published') }}&nbsp;
            <NuxtTime
              :datetime="post.date"
              :locale="locale"
              day="numeric"
              month="long"
              year="numeric"
            />
          </div>
          <div v-if="post.date && post.updatedDate" class="mx-1 sm:inline-flex">
            -
          </div>
          <div v-if="post.updatedDate" class="block sm:inline-flex">
            {{ t('dates.lastUpdated') }}&nbsp;
            <NuxtTime
              :datetime="post.updatedDate"
              :locale="locale"
              day="numeric"
              month="long"
              year="numeric"
            />
          </div>
        </div>
      </div>
      <p class="text-sm md:text-md" v-html="post.desc" />
      <p class="!mb-0 w-full flex justify-end">
        <UButton
          :to="post._path"
          :aria-label="post.title"
          class="!mb-0 !mr-0 no-underline border-b-0"
        >
          {{ t('news.readmore') }}
          <template #trailing>
            <span class="iconHoverEffect">
              <UIcon name="i-heroicons-chevron-right" class="icon moveright duration-500 transform transition-all" />
              <UIcon name="i-heroicons-arrow-right-20-solid" class="icon--hover duration-500 transform transition-all" />
            </span>
          </template>
        </UButton>
      </p>
    </UCard>
  </div>
</template>
