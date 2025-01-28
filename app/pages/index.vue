<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('pages').path(route.path).first()
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
