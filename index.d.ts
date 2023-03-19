declare module 'nuxt/schema' {
    interface AppConfigInput {
        /** Theme configuration */
        mailchimpLink: URL
        sendGridEmailFrom: string
    }
}
// It is always important to ensure you import/export something when augmenting a type
export { }