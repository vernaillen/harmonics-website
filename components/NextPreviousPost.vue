<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const props = defineProps<{
  lang: string | undefined
  path: string
  newsPath: string
}>()
const [prev, next] = await queryContent(props.newsPath)
  .sort({ _file: 1 })
  .where({ isNews: true, language: props.lang })
  .findSurround(props.path)
</script>

<template>
  <div v-if="prev || next" class="container mx-auto p-0 mb-6">
    <div class="grid grid-cols-5 md:grid-cols-3">
      <div>
        <UButton
          v-if="prev"
          :to="prev._path"
          :aria-label="`${t('news.previous', 1, { locale: lang })}: ${prev.title}`"
          class="min-h-[32px] ml-0"
        >
          <template #leading>
            <span class="iconHoverEffect">
              <UIcon name="i-heroicons-chevron-left" class="icon moveleft duration-500 transform transition-all" />
              <UIcon name="i-heroicons-arrow-left-20-solid" class="icon--hover duration-500 transform transition-all" />
            </span>
          </template>
          <span class="hidden lg:inline-block">{{ prev.title }}</span>
        </UButton>
      </div>
      <div class="text-center col-span-3 md:col-span-1">
        <UButton
          :aria-label="t('news.backtooverview', 1, { locale: lang })"
          :to="localePath('/news')"
        >
          {{ t('news.title', 1, { locale: lang }) }}
          <template #trailing>
            <span class="iconHoverEffect">
              <UIcon name="i-heroicons-chevron-up" class="icon moveup duration-500 transform transition-all" />
              <UIcon name="i-heroicons-arrow-up-20-solid" class="icon--hover duration-500 transform transition-all" />
            </span>
          </template>
        </UButton>
      </div>
      <div
        class="text-end"
      >
        <UButton
          v-if="next"
          :to="next._path"
          :aria-label="`${t('news.next', 1, { locale: lang })}: ${next.title}`"
          class="min-h-[32px] mr-0"
        >
          <span class="hidden lg:inline-block">{{ next.title }}</span>
          <template #trailing>
            <span class="iconHoverEffect">
              <UIcon name="i-heroicons-chevron-right" class="icon moveright duration-500 transform transition-all" />
              <UIcon name="i-heroicons-arrow-right-20-solid" class="icon--hover duration-500 transform transition-all" />
            </span>
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>
