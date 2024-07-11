<script setup lang="ts">
export interface Props {
  src: string
  placeholder?: string
  title?: string
  shadow?: boolean
}

withDefaults(defineProps<Props>(), {
  shadow: true,
  placeholder: '/images/youtube/youtube-placeholder.webp',
  title: 'MixCloud set'
})
const play = ref(false)
</script>

<template>
  <div class="full">
    <iframe
      v-if="!play"
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="absolute top-0 left-0 w-full h-[180px] rounded-xl"
      :class="shadow ? 'shadow' : ''"
    />
  </div>
</template>

<style scoped>
.prose .full {
  position: relative;
  width: 100%;
  margin-left: 15px;
  height: 0;
  padding-left: 0;
  padding-bottom: 58.25%;
  margin-bottom: 10px;
}
</style>
