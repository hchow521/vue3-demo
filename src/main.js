import { createApp } from 'vue'
// import 'vant/lib/index.css';
// import { Toast } from 'vant';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// app.use(Toast)
app.use(ElementPlus)
app.use(router)
app.use(store)
// 避免响应式变量.value自动解析的警告
app.config.unwrapInjectedRef = true
app.mount('#app')

