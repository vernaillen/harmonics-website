<script setup lang="ts">
import blog from "@/classes/blog";
import type { Post } from "@/types";

const posts: Post[] = blog.getPosts();
</script>

<template>
  <section class="lg:container mx-auto pt-[20px] pb-[100px]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
        <div
          v-for="post in posts"
          :key="post.path"
          class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4"
        >
          <div
            class="relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 animated fadeIn"
          >
            <div
              class="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8"
            >
              <h3>
                <router-link
                  :to="post.path"
                  class="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary"
                >
                  {{ post.title }}
                </router-link>
              </h3>
              <p
                class="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
              >
                {{ post.desc }}
              </p>
              <div class="flex">
                <div
                  class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
                >
                  <div class="w-full">
                    <h4
                      class="text-xs font-medium text-dark dark:text-white mb-1"
                    >
                      <router-link
                        to="/about"
                        class="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                      >
                        {{ post.author }}
                      </router-link>
                    </h4>
                  </div>
                </div>
                <div class="inline-block">
                  <p class="text-xs text-body-color">
                    {{ $formatDate(post.date) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
