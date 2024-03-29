import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/login',
        children: [{
                path: 'content',
                name: 'content',
                component: () =>
                    import ('../views/content.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () =>
                    import ('../views/login.vue')
            }
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router