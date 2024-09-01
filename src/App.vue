<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/make">Make</RouterLink>
      <RouterLink to="/Partners">Partners</RouterLink>
      <RouterLink to="/Premium">Premium</RouterLink>
      <RouterLink to="/Cart">Cart</RouterLink>
      <RouterLink to="/Member">Member</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.nav {
  width: 100%;
  min-width: 375px;
  margin: 0 0 10px 0;
  background-image: linear-gradient(270deg,
      rgba(230, 217, 114, 0.6),
      rgba(136, 215, 255, 0.6));
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 1000;
  a {
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }
}
</style>
