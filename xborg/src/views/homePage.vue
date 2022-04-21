<template>
  <div class="container-xl h-[90vh] w-full">
    <div class="grid grid-cols-12 text-white mt-10">
      <div class="col-span-3">
        <input
          v-model="searchData"
          type="text"
          class="input input-bordered w-full max-w-xs ml-5"
          placeholder="Search Title"
        />
        <btn
          @submit="submit"
          :name="'Search Title!'"
          :style="'btn btn-primary mt-5 ml-5'"
        ></btn>
      </div>
      <div class="col-span-9">
        <pagination></pagination>
        <reusableCard></reusableCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePostState } from "../stores/postState";
import pagination from "../components/pagination.vue";
import btn from "../components/btn.vue";
import reusableCard from "../components/reusableCard.vue";
export default {
  name: "HomePage",
  components: {
    btn,
    reusableCard,
    pagination,
  },
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    ...mapActions(usePostState, ["fetchAllData"]),
    submit() {
      this.fetchAllData(this.searchData);
    },
  },
};
</script>

<style></style>
