<template>
    <v-container>
        <v-layout align-center justify-center fill-height >
            <v-flex xs6 >
            <h1>Carefree Honey LLC</h1>
            <p>Local, Raw, Unfiltered</p>
            </v-flex>
            <v-flex xs6 align-center justify-center>
                <img class="logo" src="../assets/Carefreehoney logo.jpg" alt="Logo" >
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>

        <p>
            Since 2012 Carefree Honey has been bringing local, raw, unfiltered honey to locals at farmers markets in Cave Creek, Carefree, Scottsdale, and Anthem.  
        </p>
        <br>
        <p>In 2018 we started to experiemnt with our honey, adding cinnamon, mint, and other mixins for those who appreciate stronger flavors.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ut aut natus, nam dolorum ipsum illo numquam a non sunt asperiores totam delectus laudantium reiciendis quibusdam quia veritatis esse consectetur!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta ullam optio, nisi ut delectus unde ratione vitae illum amet atque dolore sed molestiae repellendus quos, eveniet, autem doloremque? Doloremque, commodi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit corrupti incidunt ex quam sed, at ducimus nisi nesciunt? Iusto dignissimos magni iure fugit voluptatem repellat expedita est fugiat aut.
        </p>
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
.logo{
    max-height: 250px;
    max-width: 250px
}
</style>
