import { defineStore } from "pinia";
import axios from "../API/axios";
import { useState } from "./state";

export const usePostState = defineStore({
  id: "postState",
  state: () => ({
    mainData: "",
    page: 1,
    search: "",
  }),
  getters: {},
  actions: {
    async fetchAllData(searchData) {
      const state = useState();
      state.isPending = true;
      let options;
      if (searchData) {
        this.search = searchData;
        options = {
          search: this.search,
          page: this.page,
        };
      } else {
        options = {
          page: this.page,
        };
      }
      const { data } = await axios({
        method: "GET",
        url: "/post/",
        params: options,
      });
      this.mainData = data;
      state.isPending = false;
    },
    createPost(data) {
      return axios({
        method: "post",
        url: "/post/upload",
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "multipart/form-data",
        },
        data,
      });
    },
    async fetchWares() {
      try {
        const state = useState();
        state.isPending = true;
        const { data } = await axios({
          method: "get",
          url: "/post/wares",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.mainData = data;
        state.isPending = false;
      } catch (err) {
        console.log(err);
      }
    },
    async newCart(id) {
      try {
          
        //   return axios({
        //     method: "post",
        //     url: "/customer/" + id,
        //   });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
