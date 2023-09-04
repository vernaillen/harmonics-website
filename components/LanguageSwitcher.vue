<script setup lang="ts">
const { locale } = useI18n()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

export interface Props {
  small?: boolean
}
withDefaults(defineProps<Props>(), {
  small: false
})

const items = [
  [{
    label: 'Nederlands',
    icon: 'i-circle-flags-nl',
    click: () => {
      router.push(switchLocalePath('nl'))
    }
  }, {
    label: 'English',
    icon: 'i-circle-flags-en',
    click: () => {
      router.push(switchLocalePath('en'))
    }
  }]
]
</script>

<template>
  <div class="inline-flex relative">
    <UDropdown :items="items" class="absolute -top-[4px]" :class="small ? '-right-3' : ''">
      <UButton size="xs" :label="locale.toUpperCase()">
        <template #trailing>
          <UIcon :name="'i-circle-flags-' + locale" class="opacity-80 hover:opacity-100" :class="small ? 'hidden sm:inline-flex ' : ''" />
        </template>
      </UButton>
    </UDropdown>
  </div>
</template>
