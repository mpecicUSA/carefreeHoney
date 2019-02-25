<template>
    <v-container>
    <v-card>
        <v-card-title>
        Contact us: 
        </v-card-title>
        <v-card-text>

        <ul> 
            <li>
                <a href="mailto:carefreehoney@gmail.com">carefreehoney@gmail.com</a>
            </li>
            <li>
                Phone: 480-636-9859
            </li>
            <li>
                facebook: <a href="www.facebook.com/carefreehoney" >fb.com/carefreehoney</a>
            </li>
        </ul>
        </v-card-text>
    </v-card>
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