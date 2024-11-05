<template>
  <router-view />

  <router-view name="fade" v-slot="{ Component }">
    <transition name="fade-out">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>

</script>

<style scoped>

</style>
