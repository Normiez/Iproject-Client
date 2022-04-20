import { defineStore } from "pinia";
import axios from "../API/axios";
import { useState } from "./state";

export const usePostState = defineStore({
  id: "postState",
  state: () => ({
    mainData: "",
    page: 1,
  }),
  getters: {},
  actions: {
    async fetchAllData(searchData) {
      this.search = searchData;
      const state = useState();
      state.isPending = true;
      let options;
      if (this.search) {
        options = {
          method: "GET",
          url: "/post/",
          params: {
            search: this.search,
            page: this.page,
          },
        };
      } else {
        options = {
          method: "GET",
          url: "/post/",
          params: {
            page: this.page,
          },
        };
      }
      const { data } = await axios(options);
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
  },
});
