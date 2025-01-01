import type { JsonContentList, JsonParsedContent } from 'types'

export function useJsonContent(path: string) {
  return useAsyncData('content-' + path, () =>
    queryContent<JsonParsedContent<JsonContentList>>(path).findOne()
  )
}
