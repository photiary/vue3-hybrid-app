<template>
  <h1>B</h1>
  <p>
    <a href="https://router.vuejs.kr/guide/essentials/navigation#Navigate-to-a-different-location">
      https://router.vuejs.kr/guide/essentials/navigation#Navigate-to-a-different-location
    </a>
  </p>
  <button @click="router.push('/c')">Push C</button>
  <p>
    <a href="https://router.vuejs.kr/guide/essentials/navigation#Replace-current-location">
      https://router.vuejs.kr/guide/essentials/navigation#Replace-current-location
    </a>
  </p>
  <button @click="router.replace('/c')">Replace C</button>
</template>

<script setup>

import router from "@/router/index.js";

console.log('B: ', history)
console.log('B: ', history.state)
</script>

<style scoped lang="scss">

</style>