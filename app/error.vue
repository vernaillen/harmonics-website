<script setup lang="ts">
const { isMobileNavOpen } = useMobileNav()
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('pages' + locale.value)
    .path(localePath('/_404'))
    .first()
)
setResponseStatus(useRequestEvent(), 404)

function scrollToTop() {
  scrollToElement('pageTop')
}
</script>

<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div class="bg-white dark:bg-dark">
    <HeaderComponent />
    <div class="pt-[76px] min-h-screen">
      <NuxtLayout>
        <main class="flex-grow">
          <HeaderImage
            :lang="locale"
            :page="page"
            class="w-full container mx-auto pb-6"
          />
          <div class="w-full container mx-auto py-4">
            <div class="prose prose-primary dark:prose-invert">
              <div class="slide-enter-content">
                <h2>{{ page?.title }}</h2>
                <UButton :to="localePath('/')">
                  {{ $t('nav.backToHome') }}
                </UButton>
              </div>
            </div>
          </div>
        </main>
      </NuxtLayout>
    </div>
    <FooterComponent v-show="!isMobileNavOpen && usePageHooks().isPageLoading" />
    <button
      class="back-to-top hidden items-center justify-center bg-primary-500 text-white w-8 h-8
        rounded-xl hover:rounded-2xl transform transition-all duration-300
        fixed bottom-8 right-6 left-auto z-[9999]
        hover:shadow-signUp hover:bg-opacity-80 shadow-md "
      @click="scrollToTop()"
    >
      <span class="w-3 h-3 border-t border-l border-white transform rotate-45 mt-[6px]" />
    </button>
  </div>
</template>
