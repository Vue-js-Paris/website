<script setup lang="ts"></script>

<template>
  <div class="bg-black">
    <AppHeader class="hidden bg-black md:flex" />
    <main
      class="background-stripes border-x-2 border-[#4f4d4d] font-roboto md:mx-auto md:w-[90%] md:pt-[100px]"
    >
      <slot />
    </main>
    <AppFooter class="bg-black pt-10" />

    <AppMobileHeader class="background z-50 block md:hidden" />
  </div>
</template>
