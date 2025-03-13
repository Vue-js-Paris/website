<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "Sponsor logo",
  },
  name: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article>
    <NuxtLink
      :to="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-full w-24 flex-col items-center gap-5 rounded-2xl transition-all hover:scale-110 hover:duration-200 sm:w-32 md:w-20 lg:w-32 xl:w-40 2xl:w-60"
    >
      <img
        :src="image"
        :alt="alt"
        class="aspect-square h-20 w-20 rounded-2xl object-contain object-bottom md:h-14 md:w-14 lg:h-20 lg:w-20 xl:h-44 xl:w-44"
      />
      <h3
        class="w-full text-center font-semibold text-white md:text-xl lg:text-2xl"
      >
        {{ name }}
      </h3>
    </NuxtLink>
  </article>
</template>
