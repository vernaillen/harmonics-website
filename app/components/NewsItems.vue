<script setup lang="ts">
const props = defineProps<{
  lang: string | undefined
  path: string
}>()
const { data: posts } = await useAsyncData('posts-' + props.path, () =>
  queryContent(props.path)
    .where({ isNews: true, language: props.lang })
    .sort({ _file: -1 })
    .find())
</script>

<template>
  <section id="news">
    <div class="container pb-10 mx-auto px-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="grid grid-cols-1 gap-8">
          <template v-for="post, index in posts" :key="index">
            <div v-if="index < 1" class="w-full">
              <NewsItem
                :post="post"
                :bigger="true"
                :lang="lang"
                class="slide-enter"
                :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
              />
            </div>
          </template>
        </div>
        <div>
          <MailchimpComponent :lang="lang" class="slide-enter" />
          <PlannedSessions :lang="lang" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="post, index in posts" :key="index">
          <div v-if="index >= 1" class="w-full">
            <NewsItem
              :post="post"
              :lang="lang"
              class="slide-enter"
              :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
