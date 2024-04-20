<script setup lang="ts">
defineOgImageComponent('OGImageMain')
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
            <ContentDoc v-slot="{ doc }">
              <ContentRenderer v-if="doc" :value="doc">
                <ContentRendererMarkdown :value="doc" />
              </ContentRenderer>
            </ContentDoc>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
