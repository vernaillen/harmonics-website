<script setup lang="ts">
import { usePolitePopupStore } from '~/stores/politePopup'

const { t } = useI18n()
const { setClosed } = usePolitePopup()
const appConfig = useAppConfig()
const politePopup = usePolitePopupStore()

async function onClickOk() {
  setClosed()
  window.open(appConfig.mailchimpLink.href)
}

function onClickClose() {
  setClosed()
}
</script>

<template>
  <div
    v-if="politePopup.visible" class="
      fixed
      z-[9999]
      left-3
      right-3
      bottom-3
      md:left-5
      md:right-3
      md:bottom-5
      lg:left-1/2
      p-5
      rounded-md
      shadow-[0_4px_25px_2px_rgba(0,0,0,0.5)]
      bg-opacity-[97%]
      bg-white
      animate__animated animate__slideInUp
    "
  >
    <span class="prose">
      <h3 class="text-lg !mb-2">{{ t('politePopup.thanks') }}
        <span class="text-primary font-bold">harmonics</span>!
        <Icon name="openmoji:folded-hands-medium-light-skin-tone" class="ml-2" size="24" />
      </h3>
      <p>{{ t('politePopup.question') }}</p>
    </span>
    <div class="flex gap-4 mt-4">
      <button class="harmonicsButton" @click="onClickOk">
        {{ t('politePopup.yes') }}
      </button>
      <button class="harmonicsButtonGray" @click="onClickClose">
        {{ t('politePopup.no') }}
      </button>
    </div>
  </div>
</template>
