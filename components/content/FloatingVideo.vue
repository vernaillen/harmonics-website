<script setup lang="ts">
export interface Props {
  src: string
  height?: number
  cssClass?: string
  shadow?: boolean
}

withDefaults(defineProps<Props>(), {
  height: 250,
  cssClass: 'floatRight',
  shadow: true
})
</script>

<template>
  <div :class="cssClass">
    <iframe
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="absolute top-0 left-0 w-full h-full rounded-md"
      :class="shadow ? 'shadow-md shadow-gray-400' : ''"
    />
  </div>
</template>

<style scoped>
.prose .floatLeft,
.prose .left,
.prose .floatRight {
  position: relative;
  max-width: 50%;
  width: 50%;
  height: 0;
  padding-bottom: 28.13%;
  margin-bottom: 10px;
}

.prose .floatLeft {
  float: left;
  margin-right: 15px;
  padding-right: 0;
}
.prose .left {
  position: relative;
  margin-right: 15px;
  padding-right: 0;
}
.prose .floatRight {
  position: relative;
  float: right;
  margin-left: 15px;
  padding-left: 0;
}

@media (max-width: 540px) {
  .prose .left,
  .prose .right
  .prose .floatLeft,
  .prose .floatRight {
    float: none;
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 58.25%;
  }
}
</style>
