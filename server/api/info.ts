import { name, version } from '../../package.json'

export default defineEventHandler(event => {
    const config = useRuntimeConfig()

    return {
        name,
        version,
        vercel: {
            region: config.region,
        }
    }
})