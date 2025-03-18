<script setup lang="ts">
const props = defineProps<{
  link?: string;
  target?: string;
  rel?: string;
  backgroundColor?: string;
  textColor?: string;
  borderWidth?: string;
  borderColor?: string;
  hoverBorderColor?: string;
}>();

const defaultProps = {
  backgroundColor: "bg-primarygreen-200",
  textColor: "text-white",
  borderWidth: "",
  borderColor: "border-white",
  hoverBorderColor: "hover:border-primarygreen-200",
};
</script>

<template>
  <NuxtLink
    :to="props.link"
    :target="props.target"
    :rel="props.rel"
    class="font-montserrat flex w-fit items-center justify-center rounded-xl p-3 text-center text-xl transition-all hover:scale-105 hover:shadow-lg hover:duration-300 hover:ease-in-out"
    :class="[
      props.backgroundColor || defaultProps.backgroundColor,
      props.textColor || defaultProps.textColor,
      props.borderWidth || defaultProps.borderWidth,
      props.borderColor || defaultProps.borderColor,
      props.hoverBorderColor || defaultProps.hoverBorderColor,
    ]"
  >
    <slot ></slot>
  </NuxtLink>
</template>
