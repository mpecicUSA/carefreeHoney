<template>
    <v-container>
        
        <v-layout>
            <!-- TODO add a for loop to iterate over products and create single product with values inside for each product -->
            <!-- <v-for="product in products" :key="product.id" >  -->
                <SingleProduct  /> 
            {{ getProducts }}
        </v-layout>
    </v-container>

</template>


<script>
// import SingleProduct from "../components/SingleProduct"

export default {
    components: {
        // SingleProduct
    },
    data(){
        return { 
            // useful for data binding in forms most commonly used as a local state,
            // also useful with v-model in form inputs
            
        }
    }, 
//     mounted() {
//     this.$http.get('localhost:8000/products').then(res => (this.products = res.json)).catch(error => console.log(error))
// },
    mounted(){
        // life cycle method. good for executing a dispatch to populate your data
        // this.$store.dispatch('getAllLinks', optionalPayload);
        // getProducts: function() {
        //     this.$store.dispatch("getAllProducts")
        // }
        getProducts: () => {
            return this.$store.dispatch('fetchProductsData')
        }
    },
    methods: {
        // this is a static method you have exectute example submit on form 
        // these methods are executed via an event
        // use for event handling
    },
    computed:{
        // these are bound to store, recalced any time you change the corresponding store value
        // these values are good for data binding, for example, iterating over a lsit of values
        // shelves() {
        //     return this.$store.state.products 
        // }
    }
}
</script>


<style>

</style>
