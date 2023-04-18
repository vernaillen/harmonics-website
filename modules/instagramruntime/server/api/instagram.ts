import { defineEventHandler } from 'h3'

export interface WPInstagramContent {
  rendered: string
}

export interface WPInstagramPage {
  id: number
  content: WPInstagramContent
}

export default defineEventHandler(async () => {
  return await $fetch<WPInstagramPage>('https://wpanneleen.vernaillen.com/wp-json/wp/v2/pages/30201')
})
