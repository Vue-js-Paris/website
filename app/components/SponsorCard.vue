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
      class="hover:outline-primarygreen-100 flex h-full w-24 flex-col items-center gap-5 rounded-2xl p-2 outline outline-2 outline-gray-800 transition-all hover:outline hover:outline-2 hover:duration-300 hover:ease-in-out dark:bg-darkerbg sm:w-32 md:w-40 xl:w-60"
    >
      <img
        :src="image"
        :alt="alt"
        class="aspect-square h-24 w-24 rounded-2xl object-contain object-bottom sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-44 xl:w-44"
      />
      <h3
        class="text-primaryblue w-full text-center font-semibold dark:text-white md:text-2xl"
      >
        {{ name }}
      </h3>
    </NuxtLink>
  </article>
</template>
