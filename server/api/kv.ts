import vercelDriver from '../unstorage/vercel-driver'

const storage = useStorage()
const config = useRuntimeConfig()

storage.mount('harmonics-website-redis', vercelDriver({
    url: config.vercelKv.url,
    token: config.vercelKv.token
}))

export default defineEventHandler(async event => {
    await storage.setItem('harmonics-website-redis:thing', {
        foo: 'bar'
    })

    const retrievedValue = await storage.getItem('harmonics-website-redis:thing')
    const keys = await storage.getKeys('harmonics-website-redis')

    return {
        value: retrievedValue,
        keys
    }
})