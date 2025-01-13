<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <header
    class="sticky top-0 z-30 flex w-full items-center justify-between bg-white py-5 text-secondary shadow-md dark:bg-slate-800 dark:text-white dark:shadow-primary lg:px-20"
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
        <!-- <li>
          <NuxtLink
            to="/news"
            class="transition-all hover:scale-110 hover:text-slate-100 hover:duration-200"
            :class="{ 'font-bold': route.path === '/news' }"
          >
            Actus
          </NuxtLink>
        </li> -->
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
    <DarkMode
      class="rounded-lg border-2 border-transparent p-1 transition-all hover:border-2 hover:border-primary hover:duration-200"
    />
  </header>
</template>
