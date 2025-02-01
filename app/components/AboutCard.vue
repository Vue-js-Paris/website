<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article class="flex w-full flex-col items-center justify-center gap-5">
    <img :src="image" :alt="alt" class="w-2/3 rounded-full object-cover" />
    <h2
      class="text-primaryblue w-full text-center text-xl font-semibold dark:text-white"
    >
      {{ name }}
    </h2>
    <ul class="flex gap-5">
      <li>
        <NuxtLink :to="linkedin" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:linkedin"
            class="hover:text-primarygreen-100 dark:hover:text-primarygreen-100 text-primaryblue text-4xl transition-all hover:scale-125 hover:duration-200 dark:text-white"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="github" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:github"
            class="hover:text-primarygreen-100 dark:hover:text-primarygreen-100 text-primaryblue text-4xl transition-all hover:scale-125 hover:duration-200 dark:text-white"
          />
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>
