<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="fixed top-0 z-30 flex h-[150px] w-screen justify-center bg-slate-100 shadow-md shadow-primary dark:bg-slate-800"
  >
    <header
      class="flex w-full items-center justify-between py-10 text-secondary dark:text-white md:w-4/5 xl:w-2/3"
    >
      <nav>
        <ul
          class="flex gap-10 font-montserrat text-xl sm:text-2xl lg:gap-8 xl:gap-16"
        >
          <li>
            <NuxtLink
              to="/"
              class="rounded transition-all hover:outline hover:outline-2 hover:outline-offset-3 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-3 outline-primary':
                  route.path === '/',
              }"
            >
              Accueil
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/talks"
              class="rounded transition-all hover:outline hover:outline-2 hover:outline-offset-3 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-3 outline-primary':
                  route.path === '/talks',
              }"
            >
              Talks
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="rounded transition-all hover:outline hover:outline-2 hover:outline-offset-3 hover:outline-primary"
              :class="{
                'font-bold outline outline-2 outline-offset-3 outline-primary':
                  route.path === '/about',
              }"
            >
              À propos
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex gap-5">
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participer au meetup
        </AppButton>
        <AppButton
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
          target="_blank"
          rel="noopener noreferrer"
          background-color="bg-transparent"
          border-width="border-2"
          class="hidden lg:block"
        >
          Proposer un talk
        </AppButton>
      </div>
    </header>
  </div>
</template>
