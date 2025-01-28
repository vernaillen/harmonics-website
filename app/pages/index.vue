<script setup lang="ts">
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: page } = await useAsyncData('page-' + slug.value, () => {
  const content = queryCollection('pages').path(slug.value).first()
  console.log(content)
  return content
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// defineOgImageComponent('OGImageMain')
definePageMeta({
  layout: 'home'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow">
        <div class="w-full container mx-auto py-4">
          <div class="prose prose-primary dark:prose-invert text-center">
            <ContentRenderer v-if="page" :value="page" />
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
