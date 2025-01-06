<script setup lang="ts">
const shootingStars = ref([
  { top: "0px", right: "0px", delay: "0s", duration: "1s" },
  { top: "0px", right: "80px", delay: "0.2s", duration: "3s" },
  { top: "80px", right: "0px", delay: "0.4s", duration: "2s" },
  { top: "0px", right: "180px", delay: "0.6s", duration: "1.5s" },
  { top: "0px", right: "600px", delay: "1s", duration: "3s" },
  { top: "300px", right: "0px", delay: "1s", duration: "1.75s" },
  { top: "0px", right: "700px", delay: "1.4s", duration: "1.25s" },
  { top: "0px", right: "1000px", delay: "2.75s", duration: "2.25s" },
]);
</script>

<template>
  <section class="shooting-stars-section">
    <span
      v-for="(star, i) in shootingStars"
      :key="i"
      class="shooting-star"
      :style="{
        top: star.top,
        right: star.right,
        animationDelay: star.delay,
        animationDuration: star.duration,
      }"
    ></span>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.shooting-stars-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66.6667vh;
  overflow: hidden;
  animation: animateBg 50s linear infinite;
}

@keyframes animateBg {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.shooting-star {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 255, 255, 1);
  animation: animateShootingStar 3s linear infinite;
}

.shooting-star::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animateShootingStar {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1500px);
    opacity: 0;
  }
}
</style>
