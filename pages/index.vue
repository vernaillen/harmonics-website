<script setup lang="ts">
defineOgImage({
  component: 'OGImageHome'
})
</script>

<template>
  <main class="flex-grow">
    <div class="w-full container mx-auto py-4">
      <div class="prose prose-primary dark:prose-invert text-center">
        <ContentDoc />
      </div>
    </div>
  </main>
</template>
