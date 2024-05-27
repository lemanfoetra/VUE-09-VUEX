<template>
    <div>
        <button @click="increment()">Add 1</button>
        <button @click="increase({ value: 1 })">Increase 1</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment')
        // }
        ...mapActions(['increment', 'increase'])
    },
};
</script>
