<template>
    <div>
        <h1>This is our honey page</h1>
        <img class="ourHoney" src='../assets/stock-photo-honey-style-a-jar-of-natural-honey-and-honey-comb-in-the-pan-on-black-rustic-background-387216472.jpg' alt="Honey on table Fall seasonal theme">
        <h2> Subnavigation </h2>
        <ul>
            <li> 
                Straight from the Hive
            </li>
            <li>
                Speciality Honey
            </li>
            <li>
                Apparel 
            </li>
        </ul>
    </div>
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
.ourHoney{
    width: 100vw;
    height: 100vh

}
</style>
