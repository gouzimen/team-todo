import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import socket from './js/socket';
import './js/jquery';

// 5. 创建并挂载根实例
const app = createApp(App)
app.use(
    router,
)
app.mount('#app')

app.config.globalProperties.$socket = socket