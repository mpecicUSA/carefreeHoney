<template>
    <v-toolbar fixed>
        <!-- <v-toolbar-side-icon>

            </v-toolbar-side-icon>  -->
        <!-- TODO if User Screen Small then show toolbar side icon with below items -->
        <img class="logo" src="../assets/Carefreehoney logo.jpg" alt="Carefree Honey Logo">
        <v-toolbar-title router to="/">Carefree Honey </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn router to="/" flat>Shop</v-btn>
            <!-- <v-btn router to="/ourhoney" flat>Our Honey</v-btn> -->
            <v-btn v-show="getCartLength>0" router to="/cart" flat>Cart ({{ getCartLength }})</v-btn>
            <v-btn v-show="getCartLength<1" router to="/cart" flat>Cart</v-btn>
            <!-- <v-btn v-show="this.$store.state.user.user_id" router to="/user" flat>{{this.$store.state.user.firstName}}</v-btn> -->
            <v-btn v-show="!this.$store.state.user.user_id" router to="/login" flat>Login</v-btn>
            <v-btn v-show="this.$store.state.user.admin" router to="/admin" flat>Admin Portal </v-btn>
            <v-btn v-show="this.$store.state.user.user_id" @click="logout" flat>Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            logout: function(){
                this.$store.state.user = {},
                this.$router.push("/login")
            }
        },
        computed: {
        getCartLength () {
            return this.$store.getters.getCartLength
        }
    }
    }
</script>

<style scoped>
.logo {
    max-width: 50px;
    max-height: 50px
}
</style>