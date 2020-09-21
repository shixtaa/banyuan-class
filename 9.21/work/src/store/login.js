const login = {
    state: {
        list: {}
    },
    mutations: {
        getInfo(state, obj) {
            state.list = obj
            console.log(state)
        },
        saveInfo(state, obj) {
            state.list = obj
        }
    }
}
export default login