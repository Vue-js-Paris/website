<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="hidden md:flex" />
    <main class="bg-slate-100 dark:bg-slate-800 dark:text-white md:pt-[148px]">
      <slot />
    </main>
    <AppFooter class="pt-10" />

    <MobileHeader class="block md:hidden" />
  </div>
</template>
