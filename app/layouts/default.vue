<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="hidden px-5 md:flex md:px-10" />
    <main class="bg-white dark:bg-slate-800 dark:text-white">
      <slot />
    </main>
    <AppFooter class="pt-10" />

    <MobileHeader class="block md:hidden" />
  </div>
</template>
