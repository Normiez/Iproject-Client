<template>
  <div>
    <form @submit.prevent="submit">
      <div class="flex justify-center">
        <input
          v-model="data.email"
          type="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div class="flex justify-center my-5">
        <input
          v-model="data.password"
          type="password"
          placeholder="Password"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
      <div v-if="state === 'Register'">
        <div class="flex justify-center my-5">
          <input
            v-model="data.address"
            type="text"
            placeholder="Address"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="flex justify-center my-5">
          <label for="selector"></label>
          <select
            v-model="data.role"
            class="select select-bordered w-full max-w-xs"
          >
            <option value=".">--SELECT ROLE--</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>
        </div>
      </div>
      <div class="flex justify-center my-3">
        <button class="btn" type="submit">{{ state }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginRegisterForm",
  props: ["state"],
  emits: ["submit"],
  data() {
    return {
      data: {
        email: "",
        password: "",
        role: ".",
        address: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.data);
    },
  },
};
</script>

<style></style>
