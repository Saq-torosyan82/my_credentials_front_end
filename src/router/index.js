import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';

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
        component: () => import('@/components/Sites.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'applications',
        name: 'applications',
        component: () => import('@/components/Applications.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'apis',
        name: 'apis',
        component: () => import('@/components/Apis.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ],
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach(async (to) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      return {
        name: '/',
      } 
    }
  }
  
  return true;
});

export default router;
