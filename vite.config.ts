import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	appType: "spa",
	server: {
		port: 9090
	},
	base: '/vue3_ts_vite_2048-game/'
})
