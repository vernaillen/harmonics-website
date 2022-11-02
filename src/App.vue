<script setup lang="ts">
import { useLocale } from './stores/lang'
const { t } = useI18n()

useHead({
  meta: [
    { name: 'description', content: t('website.description') },
    {
      property: 'og:url',
      content: t('website.hostname'),
    },
  ],
})

const route = useRoute()
const router = useRouter()

const pathHasLang = (path: string) => {
  return path.startsWith('/nl/') || path.startsWith('/en/')
}
const pushCorrectLangPath = (path: string) => {
  if (pathHasLang(path))
    router.push(`/${useLocale().lang}${path.substring(3)}`) // replace lang in path
  else
    router.push(`/${useLocale().lang}${path}`) // prepend lang to path
}
const urlLanguage = route.path.substring(1, 3)
if (urlLanguage !== useLocale().lang) {
  if (pathHasLang(route.path))
    useLocale().setLanguage(urlLanguage) // change site language to url from path
  pushCorrectLangPath(route.path)
}

router.beforeEach((to, from, next) => {
  const langFromRoute = to.path.substring(1, 3)
  if (langFromRoute !== useLocale().lang)
    pushCorrectLangPath(to.path)
  next()
})

const showMailchimpModal = ref(false)
onMounted(() => {
  setTimeout(() => showMailchimpModal.value = true, 3000)
})
</script>

<template>
  <div>
    <navbar-component />
    <main>
      <router-view />
    </main>
  </div>
  <easy-lightbox />
  <teleport to="body">
    <mailchimp-modal :show="showMailchimpModal" @close="showMailchimpModal = false" />
  </teleport>
</template>
