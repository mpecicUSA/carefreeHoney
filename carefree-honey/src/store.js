import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    reviews: [],
    cart: [],
    user: {}
  },
  mutations: {
    // used to change state
  },
  actions: {
    // Create async to pull from api
    fetchProductsData: () => {
      this.$http.get('http://localhost:8000/products').then(response => {
          this.products = response.body
      }).catch(error => console.log(error))
  }
  }
});
