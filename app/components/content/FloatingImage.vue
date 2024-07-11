<script setup lang="ts">
export interface Props {
  src: string
  width: number
  height: number
  alt?: string
  caption?: string
  captionUrl?: string
  cssClass?: string
  imageShadow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  cssClass: 'floatRight',
  imageShadow: true,
  alt: 'image',
  caption: 'image',
  captionUrl: ''
})
const imgClass = computed(() => {
  return props.imageShadow ? 'shadow ' : ''
})
</script>

<template>
  <div :class="cssClass">
    <VImage
      format="webp"
      :src="src"
      :width="width * 2"
      :height="height * 2"
      :alt="alt === 'image' && caption !== 'image' ? caption : alt"
      :title="alt === 'image' && caption !== 'image' ? caption : alt"
      :img-class="'!mt-0 !mb-1 rounded-xl transition-opacity duration-700 ' + imgClass"
      refit
    />
    <p v-if="caption" class="caption text-xs text-center mt-0">
      <NuxtLink
        v-if="captionUrl" :href="captionUrl"
        target="_blank"
        :aria-label="caption"
      >
        {{ caption }}
      </NuxtLink>
      <span v-else>{{ caption }}</span>
    </p>
  </div>
</template>

<style scoped>
.prose .floatLeft {
  float: left;
  margin-right: 15px;
  padding-right: 0;
  padding-bottom: 0;
  max-width: 50%;
}
.prose .left {
  margin-right: 15px;
  padding-right: 0;
  padding-bottom: 0;
  max-width: 50%;
}
.prose .floatRight {
  float: right;
  margin-left: 15px;
  padding-left: 0;
  padding-bottom: 0;
  max-width: 50%;
}
.prose .floatleft img,
.prose .left img,
.prose .floatRight img,
.prose .right img {
    margin-bottom: 4px;
}

.prose p.caption {
    margin-top: 0;
    width: v-bind('width')
}
@media (max-width: 540px) {
  .prose p.caption {
    margin-top: 0;
    width: 100%;
  }
  .prose .left,
  .prose .right
  .prose .floatLeft,
  .prose .floatRight {
    float: none;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
