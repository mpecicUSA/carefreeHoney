import Vue from "vue";
import Router from "vue-router";

import Shop from "./views/Shop.vue";
import Findus from "./views/Findus.vue"
import About from "./views/About.vue"
import ContactUs from "./views/ContactUs.vue"
import OurHoney from "./views/OurHoney.vue"
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import User from "./views/User.vue"






Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "shop",
      component: Shop
    },
    {
      path: "/findus",
      name: "findus",
      component: Findus
    },
    {
      path: "/about",
      name: "about",
      component: About
    },{
      path: "/contactus",
      name: "contact",
      component: ContactUs
    },{
      path: "/ourhoney",
      name: "ourHoney",
      component: OurHoney
    }, {
      path: "/login",
      name: "login",
      component: Login
    }, {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
});
