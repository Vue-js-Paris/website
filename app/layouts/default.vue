<script setup lang="ts"></script>

<template>
  <div>
    <AppHeader class="hidden md:flex" />
    <main class="bg-slate-100 font-roboto dark:bg-darkerbg dark:text-white md:pt-[100px]">
      <slot />
    </main>
    <AppFooter class="pt-10" />

    <MobileHeader class="block md:hidden" />
  </div>
</template>
