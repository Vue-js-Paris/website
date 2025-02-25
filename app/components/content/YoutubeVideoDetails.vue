<script setup lang="ts">
defineProps<{
  videoId: string;
  videoTitle: string;
  videoDescription: string;
}>();
</script>

<template>
  <div class="w-full pt-10 md:px-10">
    <article
      class="background w-full border-2 border-bordercolor p-5 md:p-10 xl:p-20"
    >
      <div class="mx-auto flex w-full flex-col xl:w-2/3">
        <h1 class="mb-10 text-center text-2xl text-white md:text-3xl">
          {{ videoTitle }}
        </h1>
        <iframe
          class="h-[300px] w-full rounded-2xl sm:h-[350px] md:h-[550px]"
          :src="`https://www.youtube.com/embed/${videoId}`"
          frameborder="0"
          allowfullscreen
        />
        <div class="prose-base pt-10 text-white">
          <slot />
        </div>
      </div>
    </article>
  </div>
</template>
