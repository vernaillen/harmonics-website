<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email(),
})
const { handleSubmit } = useForm({
  validationSchema: schema,
})
const { value: email, errorMessage: emailError } = useField('email')

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
    <Spinner /> logging you in...
  </div>
  <div v-else class="prose m-auto">
    Confirm your e-mail address to access to your Harmonics reservations<br><br>
    <button
      class="bg-[#333] text-white py-1 px-2 mr-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
      @click="signInWithOAuth('github')"
    >
      <Icon name="mdi:github" size="28" />
    </button>
    <button
      class="bg-[#1877f2] text-white py-1 px-2 mr-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
      @click="signInWithOAuth('facebook')"
    >
      <Icon name="mdi:facebook" size="28" />
    </button>
    <button
      class="bg-[#ea4335] text-white py-1 px-2 mr-2 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
      @click="signInWithOAuth('google')"
    >
      <Icon
        name="ion:logo-google" size="28"
      />
    </button>
    <br>or<br>
    <div v-if="emailOptInReply">
      check your e-mail, the magic link is send to {{ emailAddress }}
    </div>
    <div v-else-if="emailOptInError">
      emailOptInError: {{ emailOptInError }}
    </div>
    <div v-else-if="magicLinkPending">
      <Spinner /> sending you the Magic Link...
    </div>
    <div v-else>
      <form method="POST" @submit.prevent="submitForm">
        <input
          v-model="email" name="email" type="email"
          class="border rounded-md py-1 px-2 mr-2 mt-1" placeholder="E-mail address"
        >
        <button
          class="bg-primary text-white py-1 px-2 mt-1 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
        >
          <Icon name="mdi:email" />
          Magic Link
        </button>
        <div v-if="emailError" class="text-primary">
          {{ emailError }}
        </div>
      </form>
    </div>
  </div>
</template>
