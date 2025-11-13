import { createRouter, createWebHistory } from 'vue-router'
import ClientsLanding from '@/pages/ClientsLanding.vue'
import PartnersLanding from '@/pages/PartnersLanding.vue'
import BetaTestersForm from '@pages/BetaTestersForm.vue'

/*

    Alejandro Azurdia (11/08/2025) :
    Para indexacion y posicionamiento SEO, cada ruta tiene una meta propiedad 'canonical' 
    que define la URL canónica de la página.

    Basicamente es esto, pero en vue-router:
    <link rel="canonical" href="https://marketing.appointme.today/" />
    <link rel="canonical" href="https://marketing.appointme.today/partners" />

*/

const routes = [
    { path: '/', component: ClientsLanding, meta: { canonical: 'https://marketing.appointme.today/' } },
    { path: '/clients', redirect: '/' },
    { path: '/partners', component: PartnersLanding, meta: { canonical: 'https://marketing.appointme.today/partners' } },
    { path: '/beta-testers', component: BetaTestersForm, meta: { canonical: 'https://marketing.appointme.today/beta-testers' } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router