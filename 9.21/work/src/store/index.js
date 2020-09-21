import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './login'
const store = new Vuex.Store({
    state: {

    },
    mutations: {

    },
    modules: {
        login
    }
})

export default store