import type { JsonContentList, JsonParsedContent } from 'types'

export function useJsonContent(collection: string) {
  return useAsyncData(collection, () =>
    queryCollection<JsonParsedContent<JsonContentList>>(collection)
      .limit(1)
      .all()
  )
}
