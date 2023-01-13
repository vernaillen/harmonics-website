<script setup lang="ts">
const { page } = useContent()
const { t } = useI18n()

let title = t('website.title')
if (page && page.value && page.value.title)
  title = `${page.value.title} | ${t('website.title')}`
useHead({
  title,
  meta: [
    {
      property: 'og:title',
      content: title,
    },
  ],
})
</script>

<template>
  <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px] animate__animated animate__fadeIn">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div v-if="page" class="prose m-auto">
          <div v-if="page.title" class="flex flex-wrap">
            <h1 class="animate__animated animate__pulse">
              {{ page.title }}
            </h1>
          </div>
          <MarkdownEditedDates v-if="page && !page.hideEditedDates" />
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
            v-if="page.image"
          >
            <nuxt-img
              loading="lazy"
              :sizes="page.imageSizes ? page.imageSizes : ''"
              :height="page.imageHeight ? page.imageHeight : '400'"
              :width="page.imageWidth ? page.imageWidth : ''"
              :src="page.image" class="rounded-md  shadow-md shadow-gray-400" alt="article image"
            />
          </div>
          <article ref="content">
            <ContentDoc />
          </article>
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
</template>
