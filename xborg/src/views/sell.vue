<template>
  <div class="container-xl h-[90vh] w-full">
    <div class="flex h-[500px] justify-center items-center">
      <div class="items-center">
        <form class="form-control mt-[150px]">
          <div class="flex justify-center mt-4">
            <h1 class="text-xl">CREATE NEW POST</h1>
          </div>
          <div class="flex justify-center my-4">
            <input
              class="input input-bordered input-lg w-full max-w-xs"
              type="text"
              placeholder="title"
            />
          </div>
          <div class="flex justify-center my-4">
            <textarea
              class="input input-bordered input-lg w-full max-w-xs"
              cols="30"
              rows="10"
              placeholder="description"
            ></textarea>
          </div>
          <div class="flex justify-center my-4">
            <input
              class="input input-bordered input-lg w-full max-w-xs"
              type="text"
              placeholder="stock"
            />
          </div>
          <div class="flex justify-center my-4">
            <input
              class="input input-bordered input-lg w-full max-w-xs"
              type="text"
              placeholder="price"
            />
          </div>
          <div class="flex justify-center mt-2">
            <input type="file" class="input-lg" />
          </div>
          <div class="flex justify-center mb-4">
            <input
              type="text"
              class="input input-bordered input-lg w-full max-w-xs"
              placeholder="Image Link (optional)"
            />
          </div>
          <div class="flex justify-center">
            <btn :name="'submit'" :style="'btn btn-primary btn-lg'"></btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import btn from "../components/btn.vue";
export default {
  name: "sell",
  components: {
    btn,
  },
};
</script>
