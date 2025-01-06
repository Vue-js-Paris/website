<script setup lang="ts">
import { ref, onMounted } from "vue";

// Définition de l'interface Dot
interface Dot {
  left: number;
  top: number;
  delay: number;
  size: number;
}

const dots = ref<Dot[]>([]);
const NUMBER_OF_DOTS = 20;

onMounted(() => {
  for (let i = 0; i < NUMBER_OF_DOTS; i++) {
    const minSize = 5;
    const maxSize = 10;
    const randomSize =
      Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

    dots.value.push({
      left: Math.random() * window.innerWidth,
      top: (Math.random() * (window.innerHeight * 2)) / 3,
      delay: Math.random() * 4,
      size: randomSize,
    });
  }
});
</script>

<template>
  <div class="dots-container">
    <span
      v-for="(dot, index) in dots"
      :key="index"
      class="dot animate-fade-in-out absolute"
      :style="{
        left: `${dot.left}px`,
        top: `${dot.top}px`,
        animationDelay: `${dot.delay}s`,
        width: `${dot.size}px`,
        height: `${dot.size}px`,
      }"
    >
      <Icon name="icon-park-outline:dot" class="h-full w-full text-white" />
    </span>
  </div>
</template>

<style scoped>
.dots-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66.6667vh;
  overflow: hidden;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.animate-fade-in-out {
  animation: fadeInOut 3s infinite;
}
</style>
