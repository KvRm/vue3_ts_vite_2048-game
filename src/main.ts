import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'

library.add(faLightbulb)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app')
