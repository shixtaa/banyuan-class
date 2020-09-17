import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import FirstPage from "../views/firstPage.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/page",
        name: "FirstPage",
        component: FirstPage
    }
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

export default router;