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
        <v-card-actions >
          ${{products.price}}
          <v-spacer/>
          <v-btn center @click="addProductToCart" color="orange">
            Add to Cart
          </v-btn>
        
          <v-btn v-show="this.$store.state.user.admin"  @click="edit" color="orange">Edit product</v-btn>
          <!-- <v-btn flat @click="addReview(products.id,this.$store.state.user.user_id)" color="orange">Add a review</v-btn> -->
        </v-card-actions>
          <v-flex>

          <v-alert
          :value="clicked"
          type="success"
          >
          {{products.title}} has been added to cart
          </v-alert>
          </v-flex>
      </v-card>
    </v-flex>
  </v-container>
</template>



<script>
export default {
  props:["products"],
  data() {
    return {
      clicked: false
    }
  },
  methods:{
    addProductToCart(e){
        this.clicked = true;
            setTimeout(() => {
                this.clicked = false; 
            }, 3000)
        let arrOfIds = this.$store.state.cart.map(product => product.id);
          this.products.inCart++;
        if(arrOfIds.includes(this.products.id)){
          this.$store.state.cart.map(product => product.inCart = this.products.inCart)
        } else {
          this.$store.state.cart.push(this.products)
        }
    },
    edit(){
      this.$store.commit("mutateEditId", this.products.id)
      this.$router.push(`/edit-product/${this.products.id}`)
    }
  }
};
</script>
