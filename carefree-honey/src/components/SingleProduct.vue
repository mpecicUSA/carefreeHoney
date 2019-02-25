<template>
  <v-container >
    <v-flex xs12 sm8 offset-sm2>
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
          <v-btn flat @click="addProductToCart" color="orange">
            Add to Cart
          </v-btn>
          <v-btn v-show="this.$store.state.user.admin" flat @click="edit" color="orange">Edit product</v-btn>
          <!-- <v-btn flat @click="addReview(products.id,this.$store.state.user.user_id)" color="orange">Add a review</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>



<script>
export default {
  props:["products"],
  
  methods:{
    addProductToCart(){
      this.$store.state.cart.push(this.products.id);
    },
    edit(){
      this.$store.commit("mutateEditId", this.products.id)
      this.$router.push(`/edit-product/${this.products.id}`)
    }
  }
};
</script>
