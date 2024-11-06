import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// Vue-router
import router from '@/router'

// Pinia
const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
