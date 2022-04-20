<template>
  <div class="grid grid-cols-3 gap-3">
    <div
      class="card w-96 bg-base-100 shadow-xl"
      v-for="data in mainData"
      :key="data.id"
    >
      <figure class="px-10 pt-10">
        <img :src="data.imgUrl" alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ data.title }}</h2>
        <p>{{ data.description }}</p>
        <p>Price: {{ data.price }}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { usePostState } from "../stores/postState";
export default {
  name: "reusableCard",
  computed: {
    ...mapState(usePostState, ["mainData"]),
  },
};
</script>

<style></style>
