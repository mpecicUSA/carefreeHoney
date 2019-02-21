<template>
    <v-container>
        <v-layout>
            <v-btn v-show="this.$store.state.user.admin" route to="/products/add">Add a new item!</v-btn>
        </v-layout>
        <!-- <v-layout row wrap> -->
            <SingleProduct v-for="product in products" :key="product.id" :products="product" />             
        <!-- </v-layout> -->
    </v-container>

</template> 


<script>
import SingleProduct from "../components/SingleProduct"
export default {
    components: {
        SingleProduct
    },
    data(){
        return { 
            // useful for data binding in forms most commonly used as a local state,
            // also useful with v-model in form inputs
        }
    }, 
    created() {
        this.$store.dispatch('fetchProductsData');
    },
    mounted:{
        // life cycle method. good for executing a dispatch to populate your data
        // this.$store.dispatch('getAllLinks', optionalPayload);
        getProducts: function() {
            this.$store.dispatch("getAllProducts")
        },
        getUser: function() {
            return this.$store.dispatch('fetchUser') 
        }
    },
    methods: {
        // this is a static method you have exectute example submit on form 
        // these methods are executed via an event
        // use for event handling
    },
    computed: {
        // these are bound to store, recalced any time you change the corresponding store value
        // these values are good for data binding, for example, iterating over a lsit of values
        products() {
            return this.$store.getters.getProducts
        },
        getCart(){
            return this.$store.getters.getCart
        }
    }
}
</script>


<style>

</style>
