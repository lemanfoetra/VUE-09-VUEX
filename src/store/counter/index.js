import counterMutation from './mutation.js';
import counterAction from './actions.js';
import counterGetters from './getters.js';

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterAction,
    getters: counterGetters,
}
export default counterModule;