<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  gradientFrom: {
    type: String,
    default: "from-primarygreen-200",
  },
  gradientTo: {
    type: String,
    default: "to-primarygreen-200",
  },
  target: {
    type: String,
    default: "",
  },
  rel: {
    type: String,
    default: "noopener noreferrer",
  },
});
</script>

<template>
  <NuxtLink
    :to="link"
    :target="target"
    :rel="rel"
    class="group ml-auto flex w-fit items-center transition-all duration-300 ease-in-out"
  >
    <span
      class="flex items-center gap-1 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-white transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]"
      :class="`bg-gradient-to-r ${gradientFrom} ${gradientTo}`"
    >
      <slot />
    </span>
  </NuxtLink>
</template>
