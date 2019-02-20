<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src='products.imgUrl'
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ products.title}} -- {{products.size}}</h3>
            <div>{{products.details}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat @click="addProductToCart(products.id)" color="orange">
            Add to Cart
          </v-btn>
          <v-btn v-show="this.$store.state.user.purchases.contains(product.id)" flat @click="addReview(products.id,this.$store.state.user.user_id)" color="orange">Add a review</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:["products"],
  methods:{
    addProductToCart(id){
      this.$store.state.cart.push(id);
    }
  }
};
</script>
