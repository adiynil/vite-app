import { createStore } from "vuex";

export default createStore({
    state:{
        name: 'vuex'
    },
    mutations: {
        changeName: ({ name }, payload) => {
            console.log(`Old: ${name} New: ${payload}`)
        }
    },
    getters: {},
    actions: {},
    modules: {}
})