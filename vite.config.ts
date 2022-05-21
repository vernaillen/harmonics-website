import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

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
