<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: "",
  },
  rel: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "bg-slate-200",
  },
  darkBackground: {
    type: String,
    default: "dark:bg-darkerbg",
  },
  border: {
    type: String,
    default: "border-slate-300",
  },
  darkBorder: {
    type: String,
    default: "dark:border-slate-800",
  },
});
</script>

<template>
  <div
    class="group mx-auto flex w-full max-w-lg items-center justify-center font-montserrat"
  >
    <div
      :class="`relative z-10 flex w-full items-center overflow-hidden rounded-2xl border ${border} ${darkBorder} hover:bg-primarygreen-100 p-[2px] transition-all duration-300 ease-in-out hover:scale-105`"
    >
      <div
        class="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(transparent_20deg,#4ADE80_120deg)] group-hover:hidden group-hover:animate-none"
      ></div>
      <div
        :class="`${background} relative z-20 flex w-full rounded-2xl p-2 ${darkBackground}`"
      >
        <NuxtLink
          :to="link"
          :target="target"
          :rel="rel"
          class="text-primaryblue focus:ring-primarygreen-100 h-full flex-1 rounded-lg bg-transparent p-2 text-xl placeholder:text-slate-700 focus:outline-none focus:ring-1 dark:text-white"
        >
          <slot />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
