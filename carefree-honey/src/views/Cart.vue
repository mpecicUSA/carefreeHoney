<template>
<v-container>
    <v-layout>
        <v-flex xs8>
            <h1 v-if="this.$store.state.isLoggedIn"> Welcome {{this.$store.state.user.firstName}}</h1>
            <h1 v-else>Welcome Guest!</h1>
            <p> You have {{ getCartLength }} items in your cart</p>
        </v-flex>
        <v-flex xs-4 >
            Total: ${{ price }}
            <v-btn raised color="orange" @click="checkout"> Checkout</v-btn>
            <v-alert
                :value="clicked"
                type="info"
            >
            You are checking out 
            </v-alert>
        </v-flex>
    </v-layout>

    <v-layout>
        <v-flex xs12 sm8 offset-sm2 >
            <v-flex v-for="item in cartItems" :key="item.id" mb-3>
                <v-card v-show="item.inCart>0">
                <v-img
                :src='item.imgUrl'
                aspect-ratio="2.75"
                ></v-img>
                <v-card-title primary-title>
                    <div>
                    <h3 class="headline mb-0">{{ item.title}} -- {{item.size}}</h3>
                    </div>
                    </v-card-title>
                    <v-card-text>
                        <div>
                        {{item.details}}
                        </div>

                    </v-card-text>
                    <v-card-actions>
                    Quantity: {{item.inCart}} X ${{item.price}} 
                    <v-spacer/>
                        <v-btn :value="item.id" raised @click="removeFromCart" color="error">
                        Remove from Cart
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
export default {
    data() {
        return{
            clicked:false
        }
    },
computed: {
        getCartLength () {
            return this.$store.getters.getCartLength
        },
        cartItems () {
            return this.$store.getters.getCart
        }, 
        price () {
            if(this.$store.getters.priceOfCart){
                return this.$store.getters.priceOfCart
            }else{
                return 0
            }
        }
    },
    methods: {
        removeFromCart(e) {
            // console.log(e.target.value)
            this.$store.state.cart.map(product => product.id === Number(e.target.value) ? product.inCart-- : null)
        },
        checkout(){
            this.clicked = !this.clicked;
            setTimeout(() => {
                this.clicked = !this.clicked; 
            }, 5000)
        }
    }
}
</script>


<style>

</style>
