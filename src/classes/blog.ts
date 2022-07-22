import type { Post } from '@/types'

export class Blog {
  getPosts(): Post[] {
    const router = useRouter()
    return router
      .getRoutes()
      .filter(i => i.path.startsWith('/blog') && i.meta.frontmatter.date)
      .sort(
        (a, b) =>
          +new Date(b.meta.frontmatter.date)
          - +new Date(a.meta.frontmatter.date),
      )
      .map(i => ({
        path: i.path,
        title_nl: i.meta.frontmatter.title_nl,
        title_en: i.meta.frontmatter.title_en,
        desc_nl: i.meta.frontmatter.desc_nl,
        desc_en: i.meta.frontmatter.desc_en,
        author: i.meta.frontmatter.author,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        duration: i.meta.frontmatter.duration,
        category: i.meta.frontmatter.category,
        thumbnail: i.meta.frontmatter.thumbnail,
        thumbnail_dark: i.meta.frontmatter.thumbnail_dark,
        thumbnail_light: i.meta.frontmatter.thumbnail_light,
      }))
  }
}
const blog = new Blog()
export default blog

export function getPreviousPost(currentPostPath: string): Post | null {
  let foundCurrentPost = false
  let previousPost = null
  for (const post of blog.getPosts()) {
    if (foundCurrentPost && previousPost == null)
      previousPost = post

    if (post.path === currentPostPath)
      foundCurrentPost = true
  }
  return previousPost
}

export function getNextPost(currentPostPath: string): Post | null {
  let moreRecentPost = null
  for (const post of blog.getPosts()) {
    if (moreRecentPost != null && post.path === currentPostPath)
      return moreRecentPost

    moreRecentPost = post
  }
  return null
}
