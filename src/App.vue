<script setup lang="ts">
import { useLocale } from './stores/lang'
const { t } = useI18n()

const route = useRoute()
const router = useRouter()

useHead({
  meta: [
    {
      name: 'description',
      content: t('website.description'),
    },
  ],
  noscript: [
    {
      children: t('website.noJavaScript'),
    },
  ],
})

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
</script>

<template>
  <div>
    <navbar-component />
    <main>
      <router-view />
    </main>
  </div>
  <easy-lightbox />
</template>
