<template>
  <div class="t-window hide-scrollbar">
    <h1 @click="router.back()">< Full layer</h1>
    <div>
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
import { useRouteLeaveController } from '@/composables/useRouteLeaveController'

useRouteLeaveController(
  (to, from, next) => {
    next(confirm('OK?'))
  },
  (to, from, next) => {
    next(true)
  },
)
</script>

<style lang="scss" scoped>
.t-window {
  border: solid blue 0.5rem;
  background-color: white;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute; /* 레이어를 겹쳐서 표한하기위해 자식은 절대적 위치 설정 */
  opacity: 0.5;
}

div {
  p {
    margin-left: 2rem;
  }
}
</style>