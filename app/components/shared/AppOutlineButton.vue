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
    default: "bg-darkerbg",
  },
  border: {
    type: String,
    default: "border-black",
  },
});
</script>

<template>
  <div
    class="group font-montserrat mx-auto flex w-full max-w-lg items-center justify-center"
  >
    <div
      :class="`relative z-10 flex w-full items-center overflow-hidden rounded-xl border ${border} hover:bg-primarygreen-200 p-[2px] transition-all duration-300 ease-in-out hover:scale-105`"
    >
      <div
        class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(transparent_20deg,#1c6739_120deg)] group-hover:hidden group-hover:animate-none"
      ></div>
      <div :class="`${background} relative z-20 flex w-full rounded-xl p-2`">
        <NuxtLink
          :to="link"
          :target="target"
          :rel="rel"
          class="h-full flex-1 rounded-lg bg-transparent p-1 text-xl text-white placeholder:text-slate-700 focus:ring-1 focus:outline-hidden"
        >
          <slot ></slot>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
