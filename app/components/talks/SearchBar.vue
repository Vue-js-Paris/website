<script setup lang="ts">
const search = ref("");

const emit = defineEmits<{
  (e: "update-search", value: string): void;
}>();

function updatedSearch(event: Event) {
  const target = event.target as HTMLInputElement;
  search.value = target.value;
  emit("update-search", search.value);
}
</script>

<template>
  <input
    :value="search"
    placeholder="Rechercher un talk..."
    class="font-montserrat w-fit rounded-2xl bg-transparent p-5 text-white ring-2 ring-white"
    @input="updatedSearch"
  />
</template>
