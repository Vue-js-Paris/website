<script setup lang="ts">
const search = ref("");
const emit = defineEmits(["update-search"]);
function updatedSearch(event: Event) {
  const target = event.target as HTMLInputElement;
  search.value = target.value;
  emit("update-search", search.value);
}
</script>

<template>
  <input
    :value="search"
    @input="updatedSearch"
    placeholder="Rechercher un talk..."
    class="w-fit rounded-2xl bg-transparent p-5 font-montserrat text-white ring-2 ring-white"
  />
</template>
