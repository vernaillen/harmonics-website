import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperComponent: "markdown-wrapper",
      wrapperClasses: "prose m-auto",
    }),
    WindiCSS(),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          hostname: "https://harmonics.be/",
          routes,
        }),
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    format: "cjs",
  },
});
