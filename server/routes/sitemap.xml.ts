import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'
export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://harmonics.be',
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      lastmod: doc.updatedDate,
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
