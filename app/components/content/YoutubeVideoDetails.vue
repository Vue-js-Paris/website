<script setup lang="ts">
const props = defineProps<{
  videoId: string;
  videoTitle: string;
  videoDescription: string;
}>();

const showVideo = ref(false);
</script>

<template>
  <div class="w-full py-10 md:px-10">
    <article
      class="background w-full border-2 border-bordercolor p-5 md:p-10 xl:p-20"
    >
      <div class="mx-auto flex w-full flex-col xl:w-2/3">
        <h1 class="mb-10 text-center text-2xl text-white md:text-3xl">
          {{ props.videoTitle }}
        </h1>
        <div
          v-if="!showVideo"
          class="relative h-[150px] w-full rounded-2xl md:h-[290px] lg:h-[400px] xl:h-[370px] 2xl:h-[550px]"
        >
          <button
            aria-label="Charger la vidéo"
            class="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat text-white"
            :style="{
              backgroundImage: `url('https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg')`,
            }"
            @click="showVideo = true"
          >
            <Icon name="logos:youtube-icon" class="text-5xl md:text-6xl" />
          </button>
        </div>
        <iframe
          v-else
          class="h-[150px] w-full rounded-2xl md:h-[290px] lg:h-[400px] xl:h-[370px] 2xl:h-[550px]"
          :src="`https://www.youtube-nocookie.com/embed/${props.videoId}`"
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
