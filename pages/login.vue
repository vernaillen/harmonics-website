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
const user = useSupabaseUser()
const appConfig = useAppConfig()

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

const signInWithGitHub = async () => {
  notifyAdminAboutSignIn(appConfig.sendGridEmailFrom, 'method used: GitHub')
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: `${window.location.origin}/admin` },
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
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
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
  documentDriven: false,
})
</script>

<template>
  <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
    <div class="flex">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          Log in with:<br><br>
          <button
            class="bg-primary text-white py-1 px-4 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
            @click="signInWithGitHub"
          >
            <Icon name="mdi:github" /> Github
          </button>
          <br><br>
          <div v-if="emailOptInReply">
            check your e-mail, the magic link is send to {{ emailAddress }}
          </div>
          <div v-else-if="emailOptInError">
            emailOptInError: {{ emailOptInError }}
          </div>
          <div v-else-if="magicLinkPending">
            <Icon
              name="uil:spinner-alt"
              class="animate-spin"
              size="24"
            />
          </div>
          <div v-else>
            <form method="POST" @submit.prevent="submitForm">
              <input
                v-model="email" name="email" type="email"
                class="border rounded-md p-1" placeholder="E-mail address"
              >
              <button
                class="bg-primary text-white py-1 px-4 ml-1 hover:bg-opacity-80 hover:shadow-signUp rounded-md"
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
      </div>
    </div>
  </div>
</template>
