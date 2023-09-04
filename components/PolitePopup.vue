<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()

function onClickOk () {
  usePolitePopup().setClosed()
  window.open(appConfig.mailchimpLink)
}

function onClickClose () {
  usePolitePopup().setClosed()
}
</script>

<template>
  <div
    v-if="usePolitePopup().visible.value"
    class="
      fixed
      z-[100001]
      left-3
      right-3
      bottom-3
      md:left-5
      md:right-3
      md:bottom-5
      lg:left-1/2
      p-5
      rounded-xl
      shadow-[0_4px_25px_2px_rgba(0,0,0,0.5)]
      backdrop-blur-md
      bg-[#EBEBEB] bg-opacity-70 dark:bg-[#404040] dark:bg-opacity-80
      animate__animated animate__slideInUp
    "
  >
    <span class="prose">
      <h2 class="text-primary-500 dark:text-white !mb-2">{{ t('politePopup.thanks') }}
        <span class="text-primary font-bold">Harmonics</span>!
        <UIcon name="i-noto-folded-hands" class="ml-2 w-5 h-5" />
      </h2>
      <p class="dark:text-gray-200">{{ t('politePopup.question') }}</p>
    </span>
    <div class="flex gap-2 mt-4">
      <UButton variant="solid" class="" @click="onClickOk">
        {{ t('politePopup.yes') }}
      </UButton>
      <UButton @click="onClickClose">
        {{ t('politePopup.no') }}
      </UButton>
    </div>
  </div>
</template>
