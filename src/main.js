import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        increase(state, payload) {
            state.counter = state.counter - payload.value
        }
    },
    actions: {
        increment(context) { // nama method action bisa sama dengan mutation
            setTimeout(function () {
                context.commit('increment') // memanggil method mutation
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload)
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
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
