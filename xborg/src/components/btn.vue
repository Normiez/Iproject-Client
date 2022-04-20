<template>
  <button @click="action" :class="style">{{ name }}</button>
</template>

<script>
export default {
  name: "btn",
  props: ["name", "style", "postId"],
  methods: {
    action() {
      this.$emit("submit");
    },
  },
};
</script>
