<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header class="sticky bottom-0">
    <nav class="flex justify-between bg-[#ffffffcb] px-20 py-3">
      <NuxtLink to="/" class="flex flex-col items-center">
        <Icon
          name="material-symbols:other-houses"
          class="text-4xl text-primary"
        />
        <p
          class="text-secondary"
          :class="{
            'font-bold': route.path === '/',
          }"
        >
          Accueil
        </p>
      </NuxtLink>
      <NuxtLink to="/talks" class="flex flex-col items-center">
        <Icon name="mdi:talk" class="text-4xl text-primary" />
        <p
          class="text-secondary"
          :class="{
            'font-bold': route.path === '/talks',
          }"
        >
          Talks
        </p>
      </NuxtLink>
      <NuxtLink to="/about" class="flex flex-col items-center">
        <Icon name="mdi:about" class="text-4xl text-primary" />
        <p
          class="text-secondary"
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
