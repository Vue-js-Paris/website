<script setup lang="ts">
const { parallaxStyles } = useParallax(30);
</script>

<template>
  <ClientOnly>
    <img
      src="/logo/logo-uwu.webp"
      alt="logo VueJS"
      class="transition-transform duration-300 ease-out md:h-96"
      :style="parallaxStyles"
    />
  </ClientOnly>
</template>
