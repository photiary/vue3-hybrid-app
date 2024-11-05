<template>
  <h1>C</h1>
  <button @click="router.replace('/b')">Replace B</button>
  <button @click="router.back()">Back B</button>
</template>

<script setup>
import router from "@/router/index.js";

console.log('C: ', history)
console.log('C: ', history.state)
</script>

<style scoped lang="scss">

</style>