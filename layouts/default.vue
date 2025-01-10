<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="hidden md:flex" />
    <main>
      <slot />
    </main>
    <AppFooter />

    <MobileHeader class="block md:hidden" />
  </div>
</template>
