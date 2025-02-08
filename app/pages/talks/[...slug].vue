<script setup lang="ts">
import { useRoute } from "vue-router";

const { path } = useRoute();

useAsyncData("content-${path}", () =>
  queryContent("talks").where({ _path: path }).findOne(),
);
</script>

<template>
  <section class="w-full">
    <ContentDoc />
  </section>
</template>
