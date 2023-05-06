import { name, version } from '../../package.json'

export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  return {
    name,
    version,
    vercel: {
      region: config.region,
      env: process.env.VERCEL_ENV
    }
  }
})
