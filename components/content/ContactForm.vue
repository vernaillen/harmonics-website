<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios'

const localePath = useLocalePath()

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required().min(20),
})
const formError = ref()

/* yup.setLocale({
  string: {
    min: ({ min }) => ({ key: 'contact.field_too_short', values: { min } }),
    max: ({ max }) => ({ key: 'contact.field_too_big', values: { max } }),
    required: () => ({ key: 'contact.required' }),
  },
}) */

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const router = useRouter()
const submitForm = handleSubmit((values) => {
  axios({
    method: 'POST',
    url: 'https://formbold.com/s/3qV8o',
    data: values,
  })
    .then(() => {
      router.push(localePath('/thanks'))
    })
    .catch((err) => {
      formError.value = `error submitting form: ${err}`
    })
})
const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')
const { t } = useI18n()
</script>

<template>
  <div class="bg-primary bg-opacity-[3%] dark:bg-dark rounded-md p-4 mb-12 lg:mb-5 md:p-6 lg:p-8">
    <form method="POST" @submit.prevent="submitForm">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full lg:w-1/2 px-4">
          <div class="mb-8">
            <label for="name" class="block text-sm font-medium text-dark dark:text-white mb-3">
              {{ t('contact.name') }}
            </label>
            <input
              v-model="name" name="name" type="text"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
            >
            <span v-if="nameError" class="text-primary">
              {{ nameError }}
            </span>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="mb-8">
            <label for="email" class="block text-sm font-medium text-dark dark:text-white mb-3">
              {{ t('contact.email') }}
            </label>
            <input
              v-model="email" name="email" type="email"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary"
            >
            <span v-if="emailError" class="text-primary">
              {{ emailError }}
            </span>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="mb-5">
            <label for="message" class="block text-sm font-medium text-dark dark:text-white mb-3">
              {{ t('contact.message') }}
            </label>
            <textarea
              v-model="message" name="message" rows="5"
              class="w-full border border-transparent dark:bg-black rounded-md shadow-one dark:shadow-signUp py-3 px-6 text-body-color text-base placeholder-body-color outline-none focus-visible:shadow-none focus:border-primary resize-none"
            />

            <span v-if="messageError" class="text-primary">
              {{ messageError }}
            </span>
          </div>
        </div><div v-if="formError" class="text-[red] font-bold px-4 pb-4">
          {{ formError }}
        </div>
        <div class="w-full px-4">
          <button
            class="text-base font-medium text-white bg-primary py-3 px-6 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
          >
            {{ t('contact.submit') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
