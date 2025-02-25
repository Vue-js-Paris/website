<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <NuxtLink
    :to="`/talks/${slug}`"
    class="lg:max-h-84 border-bordercolor flex flex-col gap-5 rounded-2xl border-2 bg-transparent p-8 lg:flex-row lg:gap-10"
  >
    <div
      class="h-32 w-full overflow-hidden rounded-2xl sm:h-56 md:h-64 lg:h-28 lg:w-1/3 xl:h-36"
    >
      <img
        :src="talk.snippet.thumbnails.high.url"
        :alt="talk.snippet.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex w-full flex-col lg:w-2/3">
      <div>
        <h3 class="pb-2 text-xl font-semibold text-white lg:text-2xl">
          {{ talk.snippet.title }}
        </h3>

        <p class="line-clamp-2 text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="ml-auto mt-auto pt-5">
        <div>
          En savoir plus
          <Icon name="mdi:arrow-right" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
