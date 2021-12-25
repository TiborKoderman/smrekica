import {createApp} from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


createApp(App).use(router, Vue).mount('#app')
