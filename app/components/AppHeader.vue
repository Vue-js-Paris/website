<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
</script>

<template>
  <div
    class="fixed top-0 z-30 flex h-[100px] w-screen justify-center bg-slate-100 shadow dark:bg-slate-800"
  >
    <header
      class="flex w-full items-center justify-between text-secondary dark:text-white md:w-[90%] xl:w-[80%]"
    >
      <nav>
        <ul class="flex items-center font-montserrat text-xl xl:gap-10">
          <li>
            <NuxtLink to="/">
              <img
                v-if="colorMode.value === 'dark'"
                src="/images/Vue.js_paris_logo_dark.webp"
                alt="Vue.js Paris logo"
                class="w-24 overflow-hidden object-cover"
              />
              <img
                v-else
                src="/images/Vue.js_paris_logo.webp"
                alt="Vue.js Paris logo"
                class="w-24 overflow-hidden object-cover"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/talks"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primary"
              :class="{
                'rounded-2xl border-2 !border-primary p-3 font-bold':
                  route.path === '/talks',
              }"
            >
              Talks
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/sponsor"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primary"
              :class="{
                'rounded-2xl border-2 !border-primary p-3 font-bold':
                  route.path === '/sponsor',
              }"
            >
              Devenir sponsor
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="rounded-2xl border-2 border-transparent p-3 transition-all hover:border-2 hover:border-primary"
              :class="{
                'rounded-2xl border-2 !border-primary p-3 font-bold':
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
          class="!p-3"
        >
          Participer au meetup
        </AppButton>
        <AppButton
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
          target="_blank"
          rel="noopener noreferrer"
          text-color="text-secondary"
          background-color="bg-transparent"
          border-width="border-2"
          class="hidden !p-3 lg:block"
        >
          Proposer un talk
        </AppButton>
      </div>
    </header>
  </div>
</template>
