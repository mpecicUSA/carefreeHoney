<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon>  -->
        <!-- TODO if User Screen Small then show toolbar side icon with below items -->
        <v-toolbar-title router to="/">Carefree Honey </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn router to="/ourhoney" flat>Our Honey</v-btn>
            <v-btn router to="/findus" flat>Find Us</v-btn>
            <v-btn router to="/contactus" flat>Contact</v-btn>
            <v-btn router to="/about" flat>About</v-btn>
            <v-btn router to="/" flat>Shop</v-btn>
            <v-btn v-show="token" router to="/user" flat>UserName here</v-btn>
            <v-btn v-show="!token" router to="/login" flat>Login</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            // TODO Import token here to autorender navbar correclty based on login
            token: false
        }
    }
}
</script>
