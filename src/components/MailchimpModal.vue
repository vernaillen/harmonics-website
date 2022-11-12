<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
defineProps({
  show: Boolean,
})
const emit = defineEmits(['close'])

const modal = ref(null)
onClickOutside(modal, event => emit('close'))
</script>

<template>
  <div
    v-if="show"
    ref="modal-backdrop"
    class="fixed z-100 inset-0 overflow-y-auto bg-black bg-opacity-50 animated fadeIn"
  >
    <div
      ref="modal"
      class="modal flex items-start pt-24 justify-center absolute bottom-5 md:right-5"
    >
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl pt-4 px-4 w-[90%] md:w-[500px] animated slideInRight"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <MailchimpComponent />

        <button class="absolute top-4 right-4" @click="$emit('close')">
          <FontAwesomeIcon :icon="['far', 'circle-xmark']" class="hover:text-primary text-gray-400 h-7" />
        </button>
      </div>
    </div>
  </div>
</template>
