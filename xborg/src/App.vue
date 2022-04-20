<template>
  <div>
    <div
      class="flex h-screen w-auto justify-center items-center"
      v-if="isPending === true"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif"
        alt="now loading"
        class="max-h-[100px] absolute"
      />
    </div>
    <mainContent v-if="isPending === false"></mainContent>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useState } from "./stores/state";
import mainContent from "./views/mainContent.vue";
export default {
  name: "App",
  components: {
    mainContent,
  },
  computed: {
    ...mapState(useState, ["isPending"]),
  },
};
</script>

<style></style>
