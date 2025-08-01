import { createRouter, createWebHistory } from 'vue-router'
import ClientsLanding from '@/pages/ClientsLanding.vue'
import PartnersLanding from '@/pages/PartnersLanding.vue'

const routes = [
    { path: '/', redirect: '/clients' },
    { path: '/clients', component: ClientsLanding },
    { path: '/partners', component: PartnersLanding }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router