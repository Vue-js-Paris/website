<script setup lang="ts">
const search = defineModel<string>("modelValue", {
  default: "",
});
</script>

<template>
  <input
    v-model="search"
    placeholder="Rechercher un talk..."
    class="w-fit rounded-2xl bg-transparent p-5 font-montserrat text-white ring-2 ring-white"
  />
</template>
