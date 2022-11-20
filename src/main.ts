import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import index from './router'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBackward, faComputerMouse, faKeyboard, faLightbulb, faRotateRight } from '@fortawesome/free-solid-svg-icons'

library.add(faLightbulb, faRotateRight, faBackward, faComputerMouse, faKeyboard)

const pinia = createPinia()

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(pinia)
  .use(index)
  .mount('#app')
