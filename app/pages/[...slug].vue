<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const collection = route.path.includes('news') ? 'news' + locale.value : 'pages'
const { data: page } = await useAsyncData(route.path, () => queryCollection(collection).path(route.path).first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

// defineOgImageComponent('OGImageMain')
useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})

const { triggerPolitePopup } = usePolitePopup()
if (route.path !== '/contact' && route.path !== '/en/contact') triggerPolitePopup()
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow">
        <HeaderImage
          :lang="locale"
          :page="page"
          class="w-full container mx-auto pb-6"
        />
        <div class="w-full container mx-auto py-4">
          <div class="prose prose-primary dark:prose-invert">
            <NextPreviousPost
              v-if="isNews(route.path)" :path="route.path"
              :lang="locale"
              :news-path="localePath('/news')"
            />
            <div class="slide-enter-content">
              <ContentRenderer
                v-if="page && isHydrated"
                :value="page"
                class="mainContent pt-3"
                :class="page && page.category ? 'category-' + page.category : ''"
              />
              <ContentSkeleton v-if="page && !isHydrated" />
              <template v-if="!page && isHydrated">
                <h2>{{ page?.title }}</h2>
                <UButton :to="localePath('/')">
                  {{ $t('nav.backToHome') }}
                </UButton>
              </template>
            </div>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
.prose .col-left {
  margin-bottom: 50px;
}
.prose .mainContent > div.col-left > :first-child,
.prose .mainContent > div.col-right > :first-child,
.prose .iub_content > :first-child,
.prose .iubenda_legal_document > :first-child {
  margin-top: 0;
}
@media (min-width: 540px) {
  .prose .col-left,
  .prose .col-right {
    width: 50%;
    float: left;
    margin-bottom: 40px;
  }
  .prose .col-left {
    padding-right: 15px;
  }
  .prose .col-right {
    padding-left: 15px;
  }
  .prose .col-clear {
    clear: left;
  }
}
</style>
