import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: Index
    },

    {
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
                redirect: '/home/setting/perinfo',
                component: () =>
                    import ("../components/setting.vue"),
                children: [{
                        name: 'perinfo',
                        path: 'perinfo',
                        component: () =>
                            import ("../components/perinfo.vue")
                    },
                    {
                        name: 'countinfo',
                        path: 'countinfo',
                        component: () =>
                            import ("../components/countinfo.vue")
                    }
                ]
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