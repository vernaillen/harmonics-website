<script setup lang="ts">
import type { WPInstagramPage } from '~/server/api/instagram'

const { data } = await useFetch<WPInstagramPage>('/api/instagram')
useHead({
  link: [
    {
      href: '/sbi-styles.min.css',
      rel: 'stylesheet',
      type: 'text/css',
    },
  ],
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.6.4.min.js',
      integrity: 'sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=',
      crossorigin: 'anonymous',
    },
    {
      id: 'sbi_scripts-js-extra',
      innerHTML: '/* <![CDATA[ */ var sb_instagram_js_options = { "font_method": "svg", "resized_url": "https:\/\/harmonics.vernaillen.com\/wp-content\/uploads\/sb-instagram-feed-images\/", "placeholder": "https:\/\/harmonics.vernaillen.com\/wp-content\/plugins\/instagram-feed-pro\/img\/placeholder.png", "br_adjust": "1" }; var sbiTranslations = { "share": "Share" }; /* ]]> */',
      type: 'text/javascript',
    },
    {
      id: 'sbi_scripts-js',
      src: 'https://harmonics.vernaillen.com/wp-content/plugins/instagram-feed-pro/js/sbi-scripts.min.js?ver=6.2.3',
      type: 'text/javascript',
    },
    {
      src: '/iframeResizer.contentWindow.min.js',
      type: 'text/javascript',
    },
  ],
})
onMounted(() => {
  if (window.parent.document) {
    const spinner = window.parent.document.getElementById('iframeLoadingSpinner')
    if (spinner)
      spinner.classList.add('animate__animated', 'animate__fadeOut')
  }
})
</script>

<template>
  <div
    v-if="data"
    class="m-auto h-[400px]"
    v-html="data.content.rendered"
  />
</template>

<style>
#sb_instagram .sbi_follow_btn a {
  @apply harmonicsButton
}
#sb_instagram  #sbi_images .sbi_inner_wrap {
  @apply rounded-md overflow-hidden relative shadow-md shadow-gray-400;
}
</style>
