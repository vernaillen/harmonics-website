<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Props {
  lang: string
  page: ParsedContent
}
const props = defineProps<Props>()

const url = computed(() => {
  if (props.page && props.page.header && props.page.header.image) {
    return props.page.header.image
  } else if (props.page && props.page.thumbnail) {
    return props.page.thumbnail
  } else {
    return null
  }
})
const videoUrl = computed(() => {
  if (props.page && props.page.header && props.page.header.video) {
    return props.page.header.video
  } else {
    return null
  }
})
const baseImgClass = 'object-cover h-[120px] sm:h-[150px] md:h-[180px] lg:h-[230px] w-full rounded-xl top-0 transition-opacity duration-1000 ease-in-out'
const imgClass = computed(() => {
  if (props.page && props.page.header && props.page.header.imageClass) {
    return baseImgClass + ' ' + props.page.header.imageClass
  } else {
    return baseImgClass
  }
})
onMounted(() => {
  if (document.getElementById('video')) {
    setTimeout(() => {
      const video = document.getElementById('video') as HTMLVideoElement
      video?.classList.remove('opacity-0')
      video?.classList.add('opacity-60')
    }, 100)
  }
  if (document.getElementById('catImage')) {
    setTimeout(() => {
      const catImg = document.getElementById('catImage') as HTMLImageElement
      catImg?.classList.remove('opacity-0')
      catImg?.classList.add('opacity-100')
    }, 10)
  }
})
</script>

<template>
  <div class="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[230px] w-full mb-10 lg:mb-16 rounded-xl relative">
    <div
      class="container h-[120px] sm:h-[150px] md:h-[180px] lg:h-[230px]
      text-center py-8 sm:py-12 md:py-16 lg:py-20
      absolute top-0 bottom-0 left-0 right-0 z-10
      font-mic32 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    >
      <h1 class="p-1">
        {{ page ? page.title : '' }}
      </h1>
    </div>
    <GradientBackground
      v-if="page"
      :class="page.header && page.header.wrapperClass ? page.header.wrapperClass : useCategoryBGColor(page ? page.category : null) + ''"
      class="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[230px] rounded-xl shadow-md overflow-hidden "
    >
      <TwicVideo
        v-if="videoUrl"
        id="video"
        ref="video"
        ratio="3:2"
        mode="cover"
        from="0.5"
        to="0.9"
        :src="'/harmonics.be' + videoUrl"
        class="opacity-0"
        :class="imgClass"
        style="transition: opacity 2s;"
      />
      <VImage
        v-if="url"
        :src="url"
        format="webp"
        :height="300"
        :width="1272"
        fit="cover"
        :alt="'banner image: ' + page ? page.title : ''"
        :modifiers="page.header && page.header.modifiers ? page.header.modifiers : null"
        :img-class="imgClass"
        :final-opacity="0.4"
      />
      <div v-else class="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[230px]" />
    </GradientBackground>
    <div class="w-full flex justify-center">
      <div
        id="categoryImage"
        class="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:h-[80px] lg:w-[80px]
        -mt-[25px] sm:-mt-[30px] lg:-mt-[40px]
        z-50 mx-auto top-[66px] sm:top-[70px] left-0 right-0"
      >
        <NuxtLink :to="lang === 'nl' ? '/' : '/' + lang">
          <CategoryImage
            :category="page && page.category ? page.category : 'general'"
            :show-detail="true"
            :alt="page && page.category ? 'category image: ' + page.category : 'Harmonics logo'"
            class="rounded-full shadow-lg relative"
          />
        </NuxtLink>
      </div>
    </div>
    <MarkdownEditedDates :post="page" :lang="lang" class="-mt-4 lg:-mt-6" />
  </div>
</template>

<style>
@media (min-width: 1320px) {
  #video>div {
    padding-top: 20% !important;
  }
}
@media (min-width: 1140px) and (max-width: 1319px) {
  #video>div {
    padding-top: 25% !important;
  }
}
@media (min-width: 720px) and (max-width: 1139px) {
  #video>div {
    padding-top: 27% !important;
  }
}
@media (min-width: 540px) and (max-width: 719px) {
  #video>div {
    padding-top: 40% !important;
  }
}
@media (max-width: 539px) {
  #video>div {
    padding-top: 50% !important;
  }
}
</style>
