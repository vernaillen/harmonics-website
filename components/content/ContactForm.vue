<script setup lang="ts">
import { object, string } from 'yup'

const { t } = useI18n()

const schema = object({
  name: string().min(5, t('contact.minchars', { min: 5 })).required(t('contact.required')),
  email: string().email(t('contact.invalidEmail')).required(t('contact.required')),
  message: string().min(15, t('contact.minchars', { min: 15 })).required(t('contact.required'))
})
const state = ref({
  name: undefined,
  email: undefined,
  message: undefined,
  subjectForWouter: t('contact.subjectForWouter'),
  subjectForSender: t('contact.subjectForSender'),
  bodyForSender: t('contact.bodyForSender')
})

const form = ref()
const formError = ref()
const isBeingSubmitted = ref(false)
const isSubmitted = ref(false)

async function validateForm() {
  try {
    return await form.value!.validate()
  }
  catch (e) {
    // do nothing
  }
}
watch(() => state.value.message, () => validateForm())
async function submitForm() {
  try {
    await form.value!.validate()

    isBeingSubmitted.value = true
    const { data, error } = await useFetch('/api/sendmail', {
      method: 'POST',
      body: state.value
    })
    if (data.value) {
      isSubmitted.value = true
      scrollToElement('#thankyou')
    }
    if (error.value) {
      formError.value = t('contact.error') + error.value
    }
  }
  catch (e) {
    // do nothing
  }
}
function resetForm() {
  isBeingSubmitted.value = false
  isSubmitted.value = false
  state.value = {
    name: undefined,
    email: undefined,
    message: undefined
  }
}
const formGroupClass = 'pb-8'
const formGroupUI = { label: { base: 'block font-normal text-gray-500 dark:text-gray-200' }, error: 'mt-1 px-1 absolute text-sm text-red-500 dark:text-red-400' }
const inputClass = 'focus:rounded-xl'
const errorClass = 'text-[red] dark:text-white text-sm p-1 absolute'
</script>

<template>
  <UForm
    v-if="!isBeingSubmitted"
    ref="form"
    :schema="schema"
    :state="state"
    method="POST"
    @submit="submitForm"
  >
    <UFormGroup
      name="name" :label="t('contact.name')"
      :class="formGroupClass"
      :ui="formGroupUI"
    >
      <UInput v-model="state.name" :class="inputClass" />
    </UFormGroup>

    <UFormGroup
      name="email" :label="t('contact.email')"
      :class="formGroupClass"
      :ui="formGroupUI"
    >
      <UInput v-model="state.email" type="email" :class="inputClass" />
    </UFormGroup>

    <UFormGroup
      name="message" :label="t('contact.message')"
      :class="formGroupClass"
      :ui="formGroupUI"
    >
      <UTextarea
        v-model="state.message" size="xl"
        :rows="8"
        :class="inputClass"
      />
    </UFormGroup>
    <div>
      <UButton icon="i-mdi-send" type="submit">
        {{ t('contact.submit') }}
      </UButton>
    </div>
  </UForm>
  <div id="thankyou" class="py-10">
    <div v-if="formError" :class="errorClass" class="px-4 mb-10">
      {{ formError }}
    </div>
    <div v-if="isBeingSubmitted && !isSubmitted && !formError">
      <UIcon
        size="xs"
        aria-label="Loading Color Mode..."
        name="i-ph-spinner"
        class="!my-0 inline-flex animate-spin rounded-full"
      /> {{ t('contact.sending') }}
    </div>
    <div v-if="isBeingSubmitted && isSubmitted">
      <UIcon name="i-noto-folded-hands" class="ml-2 w-5 h-5" /> {{ t('contact.thankyou') }}<br><br>
    </div>
    <UButton
      v-if="isBeingSubmitted" icon="i-heroicons-arrow-left-20-solid"
      class="mt-10"
      @click="resetForm"
    >
      {{ t('nav.back') }}
    </UButton>
  </div>
</template>
