<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch('numbers/login')
        },
        logout() {
            this.$store.dispatch('numbers/logout')
        },
    },
    computed: {
        isAuth() {
            return this.$store.getters['numbers/userIsAuth']
        }
    }
}
</script>