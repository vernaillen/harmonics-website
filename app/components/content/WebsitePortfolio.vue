<script setup lang="ts">
const localePath = useLocalePath()

const { data: websites } = await useJsonContent(localePath('/_websiteportfolio'))
</script>

<template>
  <div class="mb-8 text-sm md:text-md">
    <UCard v-if="websites && websites.body">
      <h1 class="mt-0 text-primary-500 dark:text-primary-200">
        Website portfolio
      </h1>
      <div v-for="website, index in websites.body" :key="index">
        <div class="flex" :class="website.category ? 'category-' + website.category : ''">
          <div class="flex-none w-10 h-10 mb-3">
            <div class="h-[25px] w-[25px] rounded-full overflow-hidden">
              <NuxtLink :href="website.url" target="_blank">
                <CategoryImage
                  :category="website.category"
                  :alt="website.category"
                  class="h-[25px] w-[25px] rounded-full m-0"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="grow text-trance-400 dark:text-primary-100">
            <NuxtLink :href="website.url" target="_blank">
              {{ website.title }}
            </NuxtLink>
            <div class="mt-2 mb-4">
              <div v-if="website.description" class="mt-2">
                {{ website.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
