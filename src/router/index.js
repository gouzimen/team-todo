import { createRouter, createWebHashHistory } from 'vue-router'

const MainPage = () => import('../views/MainPage.vue');
const Panel = () => import('../views/Panel.vue');
const AddProject = () => import('../views/AddProject.vue');
const Project = () => import('../views/Project.vue');
const SelectUser = () => import('../views/SelectUser.vue');
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/panel/',
        name: 'Panel',
        component: Panel
    },
    {
        path: '/panel/new',
        name: 'AddProject',
        component: AddProject
    },
    {
        path:'/panel/project',
        name: 'SelectUser',
        component: SelectUser,
        props: true
    },
    {
        path: '/panel/project',
        name: 'Project',
        component: Project
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // 定义的路由
})

export default router