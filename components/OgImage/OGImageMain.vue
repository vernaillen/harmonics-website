<script setup lang="ts">
// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false
})
defineProps<{
  image?: string
  width?: number
  height?: number
}>()
</script>

<template>
  <div class="w-full h-full bg-white">
    <div class="w-full flex flex-row">
      <div v-if="image">
        <img :src="image" :width="width? width : 1200" :height="height? height : 600" class="object-cover object-left">
      </div>
      <div v-else class="w-full items-start text-center p-12">
        <img src="/images/harmonics_fulllogo400.png" width="550" class="mx-auto">
      </div>
    </div>
  </div>
</template>
