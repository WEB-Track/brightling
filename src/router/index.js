import { createRouter, createWebHistory } from 'vue-router'

// Page View/
import TheHome from '@/pages/TheHome.vue'

const routes = [
  {
    path: '/', name: 'Home', component: TheHome,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/TheAbout.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/TheContact.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router