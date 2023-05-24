<script setup lang="ts">
import { RouterView } from "vue-router";
import AlefHeader from "./components/AlefHeader.vue";
import AlefFooter from "./components/AlefFooter.vue";
</script>

<template>
  <AlefHeader />
  <RouterView />
  <AlefFooter />
</template>

<style scoped></style>
