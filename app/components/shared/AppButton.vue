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
  backgroundColor: {
    type: String,
    default: "bg-primarygreen-200",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  borderWidth: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "border-white",
  },
  hoverBorderColor: {
    type: String,
    default: "hover:border-primarygreen-200",
  },
});
</script>

<template>
  <NuxtLink
    :to="link"
    :target="target"
    :rel="rel"
    class="flex w-fit items-center justify-center gap-2 rounded-2xl p-4 text-center font-montserrat text-xl transition-all hover:scale-105 hover:shadow-lg hover:duration-300 hover:ease-in-out"
    :class="`${backgroundColor} ${textColor} ${borderWidth} ${borderColor} ${hoverBorderColor}`"
  >
    <slot />
  </NuxtLink>
</template>
