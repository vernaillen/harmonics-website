<script setup lang="ts">
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

const signInWithGitHub = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: appConfig.supabaseRedirectUrl },
  })
  if (error)
    console.error(error)
}

const signInWithEmail = async () => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: emailAddress.value,
    options: {
      emailRedirectTo: appConfig.supabaseRedirectUrl,
    },
  })
  emailOptInReply.value = data

  if (error)
    emailOptInError.value = error
  else emailOptInError.value = ''
}
definePageMeta({
  documentDriven: false,
})
</script>

<template>
  <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
    <div class="flex">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <button
            class="bg-primary text-white font-bold py-1 px-3 rounded-md"
            @click="signInWithGitHub"
          >
            Log in with Github
          </button>

          <br><br><br>
          <div v-if="emailOptInReply">
            check your e-mail
          </div>
          <div v-else-if="emailOptInError">
            emailOptInError: {{ emailOptInError }}
          </div>
          <div v-else>
            <input v-model="emailAddress" class="border rounded-md p-1" placeholder="E-mail address">
            <button
              class="bg-primary text-white font-bold py-1 px-3 ml-5 rounded-md"
              @click="signInWithEmail"
            >
              Send me a Magic Link
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
