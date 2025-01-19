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
    default: "noopener noreferrer",
  },
  background: {
    type: String,
    default: "bg-slate-200",
  },
  darkBackground: {
    type: String,
    default: "dark:bg-slate-900",
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
  <div class="mx-auto flex w-full max-w-lg items-center justify-center">
    <div
      :class="`relative z-10 flex w-full items-center overflow-hidden rounded-2xl border ${border} ${darkBorder} p-[2px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary`"
    >
      <div
        class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#42b883_20deg,transparent_120deg)]"
      ></div>
      <div
        :class="`${background} relative z-20 flex w-full rounded-2xl p-2 ${darkBackground}`"
      >
        <NuxtLink
          :to="link"
          :target="target"
          :rel="rel"
          class="h-full flex-1 rounded-lg bg-transparent p-2 text-xl text-secondary placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary dark:text-white"
        >
          <slot />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
