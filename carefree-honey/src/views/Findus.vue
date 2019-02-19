<template>
    <v-container>
        <h1>Want to try some of our local honey? Come find us at these markets:</h1>
        <!-- TODO Insert map -->
        <p> Weekly Markets </p>
        <!-- TODO add Details of each market  -->
        <ul> 
            <li>
                Cave Creek Farmers Market - DAY of Week - Hours
                Location
            </li>
            <li>
                Carefree Farmers Market - Thursdays - 3-7 pm 
                Location
            </li>
            <li>
                Anthem Farmers Market
            </li>
            <li>
                High Street Farmers Market 
            </li>
        </ul>
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
