import { createStore } from "vuex";

export default createStore({
    state:{
        name: 'vuex'
    },
    mutations: {
        changeName: (state, payload) => {
            console.log(`Old: ${state.name} New: ${payload}`)
            state.name = payload
        }
    },
    getters: {},
    actions: {},
    modules: {}
})