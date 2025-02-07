<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="background hidden md:flex" />
    <main class="background font-roboto md:pt-[120px]">
      <slot />
    </main>
    <AppFooter class="background pt-10" />

    <MobileHeader class="block md:hidden" />
  </div>
</template>

<style scoped>
.background {
  background: rgb(1, 3, 23);
  background: linear-gradient(
    90deg,
    rgba(1, 3, 23, 1) 56%,
    rgb(16, 25, 46) 97%
  );
}
</style>
