<script setup lang="ts">
import { UpcomingSession } from 'types'

const { locale, t } = useI18n()
const localePath = useLocalePath()

export interface Props {
  category?: string
}
const props = withDefaults(defineProps<Props>(), {
  category: 'all'
})
const categoryName = computed(() => {
  if (props.category === 'all') { return '' } else {
    const langKey = 'category.' + props.category
    return t(langKey)
  }
})
const { data: sessions } = await useJsonContent(localePath('/_upcomingsessions'))
const filteredSessions = computed(() => {
  if (sessions && sessions.value && sessions.value.body) {
    return sessions.value.body.filter((session: UpcomingSession) => {
      return session.category === props.category || props.category === 'all'
    })
  }
})
</script>

<template>
  <div v-if="filteredSessions.length > 0" class="mb-8 text-sm md:text-md">
    <UCard v-if="sessions && sessions.body">
      <h1 class="mt-0 text-primary-500 dark:text-primary-200">
        {{ t('sessions.planned', { category: categoryName }) }}
      </h1>
      <div v-for="session, index in filteredSessions" :key="index">
        <div class="flex" :class="session.category ? 'category-' + session.category : ''">
          <div class="flex-none w-10 h-10 mb-3">
            <div class="h-[25px] w-[25px] rounded-full overflow-hidden">
              <NuxtLink :to="session.url" :aria-label="sessions.title">
                <CategoryImage
                  :category="session.category"
                  :alt="session.category"
                  class="h-[25px] w-[25px] rounded-full m-0"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="grow text-trance-400 dark:text-primary-100">
            <NuxtLink :to="session.url" :aria-label="sessions.title">
              {{ session.title }}
            </NuxtLink>
            <div class="mt-2 text-xs">
              <UIcon name="i-mdi-calendar" variant="ghost" class="opacity-70 h-3 w-3 mr-1 -mb-[2px]" />
              <NuxtTime
                :datetime="session.date"
                :locale="locale"
                day="numeric"
                month="long"
                hour="numeric"
                minute="numeric"
              />
            </div>
            <div class="mt-2 mb-4">
              <div v-if="session.description" class="mt-2" v-html="session.description" />
            </div>
          </div>
        </div>
      </div>
      <p v-if="categoryName" class="text-xs">
        {{ t('sessions.singleCategory', { category: categoryName }) }} <br>
        {{ t('sessions.allCats') }}
        <NuxtLink :to="localePath('/news')" :aria-label="t('sessions.newsPage')">
          {{ t('sessions.newsPage') }}
        </NuxtLink>
      </p>
    </UCard>
  </div>
</template>
