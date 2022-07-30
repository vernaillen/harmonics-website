<script setup lang="ts">
import { useLocale } from '@/stores/lang'
const route = useRoute()
const router = useRouter()

const setLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  useLocale().setLanguage(target.value)
  router.push(`/${target.value}/${route.path.substring(4)}`)
}
</script>

<template>
  <form>
    <select @change="setLanguage">
      <option value="nl" :selected="useLocale().lang === 'nl'">
        NL
      </option>
      <option value="en" :selected="useLocale().lang === 'en'">
        EN
      </option>
    </select>
  </form>
</template>
