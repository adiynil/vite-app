import { createApp } from 'vue'
// import { Button } from 'ant-design-vue'
import antd from 'ant-design-vue'
import App from './App.vue'
// import "ant-design-vue/dist/antd.css";

const app = createApp(App)
// app.use(Button).mount('#app')
app.use(antd).mount('#app')

