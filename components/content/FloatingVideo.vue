<script setup lang="ts">
export interface Props {
  src: string
  title?: string
  shadow?: boolean
  thumbnail?: string
}

withDefaults(defineProps<Props>(), {
  shadow: true,
  title: 'Youtube video',
  thumbnail: undefined
})
</script>

<template>
  <div
    :class="shadow ? 'shadow-lg' : ''"
    class="rounded-xl overflow-hidden"
  >
    <LazyYoutubeVideo
      :src="src"
      :alt="title"
      :webp="true"
      :thumbnail="thumbnail ? { webp: thumbnail } : undefined"
      class="rounded-xl scale-[101%] overflow-hidden"
    />
  </div>
  <p class="caption text-xs text-center mt-1">
    <span>{{ title }}</span>
  </p>
</template>
<style>
.prose .y-video__media--type--img {
  margin-top: 0;
  margin-bottom: 0;
}

</style>
