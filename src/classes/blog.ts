import type { Post } from '@/types'
import { useLocale } from '@/stores/lang'

export class Blog {
  getPosts(maxNrOfPosts: number): Post[] {
    const router = useRouter()
    return router
      .getRoutes()
      .filter((route: { path: string; meta: { frontmatter: Post } }) => route.path.startsWith(`/${useLocale().lang}/blog`) && route.meta.frontmatter.date)
      .sort(
        (a: { path: string; meta: { frontmatter: Post } }, b: { path: string; meta: { frontmatter: Post } }) =>
          +new Date(b.meta.frontmatter.date)
          - +new Date(a.meta.frontmatter.date),
      )
      .filter((route, index) => index < maxNrOfPosts)
      .map((route: { path: string; meta: { frontmatter: Post } }) => ({
        path: route.path,
        title: route.meta.frontmatter.title,
        show_desc: route.meta.frontmatter.show_desc,
        desc: route.meta.frontmatter.desc,
        show_subtitle: route.meta.frontmatter.show_subtitle,
        subtitle: route.meta.frontmatter.subtitle,
        author: route.meta.frontmatter.author,
        date: route.meta.frontmatter.date,
        image: route.meta.frontmatter.image,
        thumbnail: route.meta.frontmatter.thumbnail,
        thumb_video_webm: route.meta.frontmatter.thumb_video_webm,
        thumb_video_mp4: route.meta.frontmatter.thumb_video_mp4,
      }))
  }
}
const blog = new Blog()
export default blog

export function getPreviousPost(currentPostPath: string): Post | null {
  let foundCurrentPost = false
  let previousPost = null
  for (const post of blog.getPosts(1000)) {
    if (foundCurrentPost && previousPost == null)
      previousPost = post

    if (post.path === currentPostPath)
      foundCurrentPost = true
  }
  return previousPost
}

export function getNextPost(currentPostPath: string): Post | null {
  let moreRecentPost = null
  for (const post of blog.getPosts(1000)) {
    if (moreRecentPost != null && post.path === currentPostPath)
      return moreRecentPost

    moreRecentPost = post
  }
  return null
}
