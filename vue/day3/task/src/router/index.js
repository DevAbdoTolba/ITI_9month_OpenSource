import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        component: HomeView
    },
    { 
        path: '/about',
        component: AboutView
    },
    { 
        path: '/products/:id',
        name: "products",
        component: ProductView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router