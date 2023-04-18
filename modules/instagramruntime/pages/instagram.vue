<script setup lang="ts">
import { useFetch, useHead } from '#app'
import type { WPInstagramPage } from '~/server/api/instagram'

const { data, error } = await useFetch<WPInstagramPage>('/api/instagram')
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
      innerHTML: '/* <![CDATA[ */ var sb_instagram_js_options = { "font_method": "svg", "resized_url": "https:\/\/wpanneleen.vernaillen.com\/wp-content\/uploads\/sb-instagram-feed-images\/", "placeholder": "https:\/\/wpanneleen.vernaillen.com\/wp-content\/plugins\/instagram-feed-pro\/img\/placeholder.png", "br_adjust": "1" }; var sbiTranslations = { "share": "Share" }; /* ]]> */',
      type: 'text/javascript',
    },
    {
      id: 'sbi_scripts-js',
      src: 'https://wpanneleen.vernaillen.com/wp-content/plugins/instagram-feed-pro/js/sbi-scripts.min.js?ver=6.2.3',
      type: 'text/javascript',
    },
    {
      src: '/iframeResizer.contentWindow.min.js',
      type: 'text/javascript',
    },
  ],
})
</script>

<template>
  <div>
    <div
      v-if="error"
      class="prose m-auto"
    >
      Er liep iets mis bij het ophalen van de instagram content
    </div>
    <div
      v-if="data"
      class="m-auto h-[600px]"
      v-html="data.content.rendered"
    />
  </div>
</template>

<style>
#sb_instagram .sbi_follow_btn a {
  @apply harmonicsButton
}
</style>
