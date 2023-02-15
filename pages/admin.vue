<script setup lang="ts">
const user = useSupabaseUser()
definePageMeta({
  middleware: ['auth'],
  documentDriven: false,
})
</script>

<template>
  <div class="flex-col">
    <div class="container mx-auto px-4 pt-[80px] mt-[30px] sm:mt-[68px]">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/2 mb-5 px-4 sm:px-6 lg:px-8 prose">
          <h1 v-if="user?.user_metadata.name">
            Welkom {{ user?.user_metadata.name }}
          </h1>
          <h1 v-else>
            Welkom {{ user?.email }}
          </h1>
          <br>
          <TicketsComponent />
        </div>
        <div id="newsletter" class="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 mb-5 prose">
          <UserCard />
        </div>
      </div>
    </div>
  </div>
</template>
