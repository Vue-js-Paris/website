<script setup lang="ts">
defineProps<{
  videoId: string;
  videoTitle: string;
  videoDescription: string;
}>();
</script>

<template>
  <div class="flex w-screen justify-center">
    <article class="flex w-full flex-col px-5 md:w-[90%] md:px-0 xl:w-1/2">
      <h1
        class="mb-10 mt-10 text-center text-2xl text-primaryblue dark:text-white md:text-3xl"
      >
        {{ videoTitle }}
      </h1>
      <iframe
        class="h-[300px] w-full rounded-2xl sm:h-[350px] md:h-[550px]"
        :src="`https://www.youtube.com/embed/${videoId}`"
        frameborder="0"
        allowfullscreen
      />
      <p class="text-primaryblue dark:text-white">
        <slot />
      </p>
    </article>
  </div>
</template>
