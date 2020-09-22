import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./mutation-type";
Vue.use(Vuex)

import login from './login'
const store = new Vuex.Store({
    state: {
        // list: JSON.parse(localStorage.getItem('userInfo')) || {}
    },
    mutations: {
        // [types.GET_USER_INFO](state, obj) {
        //     state.list = obj
        // }
    },
    actions: {
        // getInfo({ commit }, obj) {
        //     localStorage.setItem('userInfo', JSON.stringify(obj))
        //     commit(types.GET_USER_INFO, obj)
        // }
    },
    modules: {
        login
    }
})

export default store