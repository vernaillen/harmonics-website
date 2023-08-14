<script setup lang="ts">

const { page } = useContent()
const { t } = useI18n()
const localePath = useLocalePath()

let title = t('website.title')
let ogImage = '/harmonics.png'
if (page.value && page.value.title) { title = `${page.value.title} | ${t('website.title')}` }
if (page.value && page.value.ogImage) { ogImage = t('website.hostname') + page.value.ogImage } else if (page.value && page.value.thumbnail) { ogImage = t('website.hostname') + page.value.thumbnail }

if (page.value) {
  useHead({
    title,
    meta: [
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:image',
        content: ogImage
      }
    ]
  })
} else {
  setResponseStatus(404)
}

const route = useRoute()
const { trigger } = usePolitePopup()
if (route.path !== '/contact' && route.path !== '/en/contact') { trigger() }
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
        <div class="grid grid-cols-4">
          <div class="col-span-4 md:col-span-3 px-4 md:px-6 lg:px-8 mb-10">
            <div v-if="page" class="prose m-auto">
              <div v-if="page.title && !page.hideTitle" class="flex flex-wrap">
                <h1>
                  {{ page.title }}
                </h1>
              </div>
              <MarkdownEditedDates v-if="page && !page.hideCreatedAndUpdatedDates" :post="page" />
              <div v-if="page.show_desc" class="flex flex-wrap">
                <h4>
                  {{ page.desc }}
                </h4>
              </div>
              <div v-if="page.subtitle" class="flex flex-wrap">
                <em>
                  {{ page.subtitle }}
                </em>
              </div>
              <div
                v-if="page.image && !page.imageFloatingRight"
              >
                <NuxtImg
                  loading="lazy"
                  :sizes="page.imageSizes ? page.imageSizes : ''"
                  :height="page.imageHeight ? page.imageHeight : '400'"
                  :width="page.imageWidth ? page.imageWidth : ''"
                  :src="page.image"
                  format="webp"
                  fit="cover"
                  class="rounded-md shadow-md shadow-gray-400"
                  alt="article image"
                />
              </div>
              <article>
                <ContentDoc>
                  <template #default="{ doc }">
                    <div>
                      <FloatingImage v-if="page.imageFloatingRight" :src="page.image" :width="page.imageWidth ? page.imageWidth : 600" />
                      <ContentRenderer :value="doc" />
                    </div>
                  </template>
                </ContentDoc>
              </article>
            </div>
            <div v-else class="prose m-auto">
              <article>
                <ContentDoc :path="localePath('/404')" />
              </article>
            </div>
          </div>
          <aside class="hidden md:col-span-1 md:flex md:flex-col">
            <div id="newsletter" class="sticky top-36 right-10 block md:w-1/4 px-4 sm:px-6 lg:px-8 mb-5 prose">
              <MailchimpComponent />
            </div>
          </aside>
        </div>

        <NextPreviousPost />
      </div>
    </NuxtLayout>
  </div>
</template>
