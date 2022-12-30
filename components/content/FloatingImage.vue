<script setup lang="ts">
defineProps<{
  src: string
  width: number
  caption: string
  captionUrl: string
}>()
</script>

<template>
  <div class="floatRight" style="max-width: 50%">
    <NuxtImg :src="src" :width="width" :alt="caption" :title="caption" />
    <p class="caption text-xs w-full text-center mt-0">
      <a :href="captionUrl" target="_blank" :alt="caption" :title="caption">{{ caption }}</a>
    </p>
  </div>
</template>

<style scoped>
.prose .floatRight {
    float: right;
    padding-left: 20px;
    padding-bottom: 20px;
    max-width: 50%;
}
.prose .floatRight img {
    margin-bottom: 4px;
}
.prose p.caption {
    margin-top: 0;
}
</style>
