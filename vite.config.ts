import { URL, fileURLToPath } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import LinkAttributes from 'markdown-it-link-attributes'
import Anchor from 'markdown-it-anchor'
import Prism from 'markdown-it-prism'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import fs from 'fs-extra'
import matter from 'gray-matter'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-jsdoc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperComponent: 'markdown-wrapper',
      wrapperClasses: 'prose m-auto',
      markdownItSetup(md) {
        md.use(Anchor)
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
      headEnabled: true,
    }),
    WindiCSS(),
    Pages({
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue'],
      onRoutesGenerated: routes =>
        generateSitemap({
          hostname: 'https://harmonics.be/',
          routes,
        }),
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'vitest'],
      dts: true, // generate TypeScript declaration
    }),
    Components({
      extensions: ['vue', 'md', 'svg', 'mock'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.svg$/, /\.mock$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
  },
})
