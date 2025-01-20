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
    default: "bg-tertiary",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  darkTextColor: {
    type: String,
    default: "dark:text-white",
  },
  borderWidth: {
    type: String,
    default: "",
  },
  borderColor: {
    type: String,
    default: "",
  },
  darkBorderColor: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtLink
    :to="link"
    :target="target"
    :rel="rel"
    class="font-montserrat flex w-fit items-center justify-center gap-2 rounded-2xl p-4 text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:duration-300 hover:ease-in-out"
    :class="`${backgroundColor} ${textColor} ${darkTextColor} ${borderWidth} ${borderColor} ${darkBorderColor}`"
  >
    <slot />
  </NuxtLink>
</template>
