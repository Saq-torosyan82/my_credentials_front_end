import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
