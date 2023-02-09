<script setup lang="ts">
const { t } = useI18n()
const { setClosed, visible } = usePolitePopup()
const appConfig = useAppConfig()

const onClickOk = async () => {
  setClosed()
  window.open(appConfig.mailchimpLink)
}

const onClickClose = () => {
  setClosed()
}
</script>

<template>
  <div
    v-if="visible" class="
      fixed
      z-50
      left-2
      right-2
      bottom-2
      md:left-5
      md:bottom-5
      p-4
      rounded-md
      shadow-[0_4px_25px_2px_rgba(0,0,0,0.5)]
      bg-opacity-[97%]
      bg-white
    "
  >
    <span class="prose">
      <h3 class="text-lg !mb-2">{{ t('politePopup.thanks') }}
        <span class="text-primary font-bold">Harmonics</span>!
        <Icon name="openmoji:folded-hands-medium-light-skin-tone" class="ml-2" size="24" />
      </h3>
      <p>{{ t('politePopup.question') }}</p>
    </span>
    <div class="flex gap-4 mt-4">
      <button class="text-base font-medium text-white bg-primary py-2 px-4 hover:bg-opacity-80 hover:shadow-signUp rounded-md" @click="onClickOk">
        {{ t('politePopup.yes') }}
      </button>
      <button class="bg-gray-200 text-base font-medium py-2 px-4 hover:bg-opacity-80 hover:shadow-signUp rounded-md" @click="onClickClose">
        {{ t('politePopup.no') }}
      </button>
    </div>
  </div>
</template>
