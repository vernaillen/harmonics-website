<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <div class="container mx-auto px-4 pt-[80px] mt-[68px] animated fadeIn">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <div class="flex flex-wrap">
            <h1 class="animated pulse">
              {{ page.title }}
            </h1>
          </div>
          <div v-if="page.show_desc" class="flex flex-wrap">
            <h4>
              {{ page.desc }}
            </h4>
          </div>
          <div v-if="page.show_subtitle" class="flex flex-wrap">
            <em>
              {{ page.subtitle }}
            </em>
          </div>
          <img v-if="page.image" :src="page.image" class="rounded-md" alt="article image">
          <article ref="content">
            <ContentDoc />
          </article>
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
</template>
