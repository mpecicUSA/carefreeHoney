<template>
  <v-app>
    <Navbar />
    <v-container mt-5>
      <router-view></router-view>
    </v-container>
    <Footer />

  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
