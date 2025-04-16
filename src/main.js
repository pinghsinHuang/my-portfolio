import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' // 如果要用 Bootstrap 的 JS 功能（選擇性）

createApp(App).use(router).mount('#app')