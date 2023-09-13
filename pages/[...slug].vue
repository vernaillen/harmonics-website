<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const page = await queryContent(route.path).findOne()

const routePath = ref('')
onMounted(() => {
  routePath.value = route.path
})

const ogImageOptions = {
  component: 'OGImageHome'
  /* component: 'OGImageContent',
  lang: locale,
  path: route.path */
}
// a. Use the Composition API
defineOgImage(ogImageOptions)

const { trigger } = usePolitePopup()
if (route.path !== '/contact' && route.path !== '/en/contact') { trigger() }
</script>

<template>
  <div>
    <NuxtLayout>
      <OgImage v-bind="ogImageOptions" />
      <main class="flex-grow">
        <HeaderImage
          :lang="locale"
          :page="page"
          class="w-full container mx-auto pb-6"
        />
        <div class="w-full container mx-auto py-4">
          <div class="prose prose-primary dark:prose-invert">
            <NextPreviousPost v-if="isNews(route.path)" :path="route.path" :lang="locale" :news-path="localePath('/news')" />
            <div class="slide-enter-content">
              <ContentDoc
                v-if="isHydrated && routePath === route.path"
                v-slot="{ doc }"
                :path="routePath"
              >
                <ContentRenderer
                  :value="doc"
                  class="mainContent pt-3"
                  :class="doc && doc.category ? 'category-' + doc.category : ''"
                />
              </ContentDoc>
              <ContentSkeleton v-else />
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
@media (min-width: 640px) {
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
