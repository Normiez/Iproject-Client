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
          <btn
            v-if="role !== 'seller' && role === 'customer'"
            :name="'buy now!'"
            :style="'btn btn-primary'"
            :postId="data.id"
            @submit="fetchId"
          >
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePostState } from "../stores/postState";
import btn from "../components/btn.vue";
export default {
  name: "reusableCard",
  data() {
    return {
      role: localStorage.role,
    };
  },
  props: ["state"],
  computed: {
    ...mapState(usePostState, ["mainData"]),
  },
  components: {
    btn,
  },
  methods: {
    ...mapActions(usePostState, ["newCart"]),
    fetchId(id) {
      this.newCart(id)
    },
  },
};
</script>

<style></style>
