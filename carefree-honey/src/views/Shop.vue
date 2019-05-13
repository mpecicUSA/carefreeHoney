<template>
    <!-- largest container -->
    <v-container> 
        <!-- top row -->
        <v-layout row>
            <v-btn v-show="this.$store.state.user.admin" route to="/products/add">Add a new item!</v-btn>
        </v-layout>
        <!-- aside -->
        <v-layout justify-space-around row fill-height >
            <v-flex row xs3> 
                <p>Filter: </p>

            <v-switch
                v-model="raw"
                label="Raw"
                color="orange"
                @click="rawFilter"
                >
            </v-switch>
            <v-switch
                v-model="infused"
                label="Infused"
                color="orange"
                >
            </v-switch>
            

            </v-flex>
            <!-- main content  -->
            <v-flex xs9 row wrap>
                <SingleProduct v-for="product in products" :key="product.id" :products="product" /> 
            </v-flex>
        </v-layout>
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
            raw: true,
            infused: true
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
        rawFilter: function(){
            console.log("Raw was hit!");
        }
        // this is a static method you have exectute example submit on form 
        // these methods are executed via an event
        // use for event handling
    },
    computed: {
        // these are bound to store, recalced any time you change the corresponding store value
        // these values are good for data binding, for example, iterating over a list of values
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
