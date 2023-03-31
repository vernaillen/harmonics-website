<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
import type { Ref } from 'vue'
const props = withDefaults(defineProps<{ activeTocId: string; slug: string }>(), {})

const { t } = useI18n()

const sliderHeight = useState('sliderHeight', () => 0)
const sliderTop = useState('sliderTop', () => 0)
const container: Ref<HTMLElement | null> = ref(null)
const tocLinksH2: Ref<Array<HTMLElement>> = ref([])
const tocLinksH3: Ref<Array<HTMLElement>> = ref([])

const { data: blogPost } = await useAsyncData('blogToc', () =>
  queryContent(props.slug).findOne(),
)
const tocLinks = computed(() => blogPost.value?.body.toc.links ?? [])

function onClick(id: string) {
  scrollToElement(id)
}

watchDebounced(
  () => props.activeTocId,
  (newActiveTocId: any) => {
    const h2Link = tocLinksH2.value.find(
      (el: HTMLElement) => el.id === `toc-${newActiveTocId}`,
    )
    const h3Link = tocLinksH3.value.find(
      (el: HTMLElement) => el.id === `toc-${newActiveTocId}`,
    )

    if (!container.value)
      return

    if (h2Link) {
      sliderHeight.value = h2Link.offsetHeight
      sliderTop.value = h2Link.offsetTop - 100
    }
    else if (h3Link) {
      sliderHeight.value = h3Link.offsetHeight
      sliderTop.value = h3Link.offsetTop - 100
    }
  },
  { debounce: 200, immediate: true },
)
</script>

<template>
  <div ref="container" class="max-h-82 overflow-auto">
    <h4>{{ t('toc.title') }}</h4>
    <nav class="flex mt-4">
      <div class="relative bg-secondary w-0.5 overflow-hidden rounded">
        <div
          class="
            absolute
            left-0
            w-full
            transition-all
            duration-200
            rounded
            bg-red-500
          " :style="{ height: `${sliderHeight}px`, top: `${sliderTop}px` }"
        />
      </div>
      <ul class="ml-0 pl-4">
        <li
          v-for="{ id, text, children } in tocLinks" :id="`toc-${id}`" :key="id" ref="tocLinksH2"
          class="cursor-pointer text-sm list-none ml-0 mb-2 last:mb-0"
          :class="{ 'font-bold': id === activeTocId }" @click="onClick(id)"
        >
          {{ text }}
          <ul v-if="children" class="ml-3 my-2">
            <li
              v-for="{ id: childId, text: childText } in children" :id="`toc-${childId}`" :key="childId"
              ref="tocLinksH3" class="cursor-pointer text-xs list-none ml-0 mb-2 last:mb-0"
              :class="{ 'font-bold': childId === activeTocId }" @click.stop="onClick(childId)"
            >
              {{ childText }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
