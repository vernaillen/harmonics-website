import type { Post } from "./types";

declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}

declare module "*.md" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}

declare module "vue-router" {
  interface RouteMeta {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    frontmatter: Post;
  }
}