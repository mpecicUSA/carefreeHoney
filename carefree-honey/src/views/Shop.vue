<template>
    <v-container>
        Hello this is the shop page

        <v-layout>

                <this-is-an-example></this-is-an-example>

        </v-layout>
    </v-container>

</template>


<script>
import Example from "../components/Example.vue"
export default {
    components: {
        'this-is-an-example': Example,
    }
}
</script>


<style>

</style>
