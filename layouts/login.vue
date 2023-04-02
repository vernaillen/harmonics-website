<script setup lang="ts">
import { useMobileNav } from '@/stores/mobileNav'
const mobileNav = useMobileNav()
const { t } = useI18n()
</script>

<template>
  <div v-if="!mobileNav.visible" class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <div class="flex-col">
        <div class="container mx-auto px-4 pt-[80px] mt-[30px] mb-10 sm:mt-[68px]">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/4 px-4 sm:px-6 lg:px-8 mb-5 prose">
              <h1>{{ t('login.reservations') }}</h1>
            </div>
            <div class="w-full lg:w-3/4 mb-5 px-4 sm:px-6 lg:px-8 prose">
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
