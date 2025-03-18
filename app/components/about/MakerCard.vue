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
  description: {
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
    <img :src="image" :alt="alt" class="w-1/3 rounded-full object-cover" />
    <div class="flex flex-col items-center justify-center">
      <h2 class="w-full text-center text-xl font-semibold text-white">
        {{ name }}
      </h2>
      <p class="w-full text-center text-gray-300">
        {{ description }}
      </p>
    </div>

    <ul v-if="linkedin || github" class="flex gap-5">
      <li v-if="linkedin">
        <NuxtLink :to="linkedin" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:linkedin"
            class="hover:text-primarygreen-200 text-4xl text-white transition-all hover:scale-125 hover:duration-200"
          />
        </NuxtLink>
      </li>
      <li v-if="github">
        <NuxtLink :to="github" target="_blank" rel="noopener noreferrer">
          <Icon
            name="mdi:github"
            class="hover:text-primarygreen-200 text-4xl text-white transition-all hover:scale-125 hover:duration-200"
          />
        </NuxtLink>
      </li>
    </ul>
  </article>
</template>
