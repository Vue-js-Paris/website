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
    class="flex w-full flex-col gap-10 rounded-2xl border-2 border-gray-700 bg-slate-200 p-8 dark:bg-darkbg lg:flex-row"
  >
    <div class="relative flex w-full flex-col gap-2 lg:w-1/3">
      <img
        :src="image"
        :alt="alt"
        class="h-fit w-full rounded-2xl bg-slate-300 object-cover dark:bg-darkerbg xl:h-52 xl:w-full"
      />
      <div
        v-if="image !== '/images/unknownSpeaker.webp'"
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000000a5] to-transparent px-2 pb-1"
      ></div>
    </div>
    <div class="flex h-full w-full flex-col justify-between">
      <div class="flex flex-col items-start gap-2">
        <h3 class="text-primaryblue text-2xl font-semibold dark:text-white">
          {{ title }}
        </h3>
        <p class="line-clamp-4 text-gray-500 dark:text-gray-400">
          {{ description }}
        </p>
      </div>

      <div
        v-if="image !== '/images/unknownSpeaker.webp'"
        class="flex w-full items-end justify-between"
      >
        <h2
          class="text-primaryblue w-full text-xl font-semibold dark:text-white"
        >
          {{ name }}
        </h2>
        <ul class="flex h-full items-end gap-5">
          <li class="flex items-end">
            <NuxtLink
              :to="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-end"
            >
              <Icon
                name="mdi:linkedin"
                class="text-primaryblue hover:text-primarygreen-100 dark:hover:text-primarygreen-100 text-3xl transition-all hover:scale-125 hover:duration-200 dark:text-white"
              />
            </NuxtLink>
          </li>
          <li class="flex items-end">
            <NuxtLink
              :to="github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-end"
            >
              <Icon
                name="mdi:github"
                class="text-primaryblue hover:text-primarygreen-100 dark:hover:text-primarygreen-100 text-3xl transition-all hover:scale-125 hover:duration-200 dark:text-white"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div v-else class="pt-5">
        <AppLink
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
        >
          Proposer un talk
          <Icon name="mdi:arrow-right" />
        </AppLink>
      </div>
    </div>
  </article>
</template>
