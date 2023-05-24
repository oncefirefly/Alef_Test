<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__logo logo">
      <img src="@/assets/img/alef_logo.png" alt="logo" />
    </div>
    <nav class="header__nav nav">
      <RouterLink to="/">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 76px;
  padding-inline: 90px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
}

.header__nav {
  position: absolute;
  left: 50%;
}

.nav a {
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: rgba(17, 17, 17, 0.48);
}

.nav a:not(:last-child) {
  margin-right: 24px;
}

.nav a.router-link-active,
.nav a.router-link-exact-active {
  color: #111;
}
</style>
