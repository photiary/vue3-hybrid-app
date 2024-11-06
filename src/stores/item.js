import { defineStore, acceptHMRUpdate } from 'pinia'
import {computed, reactive, ref} from "vue";


export const useItemStore = defineStore('item',  () => {
  const rawItems = ref([]);
  // const rawItems = reactive([]);

  // 화면 컴포넌트에서 사용하는 구조로 변환
  const items = computed(() => rawItems.value);

  const addItem = (item) => {
    rawItems.value.push(item);
  }

  const putItem = (item) => {
    const foundIndex = rawItems.value.findIndex(el => el.sn === item.sn);
    if (foundIndex === -1) {
      addItem(item)
    } else {
      rawItems.value[foundIndex] = item;
    }
  }
  
  return { items, addItem, putItem }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemStore, import.meta.hot))
}
