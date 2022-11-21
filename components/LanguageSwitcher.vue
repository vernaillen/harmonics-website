<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const router = useRouter()

const setLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  router.push(switchLocalePath(target.value))
}
</script>

<template>
  <form>
    <select class="bg-transparent" @change="setLanguage">
      <option value="nl" :selected="locale === 'nl'">
        NL
      </option>
      <option value="en" :selected="locale === 'en'">
        EN
      </option>
    </select>
  </form>
</template>
