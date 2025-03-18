<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header class="sticky bottom-0">
    <nav class="font-montserrat flex justify-around py-3">
      <NuxtLink to="/" class="flex flex-col items-center">
        <Icon
          name="material-symbols:other-houses"
          class="text-primarygreen-200 text-4xl"
        />
        <p
          class="text-white"
          :class="{
            'font-bold': route.path === '/',
          }"
        >
          Accueil
        </p>
      </NuxtLink>
      <NuxtLink to="/talks" class="flex flex-col items-center">
        <Icon name="mdi:talk" class="text-primarygreen-200 text-4xl" />
        <p
          class="text-white"
          :class="{
            'font-bold': route.path === '/talks',
          }"
        >
          Talks
        </p>
      </NuxtLink>
      <NuxtLink to="/sponsor" class="flex flex-col items-center">
        <Icon
          name="ri:shake-hands-fill"
          class="text-primarygreen-200 text-4xl"
        />
        <p
          class="text-white"
          :class="{
            'font-bold': route.path === '/sponsor',
          }"
        >
          Sponsor
        </p>
      </NuxtLink>
      <NuxtLink to="/about" class="flex flex-col items-center">
        <Icon name="mdi:about" class="text-primarygreen-200 text-4xl" />
        <p
          class="text-white"
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
