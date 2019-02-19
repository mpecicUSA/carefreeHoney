<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title router to="/">Carefree Honey </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn router to="/ourhoney" flat>Our Honey</v-btn>
            <v-btn router to="/findus" flat>Find Us</v-btn>
            <v-btn router to="/contactus" flat>Contact</v-btn>
            <v-btn router to="/about" flat>About</v-btn>
            <v-btn router to="/" flat>Shop</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    
}
</script>
