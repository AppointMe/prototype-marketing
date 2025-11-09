import { createRouter, createWebHistory } from 'vue-router'
import ClientsLanding from '@/pages/ClientsLanding.vue'
import PartnersLanding from '@/pages/PartnersLanding.vue'

/*

    Alejandro Azurdia (11/08/2025) :
    Para indexacion y posicionamiento SEO, cada ruta tiene una meta propiedad 'canonical' 
    que define la URL canónica de la página.

    Basicamente es esto, pero en vue-router:
    <link rel="canonical" href="https://marketing.appointme.today/clients" />
    <link rel="canonical" href="https://marketing.appointme.today/partners" />

*/

const routes = [
    { path: '/', redirect: '/clients' },
    { path: '/clients', component: ClientsLanding, meta: { canonical: 'https://marketing.appointme.today/clients' } },
    { path: '/partners', component: PartnersLanding, meta: { canonical: 'https://marketing.appointme.today/partners' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router