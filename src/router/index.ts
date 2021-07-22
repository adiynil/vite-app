import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue';

const routes = [
    {
        path: "/",
        component: home,
    },
    {
        path: "/HelloWorld",
        component: () => import("../components/HelloWorld.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router