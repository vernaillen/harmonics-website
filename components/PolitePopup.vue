<script setup lang="ts">
const { t } = useI18n()
const { setClosed, visible } = usePolitePopup()

const onClickOk = async () => {
  setClosed()
  window.open('https://harmonics.us14.list-manage.com/subscribe?u=70b20f90b742c102a6d56ec9c&id=7e4d7c55a7')
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
      left-0
      bottom-0
      md:left-5
      md:bottom-5
      p-4
      rounded-md
      shadow-xl
      bg-opacity-[97%]
      bg-gray-100
    "
  >
    <span class="prose">
      <h3 class="text-lg">{{ t('politePopup.thanks') }}
        <span class="text-primary font-bold">Harmonics</span>!
        <Icon name="openmoji:folded-hands-medium-light-skin-tone" class="hover:text-gray-500 text-[#1877F2]" size="24" />
      </h3>
      <p>{{ t('politePopup.question') }}</p>
    </span>
    <div class="flex gap-4 mt-4">
      <button class="text-base font-medium text-white bg-primary py-2 px-6 hover:bg-opacity-80 hover:shadow-signUp rounded-md" @click="onClickOk">
        {{ t('politePopup.yes') }}
      </button>
      <button class="bg-white text-base font-medium py-2 px-6 hover:bg-opacity-80 hover:shadow-signUp rounded-md" @click="onClickClose">
        {{ t('politePopup.no') }}
      </button>
    </div>
  </div>
</template>
