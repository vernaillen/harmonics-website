<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Home' })
</script>

<template>
  <div class="relative pt-10">
    <section class="relative">
      <div class="lg:container mx-auto px-4 mt-10 xl:mt-16 3xl:mt-22">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-10/12 lg:w-5/12 ml-auto mr-auto lg:mr-0 px-4 lg:px-8 mt-10">
            <img alt="Gongs" class="max-w-full rounded-lg shadow-2xl mt-5" src="@/assets/gongs.jpg">
          </div>
          <div class="w-full sm:w-10/12 lg:w-6/12 ml-auto mr-auto lg:ml-0 px-4 lg:px-8 mt-10">
            <div>
              <h1 class="text-4xl md:text-5xl xl:text-6xl text-primary font-semibold py-4 animated pulse">
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
      </div>
      <div class="lg:container mx-auto px-4 my-20">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-10/12 lg:w-6/12 mx-auto px-4 mt-10">
            <mailchimp-component />
          </div>
        </div>
      </div>
    </section>
    <section class="lg:container mx-auto pt-[20px] pb-[100px] px-4 mt-20">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
        <BlogPostList />
      </div>
    </section>
  </div>
  <footer-component />
</template>
