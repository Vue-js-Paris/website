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
    <h2 class="w-full text-center text-xl font-semibold text-white">
      {{ name }}
    </h2>
    <ul class="flex gap-5">
      <li>
        <NuxtLink :to="linkedin" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:linkedin"
            class="text-4xl text-white transition-all hover:scale-125 hover:text-primarygreen-200 hover:duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="github" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:github"
            class="text-4xl text-white transition-all hover:scale-125 hover:text-primarygreen-200 hover:duration-200"
          />
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>
