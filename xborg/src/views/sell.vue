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
              v-model="newData.title"
              class="input input-bordered input-lg w-full max-w-xs"
              type="text"
              placeholder="title"
            />
          </div>
          <div class="flex justify-center my-4">
            <textarea
              v-model="newData.description"
              class="input input-bordered input-lg w-full max-w-xs"
              cols="30"
              rows="10"
              placeholder="description"
            ></textarea>
          </div>
          <div class="flex justify-center my-4">
            <input
              v-model="newData.stock"
              class="input input-bordered input-lg w-full max-w-xs"
              type="number"
              placeholder="stock"
            />
          </div>
          <div class="flex justify-center my-4">
            <input
              v-model="newData.price"
              class="input input-bordered input-lg w-full max-w-xs"
              type="number"
              placeholder="price"
            />
          </div>
          <div class="flex justify-center mt-2">
            <input v-on:change="uploadData" type="file" class="input-lg" />
          </div>
          <div class="flex justify-center mb-4">
            <input
              v-model="newData.imgUrl"
              type="text"
              class="input input-bordered input-lg w-full max-w-xs"
              placeholder="Image Link (optional)"
            />
          </div>
        </form>
        <div class="flex justify-center">
          <btn
            :name="'submit'"
            :style="'btn btn-primary btn-lg'"
            v-on:submit="submit"
          ></btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePostState } from "../stores/postState";
import btn from "../components/btn.vue";
export default {
  name: "sell",
  data() {
    return {
      newData: {
        title: "",
        description: "",
        stock: "",
        price: "",
        imgUrl: "",
        imgData: "",
      },
    };
  },
  methods: {
    ...mapActions(usePostState, ["createPost"]),
    uploadData(event) {
      this.newData.imgData = event.target.files[0];
    },
    async submit() {
      try {
        if (!this.newData.imgUrl) {
          try {
            let formData = new FormData();
            formData.append("title", this.newData.title);
            formData.append("file", this.newData.imgData);
            formData.append("description", this.newData.description);
            formData.append("stock", this.newData.stock);
            formData.append("price", this.newData.price);
            await this.createPost(formData, config);
            this.$router.push("/");
            //swal berhasil
          } catch (err) {
            // console.log(err.response.data.message);
            console.log(err);
          }
        } else {
          try {
            console.log(this.newData);
            await this.createPost(this.newData, null);
            this.$router.push("/");
            //swal berhasil
          } catch (err) {
            // console.log(err.response.data.message);
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  components: {
    btn,
  },
};
</script>
