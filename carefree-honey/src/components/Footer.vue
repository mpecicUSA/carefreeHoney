<template>
  <v-footer
    dark
    height="auto"
    
  >
  <v-btn router to="/findus" flat>Find Us</v-btn>
  <v-btn router to="/about" flat>About</v-btn>
  <v-bottom-sheet v-modal="sheet">
  <!-- <v-btn router to="/contactus" flat>Contact</v-btn> -->
  <v-btn
  flat
  slot="activator"
  >
  Contact
  </v-btn>
  <v-list>
      <v-subheader>Contact</v-subheader>
        <v-list-tile
          @click="sheet = false"
        >
          <v-list-tile-title>Phone: 480-636-9859</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          @click="sheet = false"
        >
          <v-list-tile-title><a href="mailto:carefreehoney@gmail.com" > carefreehoney@gmail.com</a></v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          @click="sheet = false"
        >
          <v-list-tile-title><a href='http://www.facebook.com/carefreehoney'>Facebook.com/carefreehoney</a></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet> 
  <v-divider></v-divider>


<v-card-text class="white--text" >
  &copy;2019 — <strong>Carefree Honey LLC</strong>
</v-card-text>

</v-footer>
</template>

<script>
  export default {
    data: () => {
      return {
        sheet: false
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>

