<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header
    class="text-secondary sticky top-0 z-30 flex w-full items-center justify-center bg-white py-10 shadow-md lg:px-20"
  >
    <nav>
      <ul class="flex gap-5 text-xl sm:text-3xl">
        <li
          class="hover:border-primary rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:duration-200"
          :class="{
            'border-primary font-bold': route.path === '/',
          }"
        >
          <NuxtLink to="/"> Accueil </NuxtLink>
        </li>
        <li
          class="hover:border-primary rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:duration-200"
          :class="{ 'border-primary font-bold': route.path === '/talks' }"
        >
          <NuxtLink to="/talks"> Talks </NuxtLink>
        </li>
        <!-- <li
          class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
        >
          <NuxtLink to="/news" :class="{ 'font-bold': route.path === '/news' }">
            Actus
          </NuxtLink>
        </li> -->
        <li
          class="hover:border-primary rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:duration-200"
          :class="{ 'border-primary font-bold': route.path === '/about' }"
        >
          <NuxtLink to="/about"> À propos </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
