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
    default: "À déterminer",
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
  <article class="flex w-full flex-col items-center justify-start gap-5">
    <img
      :src="image"
      :alt="alt"
      class="h-96 w-full rounded-2xl bg-white object-cover sm:w-96 lg:h-64 xl:h-64 xl:w-64"
    />
    <h2
      class="w-full text-center text-xl font-semibold text-secondary dark:text-white"
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
    <AppButton v-else link="/speakers">
      Devenir speaker
      <Icon name="fa6-solid:arrow-right" />
    </AppButton>
  </article>
</template>
