<template>
  <div class="container-xl h-[90vh] w-full">
    <div class="grid grid-cols-3 gap-3">
      <div
        class="card w-96 bg-base-100 shadow-xl"
        v-for="data in cartData"
        :key="data.id"
      >
        <figure class="px-10 pt-10">
          <img :src="data.Post.imgUrl" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{{ data.Post.title }}</h2>
          <p>{{ data.status }}</p>
          <p>Price: {{ data.Post.price }}</p>
          <div class="card-actions">
            <a
              v-if="data.status !== 'PAID'"
              class="btn btn-primary"
              :href="data.invoiceUrl"
              target="_blank"
              >Invoice</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { usePostState } from "../stores/postState";
export default {
  name: "myCart",
  computed: {
    ...mapState(usePostState, ["cartData"]),
  },
};
</script>
