<script setup lang="ts">
import { constants } from '@/constants'

const props = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()
onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(decodeURIComponent(location.hash))
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')
    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return
      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }
  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })
  navigate()
  setTimeout(navigate, 500)
})
useHead({
  meta: [
    {
      property: 'og:title',
      content: `${constants.websiteTitle} | ${props.frontmatter.title}`,
    },
    {
      property: 'og:url',
      content: constants.hostname + route.fullPath,
    },
    {
      property: 'og:image',
      content: constants.hostname + props.frontmatter.thumbnail,
    },
  ],
})
</script>

<template>
  <div class="container mx-auto px-4 pt-16 mt-20">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <div class="flex flex-wrap">
            <h1 class="animated pulse">
              {{ frontmatter.title }}
            </h1>
          </div>
          <div v-if="frontmatter.show_desc" class="flex flex-wrap">
            <h4>
              {{ frontmatter.desc }}
            </h4>
          </div>
          <div v-if="frontmatter.show_subtitle" class="flex flex-wrap">
            <em>
              {{ frontmatter.subtitle }}
            </em>
          </div>
          <img v-if="frontmatter.image" :src="frontmatter.image" class="rounded-md">
          <article ref="content">
            <slot />
          </article>
        </div>
      </div>
    </div>
    <next-previous-post />
  </div>
  <footer-component />
</template>
