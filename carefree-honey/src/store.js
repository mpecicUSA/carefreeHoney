import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"


Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    products: [],
    reviews: [],
    cart: ["Desert Flower, 16", "Mesquite, 16"],
    user: []
  },
  mutations: {
    // used to change state sync
    set_products(state, products){
      state.products = products
    }
  },
  actions: {
    // Create async to pull from api
    fetchProductsData: (context) => {
      axios.get("http://localhost:8000/products")
        .then((resp) => context.commit("set_products",resp.data))
        .catch((err) => console.log(err))
    }
  },
  getters: {
    getProducts(state){
      return state.products
    },
    getCart(state){
      return state.cart
    },
    getUser(state){
      return state.user
    }
  }
});
