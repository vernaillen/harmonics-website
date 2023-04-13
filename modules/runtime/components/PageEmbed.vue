<script setup lang="ts">
import { useFetch, useNuxtApp } from '#app'

const props = defineProps({
  type: { type: String, default: 'policy' },
  loadingText: { type: String, default: 'Loading content...' },
  errorText: { type: String, default: 'Error fetching content' },
})

const nuxtApp = useNuxtApp()

const apiUrl
  = props.type === 'cookie'
    ? nuxtApp.$iubenda.cookiePolicyApiUrl
    : nuxtApp.$iubenda.privacyPolicyApiUrl

const { data, pending, error } = await useFetch(apiUrl)
</script>

<template>
  <div>
    <div v-if="pending">
      {{ loadingText }}
    </div>
    <div
      v-else-if="error"
      v-bind="error"
    />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div
      v-else
      v-html="data.content"
    />
  </div>
</template>
