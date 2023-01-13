<script setup lang="ts">
export interface Props {
  src: string
  width: number
  caption?: string
  captionUrl?: string
  cssClass?: string
  imageShadow?: boolean
}

withDefaults(defineProps<Props>(), {
  cssClass: 'floatRight',
  captionUrl: '#',
  imageShadow: true,
})
</script>

<template>
  <div :class="cssClass" style="max-width: 50%">
    <NuxtImg :src="src" :width="width" :alt="caption" :title="caption" class="rounded-md" :class="imageShadow ? 'shadow-md shadow-gray-400' : ''" />
    <p v-if="caption" class="caption text-xs w-full text-center mt-0">
      <a :href="captionUrl" target="_blank" :alt="caption" :title="caption">{{ caption }}</a>
    </p>
  </div>
</template>

<style scoped>
.prose .floatLeft {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
    max-width: 50%;
}
.prose .floatRight {
  float: right;
  padding-left: 20px;
  padding-bottom: 20px;
  max-width: 50%;
}
.prose .floatleft img,
.prose .floatRight img {
    margin-bottom: 4px;
}
.prose p.caption {
    margin-top: 0;
}
</style>
