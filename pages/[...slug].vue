<script setup lang="ts">
const { page } = useContent()

const { t } = useI18n()

const title = `${page.value.title} | ${t('website.title')}`
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
  <div class="container mx-auto px-4 pt-[80px] mt-[68px] animate__animated animate__fadeIn">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <div class="flex flex-wrap">
            <h1 class="animate__animated animate__pulse">
              {{ page.title }}
            </h1>
          </div>
          <div v-if="page.show_desc" class="flex flex-wrap">
            <h4>
              {{ page.desc }}
            </h4>
          </div>
          <div v-if="page.show_subtitle" class="flex flex-wrap">
            <em>
              {{ page.subtitle }}
            </em>
          </div>
          <nuxt-img v-if="page.image" loading="lazy" :src="page.image" class="rounded-md" alt="article image" />
          <article ref="content">
            <ContentDoc />
          </article>
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
</template>
