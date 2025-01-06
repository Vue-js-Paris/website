<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header
    class="sticky top-0 z-30 text-white"
    :class="route.path === '/' ? 'h-0' : 'h-fit'"
  >
    <nav
      class="flex h-20 w-full items-center justify-center bg-gradient-to-b from-[#1c1c1c6e] to-transparent py-20 lg:px-20"
    >
      <ul class="flex gap-5 text-xl sm:text-3xl">
        <li
          class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
        >
          <NuxtLink to="/" :class="{ 'font-bold': route.path === '/' }">
            Accueil
          </NuxtLink>
        </li>
        <li
          class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
        >
          <NuxtLink
            to="/talks"
            :class="{ 'font-bold': route.path === '/talks' }"
          >
            Talks
          </NuxtLink>
        </li>
        <!-- <li
          class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
        >
          <NuxtLink to="/news" :class="{ 'font-bold': route.path === '/news' }">
            Actus
          </NuxtLink>
        </li> -->
        <li
          class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
        >
          <NuxtLink
            to="/about"
            :class="{ 'font-bold': route.path === '/about' }"
          >
            À propos
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
