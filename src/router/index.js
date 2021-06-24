import { Vue } from 'vue'
import { VueRouter } from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'add',
        component: () =>
            import ('../components/UserCreate.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () =>
            import ('../components/UserList.vue')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () =>
            import ('../components/UserEdit.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router