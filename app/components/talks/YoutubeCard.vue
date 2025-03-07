<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <NuxtLink
    :to="`/talks/${slug}`"
    class="lg:max-h-84 group flex flex-col gap-5 rounded-2xl border-2 border-bordercolor bg-transparent p-5 transition-all duration-200 hover:border-white lg:flex-row lg:gap-10"
  >
    <div
      class="h-28 w-full overflow-hidden rounded-2xl md:h-40 lg:h-24 lg:w-1/3 xl:h-32 2xl:h-44"
    >
      <img
        :src="talk.snippet.thumbnails.high.url"
        :alt="talk.snippet.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex w-full flex-col gap-2 lg:w-2/3">
      <div>
        <h3
          class="line-clamp-2 text-lg font-semibold text-white lg:text-xl xl:text-2xl"
        >
          {{ talk.snippet.title }}
        </h3>

        <p class="line-clamp-2 text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="ml-auto mt-auto pt-3 text-neutral-400 group-hover:text-white">
        <div>
          En savoir plus
          <Icon name="mdi:arrow-right" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
