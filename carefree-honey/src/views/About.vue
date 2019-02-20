<template>
  <div class="about">
    <h1>Carefree Honey LLC</h1>
    <p>Local, Raw, Unfiltered</p>
    <!-- Add logo here  -->
    <img class="logo" src="../assets/Carefreehoney logo.jpg" alt="Logo" >

    <br>
    <p>
        Carefree Honey started when Grandpa thought it would be a fun project to keep bees....Shortly after they arrived summer arrived and he return to a colder climate, leaving the bees to Dragan. Since 2012????? Carefree Honey has been bringing local, raw, unfiltered honey to locals at farmers markets in Cave Creek, Carefree, Scottsdale, and Anthem.  
    </p>
    <br>
    <p>In 2018 we started to experiemnt with our honey, adding cinnamon, mint, and other mixins for those who appreciate stronger flavors. </p>

    <!-- TODO Add Photos of starting days -->
    <img src="https://via.placeholder.com/250x250" alt="Placeholder" >
    <img src="https://via.placeholder.com/250x250" alt="Placeholder" >
    <img src="https://via.placeholder.com/250x250" alt="Placeholder" >

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
.logo{
    max-height: 250px;
    max-width: 250px
}
</style>
