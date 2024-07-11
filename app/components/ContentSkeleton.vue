<template>
  <div class="mt-10">
    <div class="col-left">
      <USkeleton class="h-8 w-1/2 mb-10" />
      <div v-for="items, index in [1, 2]" :key="index" class="space-y-2 mb-5">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-[100px]" />
        <USkeleton class="h-4 w-1/2" />
      </div>
    </div>
    <div class="col-right">
      <USkeleton class="h-8 w-1/3 mb-10" />
      <div class="flex items-center space-x-4">
        <USkeleton class="h-12 w-12 rounded-full mb-10" />
        <div class="space-y-2 mb-10">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
      <div class="space-y-2 mb-5">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-[100px]" />
        <USkeleton class="h-4 w-1/2" />
      </div>
    </div>
    <div class="col-clear" />
  </div>
</template>
