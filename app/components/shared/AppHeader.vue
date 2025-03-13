<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="fixed top-0 z-30 flex h-[100px] w-full justify-center border-b-2 border-bordercolor"
  >
    <header
      class="flex w-full items-center justify-between text-white md:w-[90%]"
    >
      <NuxtLink to="/" class="group relative h-16 w-16 overflow-hidden">
        <img
          src="/logo/vuejs_paris_logo_dark.svg"
          alt="Vue.js Paris logo dark"
          class="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src="/logo/vuejs_paris_logo.svg"
          alt="Vue.js Paris logo light hover"
          class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </NuxtLink>

      <nav>
        <ul class="flex items-center font-montserrat text-xl xl:gap-10">
          <li>
            <NuxtLink
              to="/talks"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primarygreen-200"
              :class="{
                'rounded-2xl border-2 border-primarygreen-200! p-3 font-bold':
                  route.path === '/talks',
              }"
            >
              Talks
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/sponsor"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primarygreen-200"
              :class="{
                'rounded-2xl border-2 border-primarygreen-200! p-3 font-bold':
                  route.path === '/sponsor',
              }"
            >
              Devenir sponsor
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primarygreen-200"
              :class="{
                'rounded-2xl border-2 border-primarygreen-200! p-3 font-bold':
                  route.path === '/about',
              }"
            >
              À propos
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center gap-5">
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
          class="h-fit"
        >
          Participer au meetup
        </AppButton>
        <AppOutlineButton
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
          target="_blank"
          rel="noopener noreferrer"
          background="bg-[#181818]"
          class="hidden w-fit! lg:block"
        >
          Proposer un talk
        </AppOutlineButton>
      </div>
    </header>
  </div>
</template>
