<template>
  <div class="flex justify-center content-center container-xl h-[90vh] w-full">
    <div class="grid gap-4 grid-cols-2">
      <div class="flex justify-start content-center h-[500px] w-[400px]">
        <div class="col mt-5">
          <div class="my-5 justify-center flex">
            <img
              src="https://c.tenor.com/CigpzapemsoAAAAi/hi-robot.gif"
              alt="robot"
              class="max-h-[200px]"
            />
          </div>
          <div class="my-5">
            <h1 class="uppercase text-white">
              To use our app, please login first
            </h1>
          </div>
          <div class="my-5">
            <loginRegister @submit="doLogin" :state="'Login'"></loginRegister>
          </div>
        </div>
      </div>
      <div class="text-white flex justify-end items-center">
        <div class="col mt-5">
          <div class="my-5">
            <h1 class="uppercase">You can do register here too!</h1>
          </div>
          <div class="my-5">
            <loginRegister
              @submit="doRegister"
              :state="'Register'"
            ></loginRegister>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useState } from "../stores/state";
import loginRegister from "../components/login-register.vue";
export default {
  name: "login",
  components: {
    loginRegister,
  },
  computed: {
    ...mapWritableState(useState, ["isLogin", "isPending"]),
  },
  methods: {
    ...mapActions(useState, ["login", "register"]),
    async doLogin(userData) {
      try {
        this.isPending = true;
        const { data } = await this.login(userData);
        localStorage.access_token = data.access_token;
        localStorage.email = data.email;
        localStorage.role = data.role;
        this.isLogin = true;
        this.isPending = false;
        this.$router.push("/");
        //swall success disini
      } catch (err) {
        this.isPending = false;
        console.log(err.response.data.message);
        //swall error disini
      }
    },
    async doRegister(userData) {
      try {
        this.isPending = true;
        await this.register(userData);
        console.log("success");
        this.isPending = false;
        //swall success disini
      } catch (err) {
        this.isPending = false;
        console.log(err.response.data.message);
      }
    },
  },
};
</script>
