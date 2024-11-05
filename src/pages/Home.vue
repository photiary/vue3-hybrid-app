<template>
  <div class="t-window hide-scrollbar">
    <h1>Home</h1>
    <router-link to="/full-layer">Full layer (Element 교체)</router-link>
    <br>
    <router-link to="/fade-full-layer">Fade Full layer (Element 교체)</router-link>
    <br>
    <router-link to="/home/full-layer">Full layer (Element 추가)</router-link>
    <br>
    <router-link to="/home/keypad">Keypad</router-link>
    <br>
    <br>
    <router-link to="/home/bottom-sheet">Bottom sheet</router-link>
    <br>
    <button @click="showDialog">Dialog</button>
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
      <p>
        <router-link to="/home/full-layer">Full layer (Element 추가)</router-link>
      </p>
      <p>
        <router-link to="/home/bottom-sheet">Bottom sheet</router-link>
      </p>
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
    <router-link to="/home/full-layer">Full layer (Element 추가)</router-link>
    <br>
    <router-link to="/home/bottom-sheet">Bottom sheet</router-link>
    <br>
    <button @click="showDialog">Dialog</button>
  </div>

  <router-view name="fullLayer" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <router-view name="bottomSheet" v-slot="{ Component }">
    <transition name="vertical-slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <dialog class="t-dialog" ref="dialog">
    <div class="t-dialog-contents">
      <p>Dialog</p>
      <p><button @click="closeDialog">Close</button></p>
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
    </div>
  </dialog>
</template>

<script setup>
import {onMounted, useTemplateRef} from "vue";

const dialogElement = useTemplateRef('dialog')

const showDialog = () => {
  dialogElement.value.showModal();
}

const closeDialog = () => {
  dialogElement.value.close();
}


onMounted(()=>{
  dialogElement.value.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
      dialogElement.value.close();
    }
  });
});

</script>

<style lang="scss" scoped>
.t-window {
  border: solid red 0.5rem;
  background-color: white;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute; /* 레이어를 겹쳐서 표한하기위해 자식은 절대적 위치 설정 */
  overflow-y: scroll; /* t-window 박스에서 위아래로만 스크롤 가능 */
}

$half-dialog-height: 50vh;

.t-dialog {
  border: solid greenyellow 3px;
  background-color: greenyellow;
  margin-left: 0;
  margin-bottom: 0;
  width: 100vw;
  height: $half-dialog-height;

  &::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }

  .t-dialog-contents {
    border: solid orange 0.5rem;
  }
}
</style>