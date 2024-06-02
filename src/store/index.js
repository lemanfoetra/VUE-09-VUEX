import { createStore } from 'vuex';
import counterModule from './counter/index.js';

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLogin: false,
        };
    },
    mutations: {},
    actions: {},
    getters: {}
})

export default store;