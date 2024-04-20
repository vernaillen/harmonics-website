<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const { page } = useContent()
const pageContent = ref<ParsedContent | null>(null)

if (page.value) {
  pageContent.value = page.value
} else {
  pageContent.value = await queryContent(localePath('/_404')).findOne()
  const event = useRequestEvent()
  setResponseStatus(event, 404)
}

defineOgImageComponent('OGImageMain')
useSeoMeta({
  title: pageContent.value?.title,
  ogTitle: pageContent.value?.title,
  description: pageContent.value?.description,
  ogDescription: pageContent.value?.description
})

const { triggerPolitePopup } = usePolitePopup()
if (route.path !== '/contact' && route.path !== '/en/contact') { triggerPolitePopup() }
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow">
        <HeaderImage
          :lang="locale"
          :page="pageContent"
          class="w-full container mx-auto pb-6"
        />
        <div class="w-full container mx-auto py-4">
          <div class="prose prose-primary dark:prose-invert">
            <NextPreviousPost v-if="isNews(route.path)" :path="route.path" :lang="locale" :news-path="localePath('/news')" />
            <div class="slide-enter-content">
              <ContentDoc>
                <template #default="{ doc }">
                  <ContentRenderer
                    v-if="isHydrated"
                    :value="doc"
                    class="mainContent pt-3"
                    :class="doc && doc.category ? 'category-' + doc.category : ''"
                  />
                  <ContentSkeleton v-else />
                </template>
                <template #not-found>
                  <h2>{{ page?.title }}</h2>
                  <ContentRenderer v-if="pageContent" :value="pageContent">
                    <ContentRendererMarkdown :value="pageContent" />
                  </ContentRenderer>
                  <UButton :to="localePath('/')">
                    {{ $t('nav.backToHome') }}
                  </UButton>
                </template>
              </ContentDoc>
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
