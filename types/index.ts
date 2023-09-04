import type { ParsedContent as DefaultParsedContent } from '@nuxt/content/dist/runtime/types'
import type { StorageMeta } from 'unstorage'

export interface ParsedContent extends DefaultParsedContent {
    storageMeta: StorageMeta
    prose?: boolean
    schemaOrg: Record<string, any>
}
export interface JsonParsedContent<T> extends ParsedContent {
    body: T
}

export interface JsonContent {
    title: string
    description: string
    url: string
    category: string
}

export interface UpcomingSession extends JsonContent {
    date: Date
}

export interface Website extends JsonContent {
}

export interface JsonContentList extends ParsedContent {
    name: string
    projects: JsonContentList[]
}

export interface LegalPolicy {
    success: boolean
    content: string
}
