import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter = state.counter - payload.value
        },
        setAuth(state, payload) {
            state.isLogin = payload.isAuth
        }
    },
    actions: {
        increment(context) { // nama method action bisa sama dengan mutation
            // console.log(context);
            // setTimeout(function () {
            context.commit('increment') // memanggil method mutation
            // }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
        login(context) {
            console.log('login');
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter;
        },
        normalCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        },
        userIsAuth(state) {
            return state.isLogin;
        }
    },
}

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

const app = createApp(App);
app.use(store);
app.mount('#app');
