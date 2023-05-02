import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/components/Dashboard.vue'),
    children: [
      {
        path: 'sites',
        name: 'sites',
        component: () => import('@/components/Sites.vue')
      },
      {
        path: 'applications',
        name: 'applications',
        component: () => import('@/components/Applications.vue')
      },
      {
        path: 'apis',
        name: 'apis',
        component: () => import('@/components/Apis.vue')
      },
    ],
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
