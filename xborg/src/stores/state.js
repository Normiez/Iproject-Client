import { defineStore } from "pinia";
import axios from "../API/axios";

export const useState = defineStore({
  id: "state",
  state: () => ({
    isLogin: false,
    isPending: false,
    email: localStorage.getItem("email"),
    role: localStorage.getItem("role"),
  }),
  getters: {},
  actions: {
    login(userData) {
      return axios({
        method: "post",
        url: "/login",
        data: userData,
      });
    },
    register(userData) {
      return axios({
        method: "post",
        url: "/register",
        data: userData,
      });
    },
    doLogout() {
      return axios({
        method: "post",
        url: "/logout",
      });
    },
  },
});
