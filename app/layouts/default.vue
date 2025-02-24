<script setup lang="ts"></script>

<template>
  <div class="background">
    <AppHeader class="background hidden md:flex" />
    <main
      class="background-stripes border-bordercolor border-x-2 font-roboto md:mx-auto md:w-[90%] md:pt-[100px]"
    >
      <slot />
    </main>
    <AppFooter class="background" />

    <AppMobileHeader class="background z-50 block md:hidden" />
  </div>
</template>
