import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingPage.vue'),
    },
  ],
})

export default router
