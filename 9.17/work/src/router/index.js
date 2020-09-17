import Vue from 'vue'
import VueRouter from 'vue-router'
// import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        redirect: '/home/course',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: 'course',
                name: 'course',
                component: () =>
                    import ("../components/myCourse.vue")
            },
            {
                path: 'email',
                name: 'email',
                component: () =>
                    import ("../components/email.vue")
            },
            {
                path: 'setting',
                name: 'setting',
                component: () =>
                    import ("../components/setting.vue")
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router