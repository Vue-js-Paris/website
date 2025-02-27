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
    class="flex w-full flex-col gap-5 rounded-2xl border-2 border-bordercolor bg-transparent p-5 md:gap-10 lg:flex-row"
  >
    <div class="relative flex w-full flex-col items-center gap-2 lg:w-1/3">
      <img
        :src="image"
        :alt="alt"
        class="h-fit w-full rounded-2xl bg-transparent object-cover sm:w-1/2 md:w-full xl:h-52"
      />
      <div
        v-if="image !== '/images/unknownSpeaker.webp'"
        class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000000a5] to-transparent px-2 pb-1"
      ></div>
    </div>
    <div class="flex h-full w-full flex-col justify-between">
      <div class="flex flex-col items-start gap-2">
        <h3 class="text-lg font-semibold text-white md:text-2xl">
          {{ title }}
        </h3>
        <p class="line-clamp-2 text-gray-400 md:line-clamp-4">
          {{ description }}
        </p>
      </div>

      <div
        v-if="image !== '/images/unknownSpeaker.webp'"
        class="flex w-full items-end justify-between pt-3"
      >
        <h2 class="w-full text-white md:text-xl">
          {{ name }}
        </h2>
        <ul class="flex h-full items-end gap-2 md:gap-5">
          <li class="flex items-end">
            <NuxtLink
              :to="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-end"
            >
              <Icon
                name="mdi:linkedin"
                class="text-3xl text-white transition-all hover:scale-125 hover:text-primarygreen-200 hover:duration-200"
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
                class="text-3xl text-white transition-all hover:scale-125 hover:text-primarygreen-200 hover:duration-200"
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
