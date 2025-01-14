<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="hidden md:flex" />
    <main class="bg-white dark:bg-slate-800 dark:text-white">
      <slot />
    </main>
    <AppFooter class="pt-10" />

    <MobileHeader class="block md:hidden" />
  </div>
</template>
