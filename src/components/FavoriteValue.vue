<template>
    <div>
        <p>We do more... {{ counter }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['numbers/normalCounter']
        }
    }
}
</script>