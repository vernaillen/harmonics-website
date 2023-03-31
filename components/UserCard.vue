<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

async function logout() {
  const { error } = await auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  // The Nuxt Supabase auth *should* be doing this
  // for us, but it isn't for some reason.
  try {
    await $fetch('/api/_supabase/session', {
      method: 'POST',
      body: { event: 'SIGNED_OUT', session: null },
    })
    user.value = null
  }
  catch (e) {
    console.error(error)
  }

  await navigateTo('/login')
}

const name = computed(
  () => user.value?.user_metadata.full_name,
)
const profile = computed(
  () => user.value?.user_metadata.avatar_url,
)
</script>

<template>
  <div
    v-if="user"
    class="rounded flex items-center space-x-3 bg-white"
  >
    <img
      v-if="profile"
      class="rounded-full w-12 h-12 "
      :src="profile"
      alt="profile picture"
    >
    <div class="text-right">
      <div class="text-md">
        {{ name }}
      </div><div class="text-xs">
        {{ user.email }}
      </div>
      <button
        class="text-sm underline text-slate-500"
        @click="logout"
      >
        Log out
      </button>
    </div>
  </div>
  <div v-else>
    <NuxtLink to="/login">
      login
    </NuxtLink>
  </div>
</template>
