<script setup lang="ts">
const localePath = useLocalePath()
const { locale, t } = useI18n()

const isCookieModalOpen = ref(false)
const { isConsentGiven } = useCookieControl()
onMounted(() => {
  if (!isConsentGiven.value) {
    isCookieModalOpen.value = true
  }
})
// close modal when consent is given
watch(
  () => isConsentGiven.value,
  (current) => {
    isCookieModalOpen.value = !current
  },
  { deep: true }
)
</script>

<template>
  <ClientOnly>
    <CookieControl :locale="locale">
      <template #bar>
        <div class="prose text-left w-full grid sm:grid-cols-5 gap-1 mr-2">
          <div>
            <NuxtImg src="/images/lovecookie.png" width="80" height="80" class="m-0" />
          </div>
          <div class="col-span-4">
            <h1 class="text-primary-500 dark:text-primary-200 text-2xl">
              {{ t('cookies.bannerTitle') }}
            </h1>
            <p class="dark:text-gray-200">
              {{ t('cookies.bannerDesc1') }}<br>
              {{ t('cookies.bannerDesc2') }}
              <NuxtLink :to="localePath('/cookiepolicy')" class="text-primary-500 dark:text-primary-200">
                {{ t('footer.cookiepolicy') }}
              </NuxtLink>.
            </p>
          </div>
        </div>
      </template>
      <template #modal>
        <div class="prose">
          <h1 class="text-primary text-2xl">
            {{ t('cookies.settings') }}
          </h1>
          <p class="text-gray-200">
            {{ t('cookies.bannerDesc1') }}<br>
            {{ t('cookies.bannerDesc2') }}
            <NuxtLink :to="localePath('/cookiepolicy')" class="text-primary-500 dark:text-primary-200">
              {{ t('footer.cookiepolicy') }}
            </NuxtLink>
          </p>
        </div>
      </template>
      <template #cookie="{ config }">
        <span v-for="c in config" :key="c.id" v-text="c.cookies" />
      </template>
    </CookieControl>
  </ClientOnly>
</template>

<style>
.cookieControl__BarButtons button,
.cookieControl__ModalButtons button,
.cookieControl__ModalContentInner button {
    @apply mr-2 mb-2 no-underline border-b-0 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 hover:rounded-2xl transition-all duration-300 font-medium rounded-xl text-sm gap-x-2.5 px-3.5 py-2.5 text-white hover:text-white dark:text-primary-400 bg-primary-400 hover:bg-primary-500 dark:bg-primary-950 dark:hover:bg-primary-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center;
}
.cookieControl__Modal {
    @apply bg-primary-50 bg-opacity-60 dark:bg-[#000000] dark:bg-opacity-70 backdrop-blur-md;
}
.cookieControl__ModalContent {
    @apply overflow-hidden rounded-md hover:rounded-xl bg-[#EBEBEB] bg-opacity-80 dark:bg-[#404040] dark:bg-opacity-70 backdrop-blur-md;
}
.cookieControl__Bar {
    @apply container mb-0 sm:mb-5 rounded-xl bg-[#EBEBEB] bg-opacity-70 dark:bg-[#404040] dark:bg-opacity-80 backdrop-blur-md shadow-md ring-primary-200 dark:ring-primary-700;
}
section.cookieControl {
    @apply inline-block;
}
.cookieControl__ControlButton {
    @apply -top-2 -left-2 right-0 relative inline-block shadow-sm hover:text-black dark:hover:text-primary-500;
}
.cookieControl__ControlButton svg {
    @apply !w-4 !h-4 min-w-0 min-h-0;
}
@media screen and (min-width:769px) and (max-width:1000px) {
  .cookieControl__BarButtons {
      max-width: 400px;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
      width: 50%;
  }
  .cookieControl__BarButtons :first-child {
      margin-left: 10px;
  }
}
</style>
