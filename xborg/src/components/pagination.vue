<template>
  <div class="btn-group">
    <button @click="decrement" class="btn btn-primary">«</button>
    <p class="btn text-white">Page {{ page }}</p>
    <button @click="increment" class="btn btn-primary">»</button>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { usePostState } from "../stores/postState";
export default {
  name: "PaginationTop",
  methods: {
    ...mapActions(usePostState, ["fetchAllData"]),
    async decrement() {
      if (this.page > 1) {
        this.page--;
        this.fetchAllData();
      }
    },
    async increment() {
      if (this.mainData.length > 20) {
        this.page++;
        this.fetchAllData();
      }
    },
  },
  computed: {
    ...mapWritableState(usePostState, ["page", "mainData"]),
  },
};
</script>

<style></style>
