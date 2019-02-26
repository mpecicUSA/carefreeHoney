<template>
    <v-container>
        <v-layout>
        <v-flex xs6 >

        <v-img
        src="https://c8.alamy.com/comp/F2G2ET/zagreb-croatia-honey-for-sale-on-dolac-farmers-market-F2G2ET.jpg"
        >
        </v-img>
        </v-flex>
        <v-flex xs6 class="right">


        <h3> Weekly Markets </h3>

        <ul> 
            <li>
                Carefree Farmers Market - Thursdays - 3-7 pm 
            </li>
            <li>
                Cave Creek Farmers Market - Fridays - 9am to 1pm 
            </li>
            <li>
                Farmers Market North Scottsdale - Saturdays - 9am to 1pm 
            </li>
            <li>
                Anthem Farmers Market - Sunday - 9am -1pm 
            </li>
            <li>
                High Street Farmers Market - Sunday - 10am to 1pm 
            </li>
        </ul>
        </v-flex>
        </v-layout>
    </v-container> 
</template>

<script>
export default {
    data(){
        return { 
            // useful for data binding in forms most commonly used as a local state,
            // also useful with v-model in form inputs
        }
    },
    mounted(){
        // life cycle method. good for executing a dispatch to populate your data
        // this.$store.dispatch('getAllLinks', optionalPayload);
    },
    methods: function() {
        // this is a static method you have exectute example submit on form 
        // these methods are executed via an event
        // use for event handling
    },
    computed: function(){
        // these are bound to store, recalced any time you change the corresponding store value
        // these values are good for data binding, for example, iterating over a lsit of values
    }
}
</script>

<style scoped>
.right li{
    font-size: 15px;
}
</style>

