<template>
  <button @click="action" :class="style">{{ name }}</button>
</template>

<script>
export default {
  name: "btn",
  props: ["name", "style", "postId"],
  methods: {
    action() {
      if (this.name === "buy now!") {
        this.$emit("submit", this.postId);
      } else {
        this.$emit("submit");
      }
    },
  },
};
</script>
