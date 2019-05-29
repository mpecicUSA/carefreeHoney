import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"


Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    products: [],
    cart: [],
    user: [],
    editId: Number,
    isLoggedIn: false
  },
  mutations: {
    // used to change sync state
    set_products(state, products){
      state.products = products
    },
    mutateEditId(state, productId){
      state.editId = productId
    },
    removeFromCart(state, id){
      for(let i=0; i<state.cart.length; i++){
        if(Number(state.cart[i].id) === Number(id)){
          state.cart[i].inCart-=1
        }
      }
    },
    addToCart(state,product){
      // is the item already in the cart ? 
      if(state.cart.map(item => Number(item.id)).includes(Number(product.id))){
        // item is in cart / increase that specific item's inCart quantity by 1
        for(let i=0; i<state.cart.length; i++){
          if(Number(state.cart[i].id) === Number(product.id)){
            state.cart[i].inCart+=1
          }
        }

      }else{
        // item is not in cart, set inCart to 1, push into cart array. 
        product.inCart = 1; 
        state.cart.push(product);
      }
    }
  },
  actions: {
    // Create async to pull from api -- use commit('nameOfMutation, data) to push up to mutations and update state
    fetchProductsData: (context) => {
      axios.get("http://localhost:8000/products")
        .then((resp) => context.commit("set_products", resp.data))
        .catch((err) => console.log(err))
    }
  },
  getters: {
    // used to place information from state into sub components 
    getProducts: state => {
      return state.products
    },
    getCartLength:state => {
      if(state.cart.length < 1){
        return 0
      }else {
        return state.cart.map(item => item.inCart).reduce((a,b) => a+b)
      }
    },
    getUser:state => {
      return state.user
    },
    getSpecificProduct:state => {
      return state.products.filter(product => product.id === state.editId)[0]
    },
    getCart: state => {
      return state.cart
    },
    priceOfCart: state => {
      let arrOfCart =  [];
      for(let i=0; i<state.cart.length; i++){
        if(state.cart[i].inCart>0){
          arrOfCart.push(state.cart[i].price*state.cart[i].inCart)
        }
      }
      if(arrOfCart.length>0){
        return arrOfCart.reduce((a,b)=> a+b)
      } else {
        return 0
      }
    }

  }
});
