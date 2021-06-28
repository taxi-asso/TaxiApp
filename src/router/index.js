import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/list',
        name: 'list',
        component: () =>
            import ('../components/UserList')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () =>
            import ('../components/UserEdit')
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: () =>
            import ('../views/Contact')
    },
    {
        path: '/Services',
        name: 'Services',
        component: () =>
            import ('../views/Services')
    },
    {
        path: '/Reservation',
        name: 'Reservation',
        component: () =>
            import ('../views/Reservation')
    },
    {
        path: '/UserConnexion',
        name: 'UserConnexion',
        component: () =>
            import ('../views/UserConnexion')
    },
    {
        path: '/Connexion',
        name: 'Connexion',
        component: () =>
            import ('../components/Connexion')
    },
    {
        path: '/CreateAccount',
        name: 'CreateAccount',
        component: () =>
            import ('../components/CreateAccount')
    },
    {
        path: '/CreateClient',
        name: 'CreateClient',
        component: () =>
            import ('../components/CreateClientAccount')
    },
    {
        path: '/CreateTaxi',
        name: 'CreateTaxi',
        component: () =>
            import ('../components/CreateTaxiAccount')
    },
    {
        path: '/UserInterface',
        name: 'UserInterface',
        component: () =>
            import ('../views/UserInterface')
    },
    {
        path: '/TaxiInterface',
        name: 'TaxiInterface',
        component: () =>
            import ('../views/TaxiInterface')
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;

//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')