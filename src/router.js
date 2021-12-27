import { createWebHistory, createRouter } from "vue-router"

const routes=[
    {
        path: "/",
        alias:'/todos',
        name:'todos',
        component:()=>import("./components/Todolist")
    },
    {
        path:'todos/:id',
        name:'todos-details',
        component:()=>import("./components/Todo")
    },
    {
        path:'/add',
        name:'add',
        component:()=>import("./components/AddTodo")
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes,
})

export default router;