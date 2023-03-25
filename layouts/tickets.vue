<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <div class="flex-col">
        <div class="container mx-auto px-4 pt-[80px] mt-[30px] mb-10 sm:mt-[68px]">
          <div class="flex flex-wrap">
            <div v-if="!user" class="w-full prose m-auto">
              <Spinner />
            </div>
            <div v-if="user" class="w-full lg:w-1/4 px-4 sm:px-6 lg:px-8 mb-5 prose">
              <UserCard />

              <div class="my-10">
                <NuxtLink to="/tickets">
                  reserveer je ticket
                </NuxtLink>
                <br>
                <NuxtLink to="/tickets/test">
                  reservaties
                </NuxtLink>
                <br>
                <NuxtLink to="/tickets/todo">
                  to do
                </NuxtLink>
              </div>
            </div>
            <div v-if="user" class="w-full lg:w-3/4 mb-5 px-4 sm:px-6 lg:px-8 prose">
              <h1 v-if="user?.user_metadata.name">
                Welkom {{ user?.user_metadata.name }}
              </h1>
              <h1 v-else>
                Welkom {{ user?.email }}
              </h1>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer-component />
    <easy-lightbox />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
    opacity: 60%;
    filter: blur(0.1rem);
}
</style>
