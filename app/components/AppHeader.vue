<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="sticky top-0 z-30 flex w-screen justify-center bg-white shadow-md shadow-primary dark:bg-slate-800"
  >
    <header
      class="flex w-full items-center justify-between py-10 text-secondary dark:text-white md:w-2/3"
    >
      <nav>
        <ul
          class="flex gap-10 text-xl sm:text-2xl lg:gap-8 xl:gap-16 xl:text-3xl"
        >
          <li>
            <NuxtLink
              to="/"
              class="rounded-lg transition-all hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-8 outline-primary':
                  route.path === '/',
              }"
            >
              Accueil
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/talks"
              class="rounded-lg transition-all hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-8 outline-primary':
                  route.path === '/talks',
              }"
            >
              Talks
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="rounded-lg transition-all hover:outline hover:outline-2 hover:outline-offset-8 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-8 outline-primary':
                  route.path === '/about',
              }"
            >
              À propos
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <AppButton
        link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
        target="_blank"
        class="hidden lg:block"
      >
        Prochain meetup Vue.js Paris
      </AppButton>
      <DarkMode />
    </header>
  </div>
</template>
