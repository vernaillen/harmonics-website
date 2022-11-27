<script setup lang="ts">
const { t } = useI18n()
const title = `${t('website.title')}`
useHead({
  title,
  meta: [
    {
      property: 'og:title',
      content: title,
    },
  ],
})
const nrOfPosts = 3
</script>

<template>
  <div class="flex-col animate__animated animate__fadeIn">
    <section id="title" class="lg:container mx-auto px-6">
      <div class="flex flex-wrap lg:h-screen items-center">
        <div class="w-full sm:w-10/12 lg:w-6/12 ml-auto mr-auto mt-[150px] lg:mr-0 lg:px-8 lg:mt-0">
          <img alt="Gongs" class="max-w-full rounded-lg shadow-2xl" src="/images/gongs.jpg">
        </div>
        <div class="w-full sm:w-10/12 lg:w-6/12 ml-auto mr-auto mt-[50px] lg:ml-0 lg:px-8 lg:mt-0">
          <div>
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-medium text-primary py-4 animate__animated animate__pulse">
              {{ t('home.title') }}
            </h1>
            <h4 class="text-2xl leading-relaxed text-gray-500 my-5">
              {{ t('home.tagline') }}
            </h4>
            <p class="pt-5 text-lg text-gray-400">
              {{ t('home.services') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="blogposts" class="lg:container mx-auto pt-[20px] pb-[100px] px-4 mt-20">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
        <BlogPostList :nr-of-posts="nrOfPosts" />
      </div>
    </section>
  </div>
</template>
