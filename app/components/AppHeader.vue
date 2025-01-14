<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="sticky top-0 z-30 flex w-screen justify-center bg-white shadow-md shadow-primary dark:bg-slate-800"
  >
    <header
      class="flex w-full items-center justify-between py-5 text-secondary dark:text-white md:w-2/3"
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
  </div>
</template>
