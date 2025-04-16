import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import Experience from './views/Experience.vue'
import Contribute from './views/Contribute.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/contribute', component: Contribute },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
