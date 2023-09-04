import type { LegalPolicy } from '@/types'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  return await $fetch<LegalPolicy>(config.iubendaPrivacyPolicyURL)
})
