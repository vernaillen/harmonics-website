import { name, version } from '../../package.json'

export default defineEventHandler(event => {
    const config = useRuntimeConfig()

    return {
        name,
        version,
        vercel: {
            region: config.region,
        },
        netlify: {
            branch: process.env.BRANCH,
            pr: process.env.PULL_REQUEST,
            context: process.env.CONTEXT,
        }
    }
})