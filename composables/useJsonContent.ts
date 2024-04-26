import type { JsonContentList, JsonParsedContent } from 'types'

export function useJsonContent(path: string) {
  return useAsyncData('content', () =>
    queryContent<JsonParsedContent<JsonContentList>>(path).findOne()
  )
}
