import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vue3_ts_vite_2048-game',
    name: 'main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/vue3_ts_vite_2048-game/404',
    name: '404',
    component: () => import('../views/Error404View.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
      name: '404',
    },
  },
]

const index = createRouter({
  history: createWebHistory(),
  routes,
})

export default index