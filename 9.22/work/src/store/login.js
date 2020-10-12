import * as types from "./mutation-type";
const login = {
    namespaced: true,
    state: {
        list: JSON.parse(localStorage.getItem('userInfo')) || {}
    },
    mutations: {
        [types.GET_USER_INFO](state, obj) {
            state.list = obj
        }
    },
    actions: {
        getInfo({ commit }, obj) {
            localStorage.setItem('userInfo', JSON.stringify(obj))
            commit(types.GET_USER_INFO, obj)
        }
    }
}
export default login