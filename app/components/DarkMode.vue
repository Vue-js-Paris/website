<script setup lang="ts">
const colorMode = useColorMode();
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  colorMode.preference = isDark.value ? "dark" : "light";
};

onMounted(() => {
  isDark.value = colorMode.preference === "dark";
});
</script>

<template>
  <label class="grid cursor-pointer place-items-center">
    <input
      type="checkbox"
      value="synthwave"
      class="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
      :checked="isDark"
      @click="toggleTheme"
      @keyup.enter="toggleTheme"
    />
    <svg
      class="col-start-1 row-start-1 fill-base-100 stroke-base-100"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
    <svg
      class="col-start-2 row-start-1 fill-base-100 stroke-base-100"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
</template>
