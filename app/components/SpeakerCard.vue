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
    default: "Un speaker incroyable à venir",
  },
  title: {
    type: String,
    default: "Un talk passionnant en préparation",
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
    class="flex w-full flex-col items-start gap-10 rounded-2xl bg-slate-800 p-8 lg:flex-row"
  >
    <div class="flex w-full flex-col items-start gap-2 lg:w-1/3">
      <img
        :src="image"
        :alt="alt"
        class="h-fit w-full rounded-2xl bg-slate-900 object-cover xl:h-52 xl:w-full"
      />
      <h2
        class="w-full text-xl font-semibold text-secondary dark:text-white"
        :class="{ 'text-center': name === 'Un speaker incroyable à venir' }"
      >
        {{ name }}
      </h2>
      <ul v-if="image !== '/images/unknownSpeaker.webp'" class="flex gap-5">
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
    <div class="flex h-full w-full flex-col items-start gap-5">
      <h3 class="text-3xl font-semibold text-secondary dark:text-white">
        {{ title }}
      </h3>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
      <AppButton
        v-if="image === '/images/unknownSpeaker.webp'"
        link=""
        target="_blank"
        rel="noopener"
      >
        Devenir speaker
      </AppButton>
    </div>
  </article>
</template>
