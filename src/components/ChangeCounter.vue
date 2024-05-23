<template>
    <div>
        <button @click="addOne()">Add 10</button>
    </div>
</template>

<script>
export default {
    methods: {
        addOne() {
            this.$store.dispatch('increment')
        }
    },
};
</script>
