import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'main',
		component: () => import('../views/MainView.vue'),
	},
	{
		path: '/404',
		name: '404',
		component: () => import('../views/Error404View.vue'),
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '404'
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router