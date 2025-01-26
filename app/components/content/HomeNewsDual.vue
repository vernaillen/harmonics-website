<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

const { data: posts } = await useAsyncData('homenews-' + locale.value, () =>
  queryCollection('news' + locale.value)
    .order('id', 'DESC')
    .limit(2)
    .all()
)
</script>

<template>
  <section id="news">
    <div class="container pb-10 mx-auto px-0 text-center">
      <h1>
        <NuxtLink :href="localePath('/news')" :aria-label="t('news.recent')">
          {{ t('news.recent') }}
        </NuxtLink>
      </h1>
      <div class="w-full grid md:grid-cols-2 gap-6 ">
        <template v-for="post, index in posts" :key="index">
          <div v-if="index === 0" class="w-full">
            <NewsItem :post="post" />
          </div>
          <div v-if="index === 1" class="w-full">
            <NewsItem :post="post" />
          </div>
        </template>
      </div>
      <UButton :to="localePath('/news')" class="my-5">
        {{ t('news.overview') }}
      </UButton>
    </div>
  </section>
</template>
