<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
const { t } = useI18n()

const schema = yup.object({
  firstname: yup.string().required(),
  email: yup.string().required().email(),
})
const { handleSubmit } = useForm({
  validationSchema: schema,
})
const { value: email, errorMessage: emailError } = useField('email')
const { value: firstname, errorMessage: firstnameError } = useField('firstname')

const { query } = useRoute()
const supabase = useSupabaseClient()
const supabaseAuthClient = useSupabaseAuthClient()
const user = useSupabaseUser()
const appConfig = useAppConfig()

const isPostAuthRedirect = ref(false)
if (query && query.refresh && query.refresh === 'true')
  isPostAuthRedirect.value = true

const redirectTo = ref(query.redirectTo)
if (!redirectTo.value || redirectTo.value === '')
  redirectTo.value = '/tickets'

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})
const emailOptInReply = ref()
const emailOptInError = ref()
const emailAddress = ref('')
const magicLinkPending = ref(false)

const signInWithOAuth = async (provider: 'github' | 'google' | 'facebook') => {
  const { error } = await supabaseAuthClient.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${window.location.origin}${redirectTo.value}/authenticating` },
  })

  if (error)
    console.error(error)
}

const signInWithEmail = async (email: string) => {
  magicLinkPending.value = true
  emailAddress.value = email
  notifyAdminAboutSignIn(appConfig.sendGridEmailFrom, `email address used for magic link: ${email}`)
  if (email) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${redirectTo.value}/authenticating` },
    })
    emailOptInReply.value = data

    if (error)
      emailOptInError.value = error
    else emailOptInError.value = ''
  }
}
const submitForm = handleSubmit((values) => {
  signInWithEmail(values.email)
})
definePageMeta({
  layout: 'login',
  documentDriven: false,
})
</script>

<template>
  <div v-if="isPostAuthRedirect" class="prose m-auto">
    <Spinner /> {{ t('login.loggingyouin') }}
  </div>
  <div v-else class="prose m-auto">
    <p v-html="t('login.intro')" />
    <div v-if="emailOptInReply" class="ml-0 md:!ml-10">
      {{ t('login.youvegotmail') }}
    </div>
    <div v-else-if="emailOptInError" class="ml-0 md:!ml-10">
      emailOptInError: {{ emailOptInError }}
    </div>
    <div v-else-if="magicLinkPending" class="ml-0 md:!ml-10">
      <Spinner /> {{ t('login.sendingmagiclink') }}
    </div>
    <div v-else class="ml-0 sm:ml-10 w-full sm:w-[275px]">
      <form method="POST" @submit.prevent="submitForm">
        <input
          v-model="firstname" name="firstname" type="firstname"
          class="w-full border rounded-md py-1 px-2 mr-2 mt-1" :placeholder="t('login.firstname')"
        ><br>
        <input
          v-model="email" name="email" type="email"
          class="w-full border rounded-md py-1 px-2 mr-2 mt-1" :placeholder="t('login.email')"
        ><br>
        <LoginButton
          icon="mdi:email" :text="t('login.magiclink')" class="bg-primary"
        />
        <div v-if="firstnameError" class="text-primary">
          {{ firstnameError }}
        </div>
        <div v-if="emailError" class="text-primary">
          {{ emailError }}
        </div>
      </form>
    </div>
    <p class="!mt-12">
      {{ t('login.social') }}:
    </p>
    <div class="ml-0 sm:ml-10 w-full sm:w-[275px]">
      <LoginButton
        icon="mdi:facebook" :text="t('login.facebook')" class="bg-[#1877f2]"
        @click="signInWithOAuth('facebook')"
      />
      <LoginButton
        icon="ion:logo-google" :text="t('login.google')" class="bg-[#ea4335]"
        @click="signInWithOAuth('google')"
      />
      <!--
      <LoginButton
        icon="mdi:github" :text="t('login.github')" class="bg-[#333]"
        @click="signInWithOAuth('github')"
      /> -->
    </div>
  </div>
</template>
