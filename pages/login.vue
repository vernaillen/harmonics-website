<script setup lang="ts">
const { query } = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})

const login = async () => {
  const redirectTo = `${window.location.origin}/admin`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  })

  if (error)
    console.error(error)
}
</script>

<template>
  <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
    <div class="flex">
      <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <div class="prose m-auto">
          <button
            class="bg-primary text-white font-bold py-1 px-3 rounded-md"
            @click="login"
          >
            Log in with Github
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
