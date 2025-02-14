<script setup lang="ts">
defineProps<{
  videoId: string;
  videoTitle: string;
  videoDescription: string;
}>();
</script>

<template>
  <div class="w-full">
    <article
      class="flex w-full flex-col px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-1/2"
    >
      <h1 class="mb-10 mt-10 text-center text-2xl text-white md:text-3xl">
        {{ videoTitle }}
      </h1>
      <iframe
        class="h-[300px] w-full rounded-2xl sm:h-[350px] md:h-[550px]"
        :src="`https://www.youtube.com/embed/${videoId}`"
        frameborder="0"
        allowfullscreen
      />
      <div class="pt-10text-white prose-base">
        <slot />
      </div>
    </article>
  </div>
</template>
