import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('../views/ProductsView.vue')
        },
        {
            path: '/accessories',
            name: 'accessories',
            component: () => import('../views/AccessoriesView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        },
        {
            path: '/voucher',
            name: 'voucher',
            component: () => import('../views/VoucherView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../views/CartView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue')
        }
    ]
})

export default router
