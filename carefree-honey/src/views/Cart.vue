<template>
    <v-container>
        <v-layout>
            <h1 v-if="this.$store.state.isLoggedIn"> Welcome {{this.$store.state.user.firstName}}</h1>
            <h1 v-else>Welcome Guest!</h1>
        </v-layout>

        <v-layout v-for="(item, key) in cart" :key="item.id" >
            <ul>
                <li>Product title{{key}} -- Quantity{{item}}</li>
            </ul>
        </v-layout>
        <v-layout>
        <v-btn> Checkout</v-btn>
        <!-- Change this to stripe integrated -->
        </v-layout>
    </v-container>

</template>

<script>
export default {
    computed: {
        cart(){
            return this.$store.getters.getCart
        }
    },
    stripe: {
        
    }
}
</script>


<style>

</style>
