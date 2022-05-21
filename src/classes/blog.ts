import { useRouter } from "vue-router";
import type { Post } from "@/types";

export class Blog {
  getPosts(): Post[] {
    const router = useRouter();
    return router
      .getRoutes()
      .filter((i) => i.path.startsWith("/blog/") && i.meta.frontmatter.date)
      .sort(
        (a, b) =>
          +new Date(b.meta.frontmatter.date) -
          +new Date(a.meta.frontmatter.date)
      )
      .map((i) => ({
        path: i.path,
        title: i.meta.frontmatter.title,
        desc: i.meta.frontmatter.desc,
        author: i.meta.frontmatter.author,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        duration: i.meta.frontmatter.duration,
        category: i.meta.frontmatter.category,
        thumbnail: i.meta.frontmatter.thumbnail,
        thumbnail_dark: i.meta.frontmatter.thumbnail_dark,
        thumbnail_light: i.meta.frontmatter.thumbnail_light,
      }));
  }
}
const blog = new Blog();
export default blog;