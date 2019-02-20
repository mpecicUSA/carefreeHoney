<template>
    <div>
        This is the cart: {{ cart }}
    </div>

</template>

<script>
export default {
    computed: {
        cart(){
            return this.$store.getters.getCart
        }
    }
}
</script>


<style>

</style>
