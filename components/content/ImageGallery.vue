<script setup lang="ts">
export interface Props {
  folder: string
  columns?: number
  filter?:string
  disableLightbox?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  filter: '',
  columns: 3,
  disableLightbox: false
})

const lightbox = useLightbox()
const images: string[] = []
Object.values(import.meta.glob('/public/images/**')).forEach((imageModule) => {
  if (
    imageModule.name &&
    imageModule.name.startsWith(`/public/images/${props.folder}`) &&
    (props.filter == null ||
      props.filter === '' ||
      imageModule.name.indexOf(props.filter) > 0)
  ) { images.push(imageModule.name.substring('/public'.length)) }
})
function openGallery (i: number) {
  if (!props.disableLightbox) {
    lightbox.images = images
    lightbox.visible.value = true
    lightbox.index.value = i
  }
}

const columns = computed(() => {
  return 'lg:columns-' + props.columns
})
</script>

<template>
  <div class="columns-1 md:columns-2 mx-[-8px]" :class="columns">
    <div v-for="(image, index) in images" :key="index" class="px-1">
      <div
        class="rounded-xl hover:rounded-2xl overflow-hidden relative mb-6 shadow-md"
        :class="disableLightbox ? '' : 'imgHoverEffect'"
      >
        <NuxtPicture
          loading="lazy"
          :src="image"
          format="webp"
          class="rounded-xl hover:rounded-2xl max-w-full p-0 m-0"
          :class="disableLightbox ? '' : 'cursor-pointer'"
          :alt="image"
          @click="disableLightbox ? null : openGallery(index)"
        />
      </div>
    </div>
  </div>
</template>
