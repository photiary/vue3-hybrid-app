<template>
  <div class="t-window" ref="layer">
    <h1 @click="router.back()" ref="header">< Keypad</h1>
    <div class="info-box">
      <p>initialVisualViewportHeight: {{ initialVisualViewportHeight }}</p>
      <p>currentVisualViewportHeight: {{ currentVisualViewportHeight }}</p>
      <p>keypadHeight: {{ keypadHeight }}</p>
      <p>isOpenKeypad: {{ isOpenKeypad }}</p>
      <p>visualViewportOffsetTop: {{ visualViewportOffsetTop }}</p>
      <p>headerPositionY: {{ headerPositionY }}</p>
    </div>
    <div>
      <p><input type="text" /></p>
      <p>01</p>
      <p>02</p>
      <p>03</p>
      <p>04</p>
      <p>05</p>
      <p>06</p>
      <p>07</p>
      <p>08</p>
      <p>09</p>
      <p>10</p>
      <p><input type="text" /></p>
      <p><button @click="goToTop">ScrollTo top</button></p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>19</p>
      <p>20</p>
    </div>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import {computed, onBeforeUnmount, onMounted, ref, useTemplateRef} from "vue";

const layerElement = useTemplateRef('layer')
const headerElement = useTemplateRef('header')

const initialVisualViewportHeight = window.visualViewport.height;
const currentVisualViewportHeight = ref(0);
const keypadHeight = ref(0);
const visualViewportOffsetTop = ref(0);
const headerPositionY = ref(0);

const isOpenKeypad = computed(() => {
  return keypadHeight.value > 0;
});

const calculateKeypadHeight =  () => {
  return initialVisualViewportHeight - window.visualViewport.height;
}

const iOs = {
  handleKeypadViewport: () => {
    currentVisualViewportHeight.value = window.visualViewport.height
    keypadHeight.value = calculateKeypadHeight();

    // if (isOpenKeypad) {
    //   layerElement.value.style.marginTop = `${keypadHeight.value}px`
    //   layerElement.value.style.height = `${initialVisualViewportHeight - keypadHeight.value}px`
    // } else {
    //   layerElement.value.style.removeProperty('height');
    //   layerElement.value.style.removeProperty('margin-top');
    // }
  },
  handleScrollViewport: () => {
    visualViewportOffsetTop.value = window.visualViewport.offsetTop;
  },
  handleScrollLayer: () => {
    headerPositionY.value = headerElement.value.getBoundingClientRect().y;
  }
}

onMounted(() => {
  window.visualViewport.addEventListener('resize', iOs.handleKeypadViewport);
  window.visualViewport.addEventListener('scroll', iOs.handleScrollViewport);
  layerElement.value.addEventListener('scroll', iOs.handleScrollLayer);
})

onBeforeUnmount(() => {
  window.visualViewport.removeEventListener('resize', iOs.handleKeypadViewport);
  window.visualViewport.removeEventListener("scroll", iOs.handleScrollViewport);
  layerElement.value.removeEventListener('scroll', iOs.handleScrollLayer);
})

// ---------------------------------------------------------------------------------------------------------------------
//
// ---------------------------------------------------------------------------------------------------------------------
const goToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

</script>

<style scoped lang="scss">
.t-window {
  border: solid orange 0.5rem;
  background-color: white;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: 0.9;
}

.info-box {
  background-color: cadetblue;
  position: fixed;
}
</style>