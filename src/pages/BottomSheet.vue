<template>
  <div class="t-bottom-sheet">
    <h1 @click="router.back()">< Bottom sheet</h1>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
</script>

<style scoped lang="scss">
.t-bottom-sheet {
  border: solid green 0.5rem;
  box-sizing: border-box;
  background-color: palegreen;
  bottom: 0;
  width: 100vw;
  height: 50vh;
  position: fixed;
}
</style>