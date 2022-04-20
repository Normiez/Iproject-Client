<template>
  <div>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <div class="navbar bg-base-100">
          <label for="my-drawer" class="btn btn-ghost drawer-button"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path></svg
          ></label>
          <div class="flex-1">
            <div class="normal-case text-xl mx-3">X-BORG</div>
            <img
              src="../assets/Xborg.png"
              class="inline-block w-10 h-10 stroke-current"
            />
          </div>
          <div class="flex-none dropdown dropdown-end">
            <button tabindex="0" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li v-if="isLogin === false">
                <router-link :to="'/login'">Login-register</router-link>
              </li>
              <li v-if="isLogin === true">
                <router-link :to="'/'" @click.prevent="logout"
                  >Logout</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <router-view />
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <div class="py-3 border border-white rounded border mb-3">
            <div class="flex justify-center">
              <h1>WELCOME</h1>
            </div>
            <div class="flex justify-center">
              <h1>{{ email }}</h1>
            </div>
            <div v-if="role === 'seller'" class="flex uppercase justify-center">
              <h1 class="col">You can sell your wares</h1>
            </div>
            <div
              v-if="role === 'customer'"
              class="flex uppercase justify-center"
            >
              <h1 class="col">Spend your money here</h1>
            </div>
          </div>
          <!-- Sidebar content here -->
          <li><router-link :to="'/'">HomePage</router-link></li>
          <li v-if="role === 'seller'">
            <router-link :to="'/sell'">Sell Wares</router-link>
          </li>
          <li v-if="role === 'seller'">
            <router-link :to="'/myWares'">My Wares</router-link>
          </li>
          <li v-if="role === 'customer'">
            <router-link :to="'/myCart'">My Cart</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useState } from "../stores/state";
export default {
  name: "mainContent",
  computed: {
    ...mapState(useState, ["email", "role"]),
    ...mapWritableState(useState, ["isPending", "isLogin"]),
  },
  methods: {
    ...mapActions(useState, ["doLogout"]),
    async logout() {
      try {
        this.isPending = true;
        await this.doLogout;
        localStorage.clear();
        this.isLogin = false;
        this.isPending = false;
        //swall berhasil disini
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<style></style>
