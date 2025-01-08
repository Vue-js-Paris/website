<script setup lang="ts">
const { width } = useWindowSize();

const isMobile = computed(() => width.value < 768);
</script>

<template>
  <div>
    <ClientOnly>
      <AppHeader v-if="!isMobile" />
    </ClientOnly>
    <main>
      <slot />
    </main>
    <AppFooter />
    <ClientOnly>
      <MobileHeader v-if="isMobile" />
    </ClientOnly>
  </div>
</template>
