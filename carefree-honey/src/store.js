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
    }
  },
  actions: {
    // Create async to pull from api -- use commit('nameOfMutation, data) to push up to mutations and update state
    fetchProductsData: (context) => {
      axios.get("http://localhost:8000/products")
        .then((resp) => context.commit("set_products",resp.data))
        .catch((err) => console.log(err))
    }
  },
  getters: {
    // used to place information from state into sub components 
    getProducts: state => {
      return state.products
    },
    getCartLength:state => {
      return state.cart.length
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
      let arrOfCart =  state.cart.map(item => item.price);
      return arrOfCart.reduce((a,b)=> a+b)
    }

  }
});
