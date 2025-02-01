<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header class="sticky bottom-0">
    <nav
      class="flex justify-around bg-[#ffffffdf] py-3 font-montserrat dark:bg-[#1e293be7]"
    >
      <NuxtLink to="/" class="flex flex-col items-center">
        <Icon
          name="material-symbols:other-houses"
          class="text-primarygreen-100 text-4xl"
        />
        <p
          class="text-primaryblue dark:text-white"
          :class="{
            'font-bold': route.path === '/',
          }"
        >
          Accueil
        </p>
      </NuxtLink>
      <NuxtLink to="/talks" class="flex flex-col items-center">
        <Icon name="mdi:talk" class="text-primarygreen-100 text-4xl" />
        <p
          class="text-primaryblue dark:text-white"
          :class="{
            'font-bold': route.path === '/talks',
          }"
        >
          Talks
        </p>
      </NuxtLink>
      <NuxtLink to="/about" class="flex flex-col items-center">
        <Icon name="mdi:about" class="text-primarygreen-100 text-4xl" />
        <p
          class="text-primaryblue dark:text-white"
          :class="{
            'font-bold': route.path === '/about',
          }"
        >
          À propos
        </p>
      </NuxtLink>
    </nav>
  </header>
</template>
