import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue';

const routes = [
    {
        path: "/",
        name: 'home',
        component: home,
        meta: {
            title: "home"
        }
    },
    {
        path: "/HelloWorld",
        component: () => import("../components/HelloWorld.vue"),
        meta: {
            title: "helloworld"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((from, to, next) => {
    let { title } = from.meta
    if(title) document.title = title as string
    next()
})

export default router