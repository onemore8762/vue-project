import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import TaskPage from "@/pages/TaskPage.vue";

const routes = [
    {
        path: '/',
        component: PostPage
    },
    {
        path: '/task',
        component: TaskPage
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
