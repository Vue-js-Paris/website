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
      class="sm: flex w-24 flex-col items-center gap-5 rounded-2xl outline-2 outline-primary hover:outline sm:w-32 md:w-40 xl:w-60"
    >
      <img
        :src="image"
        :alt="alt"
        class="h-24 w-24 rounded-2xl object-contain object-bottom sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-44 xl:w-44"
      />
      <h2
        class="w-full text-center text-xl font-semibold text-secondary dark:text-white"
      >
        {{ name }}
      </h2>
    </NuxtLink>
  </article>
</template>
