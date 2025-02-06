<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="scroll-smooth">
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
