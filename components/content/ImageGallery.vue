<script setup lang="ts">
export interface Props {
  folder: string
  filter?:string
}
const props = withDefaults(defineProps<Props>(), {
  filter: ''
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
  lightbox.images = images
  lightbox.visible.value = true
  lightbox.index.value = i
}
</script>

<template>
  <div class="columns-1 md:columns-2 lg:columns-3 mx-[-8px]">
    <div v-for="(image, index) in images" :key="index" class="px-2">
      <div class="imgHoverEffect rounded-xl hover:rounded-2xl overflow-hidden relative mb-8 shadow-md">
        <NuxtPicture loading="lazy" :src="image" class="cursor-pointer rounded-xl hover:rounded-2xl max-w-full p-0 m-0" :alt="image" @click="openGallery(index)" />
      </div>
    </div>
  </div>
</template>
