import { createRouter, createWebHistory } from 'vue-router'

import TheHome from '@/pages/TheHome.vue'
import TheAbout from '@/pages/TheAbout.vue'
import TheContact from '@/pages/TheContact.vue'

const routes = [
 { path: '/', name: 'Home', component: TheHome },
 { path: '/about', name: 'About', component: TheAbout },
 { path: '/contact', name: 'Contact', component: TheContact },
]

const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router