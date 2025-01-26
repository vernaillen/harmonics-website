<script setup lang="ts">
const props = defineProps<{
  lang: string | undefined
  path: string
}>()
const { data: posts } = await useAsyncData('posts-' + props.path, () =>
  queryCollection('news' + props.lang)
    .order('id', 'DESC')
    .all())
</script>

<template>
  <section id="news">
    <div class="container pb-10 mx-auto px-0">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <template v-for="post, index in posts" :key="index">
              <div v-if="index < 2" class="w-full">
                <NewsItem
                  :post="post" :lang="lang"
                  class="slide-enter"
                  :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
                />
              </div>
              <div v-if="index > 1 && index < 4" class="hidden lg:block w-full">
                <NewsItem
                  :post="post" :lang="lang"
                  class="slide-enter"
                  :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
                />
              </div>
            </template>
          </div>
        </div>
        <div>
          <MailchimpComponent :lang="lang" class="slide-enter" />
          <PlannedSessions :lang="lang" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="post, index in posts" :key="index">
          <div v-if="index > 1 && index < 4" class="block lg:hidden w-full">
            <NewsItem
              :post="post" :lang="lang"
              class="slide-enter"
              :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
            />
          </div>
          <div v-if="index > 4" class="w-full">
            <NewsItem
              :post="post" :lang="lang"
              class="slide-enter"
              :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
