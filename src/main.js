import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 如果需要使用中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(store)
   .use(router)
   .use(pinia)
   .use(ElementPlus, {
     locale: zhCn,
   })
   .mount('#app')
