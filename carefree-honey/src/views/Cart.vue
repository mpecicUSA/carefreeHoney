<template>
    <v-container>
        <v-layout>
            <h1 v-if="this.$store.state.isLoggedIn"> Welcome {{this.$store.state.user.firstName}}</h1>
            <h1 v-else>Welcome Guest!</h1>
            <p> You have {{ getCartLength }} in your cart</p>
        </v-layout>

        <v-layout v-for="item in cartItems" :key="item.id" >
           <v-flex xs12 sm8 offset-sm2>
      <v-card>
        <v-img
          :src='item.imgUrl'
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ item.title}} -- {{item.size}}</h3>
            <div>{{item.details}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
    <v-btn flat @click="removeFromCart" color="orange">
    Remove from Cart
    </v-btn>
    </v-card-actions>
    </v-card>
    </v-flex>
        <!-- Change this to stripe integrated -->
        </v-layout>
    Total: {{ price }}
        <v-btn> Checkout</v-btn>
    </v-container>

</template>

<script>
export default {
computed: {
        getCartLength () {
            return this.$store.getters.getCartLength
        },
        cartItems () {
            return this.$store.getters.getCart
        }, 
        price () {
            return this.$store.getters.priceOfCart
        }
    },
    methods: {
        removeFromCart() {
            console.log("remove was clicked")
        }
    }
}
</script>


<style>

</style>
