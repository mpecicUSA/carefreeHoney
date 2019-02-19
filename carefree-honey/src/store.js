import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    reviews: [],
    cart: [],
    user: {},
    
  },
  mutations: {},
  actions: {
    // Create axions to pull from state
  
  }
});
