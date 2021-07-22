import { createApp } from 'vue'
// import { Button } from 'ant-design-vue'
import antd from 'ant-design-vue'
import App from './App.vue'
// import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";

const app = createApp(App)
// app.use(Button).mount('#app')
app.use(router).use(store).use(antd).mount('#app')

