<template>
  <h1>A</h1>
  <button @click="router.push('/b')">Push B</button>
  <p>
    사이트 마다 `window.history.state` 다르다.
    링크: https://developer.mozilla.org/ko/docs/Web/API/History/state
    현 history에 위치한 값입니다. 이 값은 pushState() 또는 replaceState()을 사용할때까지 null 값을 가집니다.
  </p>
</template>

<script setup>
import router from "@/router/index.js";

console.log('A: ', history)
console.log('A: ', history.state)
</script>

<style scoped lang="scss">

</style>