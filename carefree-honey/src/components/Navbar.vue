<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon>

            </v-toolbar-side-icon>  -->
        <!-- TODO if User Screen Small then show toolbar side icon with below items -->
        <img class="logo" src="../assets/Carefreehoney logo.jpg" alt="Carefree Honey Logo">
        <v-toolbar-title router to="/">Carefree Honey </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn router to="/" flat>Shop</v-btn>
            <!-- <v-btn router to="/ourhoney" flat>Our Honey</v-btn> -->
            <v-btn router to="/findus" flat>Find Us</v-btn>
            <v-btn router to="/contactus" flat>Contact</v-btn>
            <v-btn router to="/about" flat>About</v-btn>
            <v-btn router to="/cart" flat>Cart ({{ this.$store.getters.getCart.length }})</v-btn>
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
                // TODO Import token here to autorender navbar correclty based on login
            }
        },
        methods: {
            logout: function(){
                this.$store.state.user = {},
                this.$router.push("/login")
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