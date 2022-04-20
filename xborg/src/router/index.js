import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import myWares from "../views/myWares.vue";
import myCart from "../views/myCart.vue";
import sell from "../views/sell.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/myWares",
      name: "myWares",
      component: myWares,
    },
    {
      path: "/myCart",
      name: "myCart",
      component: myCart,
    },
    {
      path: "/sell",
      name: "sell",
      component: sell,
    },
  ],
});

export default router;
