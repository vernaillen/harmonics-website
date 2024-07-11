<script setup lang="ts">
const props = withDefaults(defineProps<{
  category?: 'ecstatic' | 'music' | 'sound' | 'trance' | 'primary'
}>(), {
  category: 'primary'
})
const horizontalRule = ref<HTMLElement | null>(null)
onMounted(() => {
  setTimeout(() => {
    if (horizontalRule.value) {
      horizontalRule.value.classList.add('category-' + props.category)
    }
  }, 200)
})
</script>

<template>
  <div class="w-full">
    <hr class="mx-4 mt-12 mb-10 pt-[1px]">
  </div>
</template>

<style>
.horizontal-rule {
  transform-origin: 100% 100%;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(.65, 0, .28, 1);
  background-color: #cacfbb;
}
.horizontal-rule.category-ecstatic,
.horizontal-rule.category-music,
.horizontal-rule.category-sound,
.horizontal-rule.category-trance,
.horizontal-rule.category-primary {
  transform-origin: 0% 100%;
  transform: scaleX(1)
}
.horizontal-rule.category-ecstatic {
  background-image: linear-gradient(to right, #C5D52D, #cacfbb);
}
.horizontal-rule.category-sound {
  background-image: linear-gradient(to right, #9db19f, #cacfbb);
}
.horizontal-rule.category-music {
  background-image: linear-gradient(to right, #AAA857, #cacfbb);
}
.horizontal-rule.category-trance {
  background-image: linear-gradient(to right, #004745, #cacfbb);
}
.horizontal-rule.category-primary {
  background-image: linear-gradient(to right, #7B8856, #cacfbb);
}
</style>
