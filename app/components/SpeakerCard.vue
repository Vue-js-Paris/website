<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: "/images/unknownSpeaker.webp",
  },
  alt: {
    type: String,
    default: "Image de profil de l'intervenant",
  },
  name: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Des talks passionnant en préparation",
  },
  description: {
    type: String,
    default:
      "Aucun speaker confirmé pour le moment. Pourquoi pas vous ? Partagez vos connaissances et devenez speaker au prochain meetup Vue.js Paris.",
  },
  linkedin: {
    type: String,
    default: "https://www.linkedin.com/",
  },
  github: {
    type: String,
    default: "https://github.com/",
  },
});
</script>

<template>
  <article
    class="flex w-full flex-col items-start gap-10 rounded-2xl bg-slate-100 p-8 dark:bg-slate-800 lg:flex-row"
  >
    <div class="relative flex w-full flex-col items-start gap-2 lg:w-1/3">
      <img
        :src="image"
        :alt="alt"
        class="h-fit w-full rounded-2xl bg-slate-900 object-cover xl:h-52 xl:w-full"
      />
      <div
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000000a5] to-transparent px-2 pb-1"
      ></div>
    </div>
    <div class="flex h-full w-full flex-col items-start justify-between">
      <div class="flex flex-col items-start gap-2">
        <h3 class="text-3xl font-semibold text-secondary dark:text-white">
          {{ title }}
        </h3>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-col items-start gap-2">
        <h2 class="w-full text-xl font-semibold text-secondary dark:text-white">
          {{ name }}
        </h2>
        <ul
          v-if="image !== '/images/unknownSpeaker.webp'"
          class="flex justify-center gap-5"
        >
          <li>
            <NuxtLink :to="linkedin" target="_blank" rel="noopener noreferrer">
              <Icon
                name="mdi:linkedin"
                class="text-4xl text-secondary transition-all hover:scale-125 hover:text-primary hover:duration-200 dark:text-white dark:hover:text-primary"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="github" target="_blank" rel="noopener noreferrer">
              <Icon
                name="mdi:github"
                class="text-4xl text-secondary transition-all hover:scale-125 hover:text-primary hover:duration-200 dark:text-white dark:hover:text-primary"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
