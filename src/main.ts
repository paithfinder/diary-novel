import { createApp } from 'vue'
import 'lib-flexible/flexible'

import App from './App.vue'
import pinia from './stores/index'
import router from './router'
import './styles/main.css'
import persist from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia().use(persist))
app.use(router)
app.use(pinia)
app.mount('#app')
