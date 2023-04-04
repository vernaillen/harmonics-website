<script setup lang="ts">
import type { Ref } from 'vue'

const { page } = useContent()
const { t } = useI18n()
const localePath = useLocalePath()

let title = t('website.title')
let ogImage = '/harmonics.png'
if (page.value && page.value.title)
  title = `${page.value.title} | ${t('website.title')}`
if (page.value && page.value.ogImage)
  ogImage = t('website.hostname') + page.value.ogImage
else if (page.value && page.value.thumbnail)
  ogImage = t('website.hostname') + page.value.thumbnail

if (page.value) {
  useHead({
    title,
    meta: [
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
    ],
  })
}
else {
  setResponseStatus(404)
}

const route = useRoute()
const { trigger } = usePolitePopup()
if (route.path !== '/contact' && route.path !== '/en/contact')
  trigger()

const activeTocId = ref()
const nuxtContent = ref(null)

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  // 0, which means that as soon as even one pixel is visible, the callback will fire.
  // 0.5, to be 50% of the way through the viewport when observing the element
  threshold: 0.5,
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting)
        activeTocId.value = id
    })
  }, observerOptions)

  // Track all sections that have an `id` applied
  document
    .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
    .forEach((section) => {
      observer.value?.observe(section)
    })
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
        <div class="flex flex-wrap">
          <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
            <div v-if="page" class="prose m-auto">
              <div v-if="page.title && !page.hideTitle" class="flex flex-wrap">
                <h1>
                  {{ page.title }}
                </h1>
              </div>
              <MarkdownEditedDates v-if="page && !page.hideCreatedAndUpdatedDates" :post="page" />
              <div v-if="page.show_desc" class="flex flex-wrap">
                <h4>
                  {{ page.desc }}
                </h4>
              </div>
              <div v-if="page.subtitle" class="flex flex-wrap">
                <em>
                  {{ page.subtitle }}
                </em>
              </div>
              <div
                v-if="page.image && !page.imageFloatingRight"
              >
                <NuxtImg
                  loading="lazy"
                  :sizes="page.imageSizes ? page.imageSizes : ''"
                  :height="page.imageHeight ? page.imageHeight : '400'"
                  :width="page.imageWidth ? page.imageWidth : ''"
                  :src="page.image"
                  format="webp"
                  fit="cover"
                  class="rounded-md shadow-md shadow-gray-400"
                  alt="article image"
                />
              </div>
              <article>
                <ContentDoc>
                  <template #default="{ doc }">
                    <div v-if="doc.showToc" class="grid grid-cols-12 gap-8">
                      <div class="nuxt-content col-span-8 xl:col-span-10">
                        <ContentRenderer ref="nuxtContent" :value="doc" />
                      </div>
                      <div class="col-span-4 xl:col-span-2 border rounded-md p-4">
                        <div class="sticky flex flex-col items-center">
                          <TableOfContents :active-toc-id="activeTocId" :slug="doc._path" />
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <FloatingImage v-if="page.imageFloatingRight" :src="page.image" :width="page.imageWidth ? page.imageWidth : 600" />
                      <ContentRenderer ref="nuxtContent" :value="doc" />
                    </div>
                  </template>
                </ContentDoc>
              </article>
            </div>
            <div v-else class="prose m-auto">
              <article>
                <ContentDoc :path="localePath('/404')" />
              </article>
            </div>
          </div>
        </div>
        <NextPreviousPost />
      </div>
    </NuxtLayout>
  </div>
</template>
