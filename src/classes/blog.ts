import type { Post } from '@/types'

export class Blog {
  getPosts(): Post[] {
    const router = useRouter()
    return router
      .getRoutes()
      .filter((i: { path: string; meta: { frontmatter: Post } }) => i.path.startsWith('/blog') && i.meta.frontmatter.date)
      .sort(
        (a: { path: string; meta: { frontmatter: Post } }, b: { path: string; meta: { frontmatter: Post } }) =>
          +new Date(b.meta.frontmatter.date)
          - +new Date(a.meta.frontmatter.date),
      )
      .map((i: { path: string; meta: { frontmatter: Post } }) => ({
        path: i.path,
        title_nl: i.meta.frontmatter.title_nl,
        title_en: i.meta.frontmatter.title_en,
        show_desc: i.meta.frontmatter.show_desc,
        desc_nl: i.meta.frontmatter.desc_nl,
        desc_en: i.meta.frontmatter.desc_en,
        show_subtitle: i.meta.frontmatter.show_subtitle,
        subtitle_nl: i.meta.frontmatter.subtitle_nl,
        subtitle_en: i.meta.frontmatter.subtitle_en,
        author: i.meta.frontmatter.author,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        image: i.meta.frontmatter.image,
        thumbnail: i.meta.frontmatter.thumbnail,
        thumb_video_webm: i.meta.frontmatter.thumb_video_webm,
        thumb_video_mp4: i.meta.frontmatter.thumb_video_mp4,
      }))
  }
}
const blog = new Blog()
export default blog

export function getLatestPost(): Post | null {
  if (blog.getPosts().length > 0)
    return blog.getPosts()[0]

  return null
}

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
