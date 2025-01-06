<script setup lang="ts">
import { useRoute } from "vue-router";

const { path } = useRoute();

const { data: article } = useAsyncData("content-${path}", () =>
  queryContent("talks").where({ _path: path }).findOne(),
);
</script>

<template>
  <div class="prose">
    <ContentDoc />
  </div>
</template>
