<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ images: string[]; direction?: "left" | "right" }>();

const animationClass = computed(() =>
  props.direction === "right" ? "animate-scroll-right" : "animate-scroll-left",
);
</script>

<template>
  <div class="relative h-36 w-full overflow-hidden md:h-64">
    <div class="flex w-max" :class="animationClass">
      <div
        v-for="(img, index) in [...props.images, ...props.images]"
        :key="index"
        class="h-36 w-[250px] shrink-0 pr-5 md:h-64 md:w-[500px] md:pr-10"
      >
        <img
          :src="img"
          alt="carousel image"
          class="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}
</style>
