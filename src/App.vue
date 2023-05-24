<script setup lang="ts">
import { RouterView } from "vue-router";
import AlefHeader from "./components/AlefHeader.vue";
import AlefFooter from "./components/AlefFooter.vue";
</script>

<template>
  <AlefHeader />
  <main class="main">
    <RouterView />
  </main>
  <AlefFooter />
</template>

<style scoped>
.main {
  margin: 30px auto;
  max-width: 616px;
}
</style>
