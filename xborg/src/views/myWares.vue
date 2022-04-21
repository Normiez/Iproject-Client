<template>
  <div class="container-xl h-[90vh] w-full">
    <div class="flex justify-center items-center">
      <reusableCard :state="'wares'"></reusableCard>
    </div>
  </div>
</template>

<script>
import reusableCard from "../components/reusableCard.vue";
export default {
  name: "myWares",
  components: {
    reusableCard,
  },
};
</script>
