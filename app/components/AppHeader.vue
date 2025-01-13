<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header
    class="sticky top-0 z-30 flex w-full items-center justify-between bg-white py-5 text-secondary shadow-md shadow-primary dark:bg-slate-800 dark:text-white"
  >
    <nav>
      <ul class="flex gap-5 text-xl sm:text-3xl">
        <li>
          <NuxtLink
            to="/"
            class="rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:border-primary hover:duration-200"
            :class="{
              '!border-primary font-bold': route.path === '/',
            }"
          >
            Accueil
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/talks"
            class="rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:border-primary hover:duration-200"
            :class="{ '!border-primary font-bold': route.path === '/talks' }"
          >
            Talks
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="rounded-lg border-2 border-transparent p-2 transition-all hover:border-2 hover:border-primary hover:duration-200"
            :class="{ '!border-primary font-bold': route.path === '/about' }"
          >
            À propos
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <AppSocials />
    <DarkMode
      class="transition-all hover:fill-primary hover:stroke-primary hover:duration-200"
    />
  </header>
</template>
