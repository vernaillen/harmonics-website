<script setup lang="ts">
const img = useImage()
export interface Props {
  src: string
  alt: string
  width: number
  height: number
  imgClass?: string
  placeholder?: string
  fit?: string
  format?: string
  modifiers?: Object
  finalOpacity?: number
}
const props = withDefaults(defineProps<Props>(), {
  imgClass: '',
  placeholder: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  fit: 'cover',
  format: 'webp',
  finalOpacity: 1
})
const imgUrl = img(props.src, {
  width: props.width,
  height: props.height,
  fit: props.fit,
  format: props.format,
  ...props.modifiers
})
const wrapperClass = computed(() => {
  return 'w-[' + props.width + 'px] h-[' + props.height + 'px] max-w-full'
})
const imgSrc = ref(props.placeholder)
watch(() => props.src, (newUrl) => {
  imgSrc.value = newUrl
})
</script>

<template>
  <div :class="wrapperClass">
    <img
      v-lazy="imgUrl"
      :src="imgSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :class="imgClass"
      class="object-cover opacity-0 transform transition-all duration-100 max-w-full"
    >
  </div>
</template>

<style>
img[lazy=loading] {
  opacity: 0;
}

img[lazy=loaded] {
  opacity: v-bind(finalOpacity);
}
</style>
