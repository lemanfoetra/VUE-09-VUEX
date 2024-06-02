export default {
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
}