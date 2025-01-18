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
    default: "bg-slate-900",
  },
});
</script>

<template>
  <div class="mx-auto flex w-full max-w-lg items-center justify-center">
    <div
      class="relative z-10 flex w-full items-center overflow-hidden rounded-2xl border border-slate-700 p-[2px] transition-all duration-300 ease-in-out hover:scale-105"
    >
      <div
        class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#42b883_20deg,transparent_120deg)]"
      ></div>
      <div :class="`${background} relative z-20 flex w-full rounded-2xl p-2`">
        <NuxtLink
          :to="link"
          :target="target"
          :rel="rel"
          class="h-full flex-1 rounded-lg bg-transparent p-2 text-xl text-white placeholder:text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <slot />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
