<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { LegalPolicy } from '@/types'

const { data, error } = await useFetch<LegalPolicy>('/api/iubendacookiepolicy')
</script>

<template>
  <div>
    <div v-if="error" class="prose m-auto">
      Er liep iets mis bij het ophalen van de cookie policy
    </div>
    <div v-if="data" class="prose m-auto" v-html="data.content" />
  </div>
</template>
