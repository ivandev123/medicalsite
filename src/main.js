import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/_carousel.scss'
import './assets/scss/_globalStyles.scss';

createApp(App).use(store).use(router).mount('#app')
