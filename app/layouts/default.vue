<script setup lang="ts"></script>

<template>
  <div class="background">
    <AppHeader class="background hidden md:flex" />
    <main
      class="background-stripes border-bordercolor font-roboto border-x-2 md:mx-auto md:w-[90%] md:pt-[100px]"
    >
      <slot ></slot>
    </main>
    <AppFooter class="background" />

    <AppMobileHeader class="background z-50 block md:hidden" />
  </div>
</template>
