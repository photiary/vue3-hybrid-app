<template>
  <h1>C</h1>
  <button @click="router.replace('/b')">Replace B</button>
  <button @click="router.back()">Back B</button>
  <h2>Pinia</h2>
  <p>{{ item.items }}</p>
  <p>
    <button @click="addItem">Add item</button>
  </p>
  <p>
    <button @click="putItem">Put item</button>
  </p>
</template>

<script setup>
import router from "@/router/index.js";

console.log('C: ', history)
console.log('C: ', history.state)

import { useItemStore } from "@/stores/item.js"
const item = useItemStore();

const addItem = () => {
  item.addItem({sn: item.items.length + 1, name: 'abc'});
}

const putItem = () => {
  item.putItem({sn: 2, name: 'def'})
};
</script>

<style scoped lang="scss">

</style>