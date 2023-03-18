<script setup lang="ts">
import type { LegalPolicy } from '~~/types'
const { data, error } = await useFetch<LegalPolicy>('/api/iubendacookiepolicy')
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
        <div class="flex flex-wrap">
          <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
            <div v-if="error" class="prose m-auto">
              Er liep iets mis bij het ophalen van de cookie policy
            </div>
            <div v-if="data" class="prose m-auto" v-html="data.content" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
