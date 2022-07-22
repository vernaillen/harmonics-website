<script setup lang="ts">
import dayjs from 'dayjs'
import blog from '@/classes/blog'
import { useLocale } from '@/stores/lang'

const { t } = useI18n()

function formatDate(d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}
</script>

<template>
  <div v-for="post in blog.getPosts()" :key="post.path" class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
    <div class="relative bg-white dark:bg-dark shadow- rounded-md shadow-light-300 rounded-md overflow-hidden mb-10">
      <div class="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3 class="animated pulse">
          <router-link
            :to="post.path"
            class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
          >
            <span v-if="useLocale().lang === 'nl'">{{ post.title_nl }}</span>
            <span v-if="useLocale().lang === 'en'">{{ post.title_en }}</span>
          </router-link>
        </h3>
        <p
          class="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
        >
          <span v-if="useLocale().lang === 'nl'">{{ post.desc_nl }}</span>
          <span v-if="useLocale().lang === 'en'">{{ post.desc_en }}</span>
          <br>
          <router-link :to="post.path">
            <button
              class="text-base font-medium text-white bg-primary mt-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-md transition duration-300 ease-in-outÒ"
            >
              {{ t('blog.readmore') }}
            </button>
          </router-link>
        </p>

        <div class="flex">
          <div
            class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
          >
            <div class="w-full">
              <p class="text-xs text-body-color">
                {{ formatDate(post.date) }}
              </p>
            </div>
          </div>
          <div class="inline-block">
            <p class="text-xs text-body-color">
              {{ t('blog.by') }} {{ post.author }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
