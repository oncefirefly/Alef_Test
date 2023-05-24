<script setup lang="ts">
import { useChildrenStore } from "@/stores/children";
import { useUserStore } from "@/stores/user";

const userData = useUserStore();
const childrenData = useChildrenStore();
</script>

<template>
  <section class="preview__user">
    <h3 class="preview__title">Персональные данные</h3>
    <p class="preview__data" v-if="userData.user.name && userData.user.age">
      {{ userData.user.name }}, {{ userData.user.age }} лет
    </p>
  </section>
  <section class="preview__children">
    <h3 class="preview__title">Дети</h3>
    <div class="preview__children-container">
      <div
        class="preview__child-container"
        v-for="(child, index) in childrenData.children"
        :key="index"
      >
        <p class="preview__data">{{ child.name }}, {{ child.age }} лет</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preview__user {
  margin-bottom: 60px;
}
.preview__title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.preview__data {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.preview__children-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.preview__child-container {
  padding: 10px 20px;
  background: #f1f1f1;
  border-radius: 5px;
  width: max-content;
}
</style>
